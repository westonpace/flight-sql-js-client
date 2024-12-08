import { RecordBatchStream } from "./arrow_util";
import { FlightClient } from "./flight";

import { arrow } from "./generated/flight";
import { arrow as fsql } from "./generated/flightsql";
import { google } from "./generated/any";
import { firstValueFrom } from "./async_util";

// Some quick duck-typing to state what we expect from protobuf messages
interface WriterLike {
  finish(): Uint8Array;
}

// Some quick duck-typing to state what we expect from protobuf messages
// (used in FlightSqlClient.packAny)
interface MessageLike {
  getTypeUrl(prefix?: string): string;
  encode(message: unknown): WriterLike;
}

export class FlightSqlClient {
  private flight: FlightClient;

  private constructor(flight: FlightClient) {
    this.flight = flight;
  }

  private async login(username: string, password: string): Promise<void> {
    const auth = "Basic " + btoa(username + ":" + password);
    const call = this.flight.handshake({
      authorization: auth,
    });
    const hello: arrow.flight.protocol.IHandshakeRequest = {
      payload: new Uint8Array(),
      protocolVersion: 0,
    };
    call.send(hello);
    try {
      const hello_rsp = await firstValueFrom(call.responses);
      if (hello_rsp?.data?.payload) {
        const payload = new TextDecoder().decode(hello_rsp.data.payload);
        this.flight.set_default_metadata({
          authorization: "Bearer " + payload,
        });
      } else if (hello_rsp?.metadata) {
        const authorization = hello_rsp.metadata.get_first_string("authorization");
        if (!authorization) {
          throw new Error("Handshake failed, metadata received but no authorization header present");
        }
        this.flight.set_default_metadata({
          authorization,
        });
      } else {
        throw new Error("Handshake failed, no metadata or data received from server before call completed");
      }
    } finally {
      // Since we are only taking the first value we should cancel just in case the sender is trying
      // to send more values.
      call.cancel();
    }
  }

  public static async connect(host: string, username: string, password: string): Promise<FlightSqlClient> {
    const sql = new FlightClient(host);
    const client = new FlightSqlClient(sql);
    await client.login(username, password);
    return client;
  }

  private static packAny(message: MessageLike, thing: unknown): Uint8Array {
    const packed: google.protobuf.IAny = {
      typeUrl: message.getTypeUrl(),
      value: message.encode(thing).finish(),
    };
    return google.protobuf.Any.encode(packed).finish();
  }

  private static makeCmd(message: MessageLike, thing: unknown): arrow.flight.protocol.IFlightDescriptor {
    const cmd = FlightSqlClient.packAny(message, thing);
    return {
      type: arrow.flight.protocol.FlightDescriptor.DescriptorType.CMD,
      cmd,
    };
  }

  public async statementQuery(query: fsql.flight.protocol.sql.ICommandStatementQuery): Promise<RecordBatchStream> {
    const cmd = FlightSqlClient.makeCmd(fsql.flight.protocol.sql.CommandStatementQuery, query);

    const ticket_call = await this.flight.getFlightInfo(cmd);
    const schema = ticket_call.decodedSchema;

    if (!schema) {
      throw new Error("No schema provided by server");
    }

    if (!ticket_call.endpoint) {
      throw new Error("No endpoint provided by server");
    }
    if (ticket_call.endpoint.length !== 1) {
      throw new Error("Expected exactly one endpoint");
    }
    const endpoint = ticket_call.endpoint[0];
    if (endpoint.location && endpoint.location.length > 0) {
      throw new Error("Cannot handle remote location: " + endpoint.location);
    }

    if (!endpoint.ticket) {
      throw new Error("No ticket provided by server");
    }
    const ticket = endpoint.ticket;

    return this.flight.doGet(ticket, schema);
  }
}

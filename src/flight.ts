import {
  loadPackageDefinition,
  GrpcObject,
  ServiceClientConstructor,
  credentials,
  Metadata as GrpcMetadata,
} from "@grpc/grpc-js";
import { loadSync, Long } from "@grpc/proto-loader";
import { arrow } from "./generated/flight";
import { RecordBatchStreamReader, Schema } from "apache-arrow";
import { Bidirectional, Stream } from "./grpc_util";
import { RecordBatchStream } from "./arrow_util";

const PROTO_PATH = __dirname + "/../protos/Flight.proto";

export class FlightInfo implements arrow.flight.protocol.IFlightInfo {
  private inner: arrow.flight.protocol.IFlightInfo;
  private decodedSchema_?: Schema;

  constructor(inner: arrow.flight.protocol.IFlightInfo) {
    this.inner = inner;
  }

  public get decodedSchema(): Schema | null {
    if (!this.decodedSchema_) {
      if (!this.schema) {
        return null;
      }
      const reader = RecordBatchStreamReader.from(this.schema);
      const batches = reader.readAll();
      this.decodedSchema_ = batches[0].schema;
    }
    return this.decodedSchema_;
  }

  public get schema(): Uint8Array | null | undefined {
    return this.inner.schema;
  }

  public get flightDescriptor(): arrow.flight.protocol.IFlightDescriptor | null | undefined {
    return this.inner.flightDescriptor;
  }

  public get endpoint(): arrow.flight.protocol.IFlightEndpoint[] | null | undefined {
    return this.inner.endpoint;
  }

  public get totalRecords(): number | Long | null | undefined {
    return this.inner.totalRecords;
  }

  public get totalBytes(): number | Long | null | undefined {
    return this.inner.totalBytes;
  }

  public get ordered(): boolean | null | undefined {
    return this.inner.ordered;
  }

  public get appMetadata(): Uint8Array | null | undefined {
    return this.inner.appMetadata;
  }
}

export class FlightClient {
  private protoDescriptor: GrpcObject;
  // TODO: Figure out why protobuf gen is not generating correct method signatures for FlightService
  // It doesn't seem to support streaming methods and types them all as RPCUnary

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private client: any;
  private default_metadata: Record<string, string>;

  public constructor(host: string) {
    const packageDefinition = loadSync(PROTO_PATH, {
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });
    this.protoDescriptor = loadPackageDefinition(packageDefinition);
    this.default_metadata = {};
    const arrow = this.protoDescriptor.arrow as GrpcObject;
    const flight = arrow.flight as GrpcObject;
    const flight_protocol = flight.protocol as GrpcObject;
    const flight_service = flight_protocol.FlightService as ServiceClientConstructor;
    this.client = new flight_service(
      host,
      credentials.createInsecure(),
      {},
    ) as unknown as arrow.flight.protocol.FlightService;
  }

  private get_metadata(custom_metadata?: Record<string, string>): GrpcMetadata {
    const metadata = new GrpcMetadata();
    for (const key in this.default_metadata) {
      metadata.set(key, this.default_metadata[key]);
    }
    if (custom_metadata) {
      for (const key in custom_metadata) {
        metadata.set(key, custom_metadata[key]);
      }
    }
    return metadata;
  }

  public set_default_metadata(metadata: Record<string, string>): void {
    this.default_metadata = metadata;
  }

  public handshake(
    metadata: Record<string, string>,
  ): Bidirectional<
    arrow.flight.protocol.IHandshakeRequest,
    arrow.flight.protocol.IHandshakeResponse,
    arrow.flight.protocol.IHandshakeResponse
  > {
    const call = this.client.handshake(this.get_metadata(metadata));
    return new Bidirectional(call, arrow.flight.protocol.HandshakeRequest.encode);
  }

  public listFlights(
    criteria: arrow.flight.protocol.ICriteria,
  ): Stream<arrow.flight.protocol.IFlightInfo, arrow.flight.protocol.IFlightInfo> {
    const criteria_msg = arrow.flight.protocol.Criteria.encode(criteria);
    const call = this.client.listFlights(criteria_msg, this.get_metadata());
    return new Stream(call);
  }

  public async getFlightInfo(descriptor: arrow.flight.protocol.IFlightDescriptor): Promise<FlightInfo> {
    return new Promise((resolve, reject) => {
      this.client.getFlightInfo(
        descriptor,
        this.get_metadata(),
        (err: unknown, info: arrow.flight.protocol.IFlightInfo) => {
          if (err) {
            reject(err);
          }
          resolve(new FlightInfo(info));
        },
      );
    });
  }

  public async doGet(ticket: arrow.flight.protocol.ITicket, schema: Schema): Promise<RecordBatchStream> {
    const call = this.client.doGet(ticket, this.get_metadata());
    const rawStream = new Stream<arrow.flight.protocol.IFlightData, arrow.flight.protocol.IFlightData>(call);
    return await RecordBatchStream.create(rawStream, schema);
  }
}

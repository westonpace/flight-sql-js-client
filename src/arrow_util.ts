import { AsyncRecordBatchStreamReader, Schema } from "apache-arrow";

import { arrow } from "./generated/flight";
import { Stream } from "./grpc_util";
import { RecordBatchStreamReader } from "apache-arrow";
import { pipe, filter, map } from "iter-ops";

/**
 * An async iterator of Arrow record batches that also has a schema.
 */
export class RecordBatchStream {
  private batches: AsyncRecordBatchStreamReader;
  /**
   * The schema of the record batches.
   */
  schema: Schema;

  constructor(batches: AsyncRecordBatchStreamReader, schema: Schema) {
    this.batches = batches;
    this.schema = schema;
  }

  // Creates an IPC stream message from a FlightData message.
  //
  // Note: this introduces a data copy.  It would be better to avoid this.
  // However, this will require changes to the Arrow package (I think) to allow for
  // the header and body to be in separate buffers.
  private static createIpcMessage(data: arrow.flight.protocol.IFlightData): Uint8Array {
    if (!data.dataHeader || !data.dataBody) {
      throw new Error("Data header or body missing");
    }

    const headerLength = data.dataHeader.length;
    const padBytes = (8 - (headerLength & 7)) & 7;

    // TODO: Avoid copy
    const ipcMessage = new Uint8Array(8 + data.dataHeader?.length + padBytes + data.dataBody?.length);
    // Continuation header
    ipcMessage[0] = 0xff;
    ipcMessage[1] = 0xff;
    ipcMessage[2] = 0xff;
    ipcMessage[3] = 0xff;
    // Header length
    new DataView(ipcMessage.buffer, 4, 4).setInt32(0, headerLength, true);
    // Header
    ipcMessage.set(data.dataHeader!, 8);
    // Pad bytes
    ipcMessage.fill(0, 8 + data.dataHeader?.length, 8 + data.dataHeader?.length + padBytes);
    // Body
    ipcMessage.set(data.dataBody!, data.dataHeader?.length + 8 + padBytes);

    return ipcMessage;
  }

  /**
   * Creates a new RecordBatchStream from a Flight data stream.
   * @param dataStream A stream of FlightData messages
   * @param schema The schema of the stream
   * @returns A RecordBatchStream
   */
  public static async create(
    dataStream: Stream<arrow.flight.protocol.IFlightData, arrow.flight.protocol.IFlightData>,
    schema: Schema,
  ): Promise<RecordBatchStream> {
    // RecordBatchStreamReader doesn't know how to read flight data but it does know how to read an IPC
    // stream and flight data is close enough.
    // We create an async iterator of byte buffers and then create a RecordBatchStreamReader from that.
    const messages = pipe(
      dataStream.responses,
      filter((envelope) => !!envelope.data),
      map((envelope) => this.createIpcMessage(envelope.data!)),
    );

    const batches = await RecordBatchStreamReader.from(messages);

    return new RecordBatchStream(batches, schema);
  }

  // This marks the class as an async iterable.
  public [Symbol.asyncIterator]() {
    return this.batches[Symbol.asyncIterator]();
  }
}

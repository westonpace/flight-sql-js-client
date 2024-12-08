import { Metadata as GrpcMetadata } from "@grpc/grpc-js";
import { SimpleChannel } from "./async_util";
import { Writer } from "protobufjs";

export class Metadata {
  inner: GrpcMetadata;

  constructor(inner: GrpcMetadata) {
    this.inner = inner;
  }

  public get(key: string): (string | Buffer)[] {
    return this.inner.get(key);
  }
  public get_first_instance(key: string): string | Buffer | null {
    const values = this.inner.get(key);
    if (values.length > 0) {
      return values[0];
    } else {
      return null;
    }
  }
  get_first_string(key: string, encoding?: BufferEncoding): string | null {
    const value = this.get_first_instance(key);
    if (value) {
      if (Buffer.isBuffer(value)) {
        return value.toString(encoding);
      } else {
        return value;
      }
    } else {
      return null;
    }
  }
}

export interface Envelope<O> {
  data?: O;
  metadata?: Metadata;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export class Stream<GrpcOutput, StreamOutput> {
  public responses: SimpleChannel<Envelope<StreamOutput>>;

  public cancel(): void {
    this.call.cancel();
  }

  protected call: any;
  private messageDecoder?: (msg: GrpcOutput) => StreamOutput;

  constructor(call: any, messageDecoder?: (msg: GrpcOutput) => StreamOutput) {
    this.call = call;
    this.messageDecoder = messageDecoder;
    this.responses = new SimpleChannel<Envelope<StreamOutput>>(() => call.cancel());
    call.on("data", (data: any) => {
      if (this.messageDecoder) {
        data = this.messageDecoder(data);
      }
      this.responses.push({ data });
    });
    call.on("metadata", (metadata: GrpcMetadata) => {
      this.responses.push({ metadata: new Metadata(metadata) });
    });
    call.on("error", (error: any) => {
      this.responses.push_err(error);
    });
    call.on("end", () => {
      this.responses.close();
    });
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export class Bidirectional<StreamInput, GrpcOutput, StreamOutput> extends Stream<GrpcOutput, StreamOutput> {
  public send(item: StreamInput): void {
    this.call.write(this.messageEncoder(item));
  }

  private messageEncoder: (msg: StreamInput) => Writer;

  constructor(
    call: unknown,
    messageEncoder: (msg: StreamInput) => Writer,
    messageDecoder?: (msg: GrpcOutput) => StreamOutput,
  ) {
    super(call, messageDecoder);
    this.messageEncoder = messageEncoder;
  }
}

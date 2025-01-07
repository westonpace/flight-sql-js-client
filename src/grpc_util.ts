import { Metadata as GrpcMetadata } from "@grpc/grpc-js";
import { SimpleChannel } from "./async_util";
import { Writer } from "protobufjs";

// Utilities for working with GRPC

/**
 * Wrapper around GRPC Metadata to make it easier to work with and reduce the
 * amount of GRPC-specific code in the rest of the application.
 */
export class Metadata {
  inner: GrpcMetadata;

  /**
   * Create a new Metadata object.
   * @param inner the GRPC Metadata object to wrap.
   */
  constructor(inner: GrpcMetadata) {
    this.inner = inner;
  }

  /**
   * Get all values for a given key.
   * @param key the key to get values for.
   * @returns an array of values for the key.
   */
  public get(key: string): (string | Buffer)[] {
    return this.inner.get(key);
  }

  /**
   * Get the first value for a given key.
   * @param key the key to get the value for.
   * @returns the first value for the key, or null if the key does not exist.
   */
  public get_first_instance(key: string): string | Buffer | null {
    const values = this.inner.get(key);
    if (values.length > 0) {
      return values[0];
    } else {
      return null;
    }
  }

  /**
   * Get the first value for a given key as a string.
   * @param key the key to get the value for.
   * @param encoding the encoding to use when converting the value to a string (defaults to UTF-8)
   * @returns the first value for the key as a string, or null if the key does not exist.
   */
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

/**
 * Messages from GRPC can be data or metadata. This type represents a message
 * that can be either.
 *
 * Only one of the data or metadata fields will be set.
 */
export interface Envelope<O> {
  data?: O;
  metadata?: Metadata;
}

/**
 * A stream of messages from a GRPC call.
 *
 * This converts GRPC's push-style API to a pull-style API creating a channel
 * that can be read as an async iterator.
 *
 * An optional messageDecoder can be provided to convert the GRPC messages to
 * the desired output type.  If not used then GrpcOutput and StreamOutput should
 * be the same type.
 *
 * @param GrpcOutput the type of messages received from the GRPC call.
 * @param StreamOutput the type of messages that will be returned by the stream.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class Stream<GrpcOutput, StreamOutput> {
  responses_: SimpleChannel<Envelope<StreamOutput>>;

  /**
   * Cancel the GRPC call.
   *
   * If this is not called, but the stream is not fully consumed, the GRPC call
   * will continue to run in the background.
   */
  public cancel(): void {
    this.call.cancel();
  }

  /**
   * An async iterator that yields messages from the GRPC call.
   */
  get responses(): AsyncIterable<Envelope<StreamOutput>> {
    return this.responses_;
  }

  protected call: any;
  private messageDecoder?: (msg: GrpcOutput) => StreamOutput;

  constructor(call: any, messageDecoder?: (msg: GrpcOutput) => StreamOutput) {
    this.call = call;
    this.messageDecoder = messageDecoder;
    this.responses_ = new SimpleChannel<Envelope<StreamOutput>>(() => call.cancel());
    call.on("data", (data: any) => {
      if (this.messageDecoder) {
        data = this.messageDecoder(data);
      }
      this.responses_.push({ data });
    });
    call.on("status", (status: { code: number; metadata: GrpcMetadata }) => {
      if (status.code === 0) {
        this.responses_.push({ metadata: new Metadata(status.metadata) });
      }
    });
    call.on("metadata", (metadata: GrpcMetadata) => {
      this.responses_.push({ metadata: new Metadata(metadata) });
    });
    call.on("error", (error: any) => {
      this.responses_.push_err(error);
    });
    call.on("end", () => {
      this.responses_.close();
    });
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * A bidirectional stream of messages to and from a GRPC call.
 *
 * This is the same as Stream, but with an additional send method to send
 * messages to the GRPC call.
 *
 * A messageEncoder is required to convert the messages to the format expected
 * by the GRPC call. (typically this is the encode method from the protobufjs
 * generated message type).
 *
 * @param StreamInput the type of messages that will be sent to the GRPC call.
 * @param GrpcOutput the type of messages received from the GRPC call.
 * @param StreamOutput the type of messages that will be returned by the stream.
 */
export class Bidirectional<StreamInput, GrpcOutput, StreamOutput> extends Stream<GrpcOutput, StreamOutput> {
  /**
   * Send a message to the GRPC call.
   * @param item the message to send.
   */
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

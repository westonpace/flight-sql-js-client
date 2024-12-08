import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace arrow. */
export namespace arrow {

    /** Namespace flight. */
    namespace flight {

        /** Namespace protocol. */
        namespace protocol {

            /** Represents a FlightService */
            class FlightService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new FlightService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new FlightService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FlightService;

                /**
                 * Calls Handshake.
                 * @param request HandshakeRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and HandshakeResponse
                 */
                public handshake(request: arrow.flight.protocol.IHandshakeRequest, callback: arrow.flight.protocol.FlightService.HandshakeCallback): void;

                /**
                 * Calls Handshake.
                 * @param request HandshakeRequest message or plain object
                 * @returns Promise
                 */
                public handshake(request: arrow.flight.protocol.IHandshakeRequest): Promise<arrow.flight.protocol.HandshakeResponse>;

                /**
                 * Calls ListFlights.
                 * @param request Criteria message or plain object
                 * @param callback Node-style callback called with the error, if any, and FlightInfo
                 */
                public listFlights(request: arrow.flight.protocol.ICriteria, callback: arrow.flight.protocol.FlightService.ListFlightsCallback): void;

                /**
                 * Calls ListFlights.
                 * @param request Criteria message or plain object
                 * @returns Promise
                 */
                public listFlights(request: arrow.flight.protocol.ICriteria): Promise<arrow.flight.protocol.FlightInfo>;

                /**
                 * Calls GetFlightInfo.
                 * @param request FlightDescriptor message or plain object
                 * @param callback Node-style callback called with the error, if any, and FlightInfo
                 */
                public getFlightInfo(request: arrow.flight.protocol.IFlightDescriptor, callback: arrow.flight.protocol.FlightService.GetFlightInfoCallback): void;

                /**
                 * Calls GetFlightInfo.
                 * @param request FlightDescriptor message or plain object
                 * @returns Promise
                 */
                public getFlightInfo(request: arrow.flight.protocol.IFlightDescriptor): Promise<arrow.flight.protocol.FlightInfo>;

                /**
                 * Calls PollFlightInfo.
                 * @param request FlightDescriptor message or plain object
                 * @param callback Node-style callback called with the error, if any, and PollInfo
                 */
                public pollFlightInfo(request: arrow.flight.protocol.IFlightDescriptor, callback: arrow.flight.protocol.FlightService.PollFlightInfoCallback): void;

                /**
                 * Calls PollFlightInfo.
                 * @param request FlightDescriptor message or plain object
                 * @returns Promise
                 */
                public pollFlightInfo(request: arrow.flight.protocol.IFlightDescriptor): Promise<arrow.flight.protocol.PollInfo>;

                /**
                 * Calls GetSchema.
                 * @param request FlightDescriptor message or plain object
                 * @param callback Node-style callback called with the error, if any, and SchemaResult
                 */
                public getSchema(request: arrow.flight.protocol.IFlightDescriptor, callback: arrow.flight.protocol.FlightService.GetSchemaCallback): void;

                /**
                 * Calls GetSchema.
                 * @param request FlightDescriptor message or plain object
                 * @returns Promise
                 */
                public getSchema(request: arrow.flight.protocol.IFlightDescriptor): Promise<arrow.flight.protocol.SchemaResult>;

                /**
                 * Calls DoGet.
                 * @param request Ticket message or plain object
                 * @param callback Node-style callback called with the error, if any, and FlightData
                 */
                public doGet(request: arrow.flight.protocol.ITicket, callback: arrow.flight.protocol.FlightService.DoGetCallback): void;

                /**
                 * Calls DoGet.
                 * @param request Ticket message or plain object
                 * @returns Promise
                 */
                public doGet(request: arrow.flight.protocol.ITicket): Promise<arrow.flight.protocol.FlightData>;

                /**
                 * Calls DoPut.
                 * @param request FlightData message or plain object
                 * @param callback Node-style callback called with the error, if any, and PutResult
                 */
                public doPut(request: arrow.flight.protocol.IFlightData, callback: arrow.flight.protocol.FlightService.DoPutCallback): void;

                /**
                 * Calls DoPut.
                 * @param request FlightData message or plain object
                 * @returns Promise
                 */
                public doPut(request: arrow.flight.protocol.IFlightData): Promise<arrow.flight.protocol.PutResult>;

                /**
                 * Calls DoExchange.
                 * @param request FlightData message or plain object
                 * @param callback Node-style callback called with the error, if any, and FlightData
                 */
                public doExchange(request: arrow.flight.protocol.IFlightData, callback: arrow.flight.protocol.FlightService.DoExchangeCallback): void;

                /**
                 * Calls DoExchange.
                 * @param request FlightData message or plain object
                 * @returns Promise
                 */
                public doExchange(request: arrow.flight.protocol.IFlightData): Promise<arrow.flight.protocol.FlightData>;

                /**
                 * Calls DoAction.
                 * @param request Action message or plain object
                 * @param callback Node-style callback called with the error, if any, and Result
                 */
                public doAction(request: arrow.flight.protocol.IAction, callback: arrow.flight.protocol.FlightService.DoActionCallback): void;

                /**
                 * Calls DoAction.
                 * @param request Action message or plain object
                 * @returns Promise
                 */
                public doAction(request: arrow.flight.protocol.IAction): Promise<arrow.flight.protocol.Result>;

                /**
                 * Calls ListActions.
                 * @param request Empty message or plain object
                 * @param callback Node-style callback called with the error, if any, and ActionType
                 */
                public listActions(request: arrow.flight.protocol.IEmpty, callback: arrow.flight.protocol.FlightService.ListActionsCallback): void;

                /**
                 * Calls ListActions.
                 * @param request Empty message or plain object
                 * @returns Promise
                 */
                public listActions(request: arrow.flight.protocol.IEmpty): Promise<arrow.flight.protocol.ActionType>;
            }

            namespace FlightService {

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#handshake}.
                 * @param error Error, if any
                 * @param [response] HandshakeResponse
                 */
                type HandshakeCallback = (error: (Error|null), response?: arrow.flight.protocol.HandshakeResponse) => void;

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#listFlights}.
                 * @param error Error, if any
                 * @param [response] FlightInfo
                 */
                type ListFlightsCallback = (error: (Error|null), response?: arrow.flight.protocol.FlightInfo) => void;

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#getFlightInfo}.
                 * @param error Error, if any
                 * @param [response] FlightInfo
                 */
                type GetFlightInfoCallback = (error: (Error|null), response?: arrow.flight.protocol.FlightInfo) => void;

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#pollFlightInfo}.
                 * @param error Error, if any
                 * @param [response] PollInfo
                 */
                type PollFlightInfoCallback = (error: (Error|null), response?: arrow.flight.protocol.PollInfo) => void;

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#getSchema}.
                 * @param error Error, if any
                 * @param [response] SchemaResult
                 */
                type GetSchemaCallback = (error: (Error|null), response?: arrow.flight.protocol.SchemaResult) => void;

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doGet}.
                 * @param error Error, if any
                 * @param [response] FlightData
                 */
                type DoGetCallback = (error: (Error|null), response?: arrow.flight.protocol.FlightData) => void;

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doPut}.
                 * @param error Error, if any
                 * @param [response] PutResult
                 */
                type DoPutCallback = (error: (Error|null), response?: arrow.flight.protocol.PutResult) => void;

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doExchange}.
                 * @param error Error, if any
                 * @param [response] FlightData
                 */
                type DoExchangeCallback = (error: (Error|null), response?: arrow.flight.protocol.FlightData) => void;

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doAction}.
                 * @param error Error, if any
                 * @param [response] Result
                 */
                type DoActionCallback = (error: (Error|null), response?: arrow.flight.protocol.Result) => void;

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#listActions}.
                 * @param error Error, if any
                 * @param [response] ActionType
                 */
                type ListActionsCallback = (error: (Error|null), response?: arrow.flight.protocol.ActionType) => void;
            }

            /** Properties of a HandshakeRequest. */
            interface IHandshakeRequest {

                /** HandshakeRequest protocolVersion */
                protocolVersion?: (number|Long|null);

                /** HandshakeRequest payload */
                payload?: (Uint8Array|null);
            }

            /** Represents a HandshakeRequest. */
            class HandshakeRequest implements IHandshakeRequest {

                /**
                 * Constructs a new HandshakeRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IHandshakeRequest);

                /** HandshakeRequest protocolVersion. */
                public protocolVersion: (number|Long);

                /** HandshakeRequest payload. */
                public payload: Uint8Array;

                /**
                 * Creates a new HandshakeRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HandshakeRequest instance
                 */
                public static create(properties?: arrow.flight.protocol.IHandshakeRequest): arrow.flight.protocol.HandshakeRequest;

                /**
                 * Encodes the specified HandshakeRequest message. Does not implicitly {@link arrow.flight.protocol.HandshakeRequest.verify|verify} messages.
                 * @param message HandshakeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IHandshakeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HandshakeRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.HandshakeRequest.verify|verify} messages.
                 * @param message HandshakeRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IHandshakeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HandshakeRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HandshakeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.HandshakeRequest;

                /**
                 * Decodes a HandshakeRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HandshakeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.HandshakeRequest;

                /**
                 * Verifies a HandshakeRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HandshakeRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HandshakeRequest
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.HandshakeRequest;

                /**
                 * Creates a plain object from a HandshakeRequest message. Also converts values to other types if specified.
                 * @param message HandshakeRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.HandshakeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HandshakeRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for HandshakeRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a HandshakeResponse. */
            interface IHandshakeResponse {

                /** HandshakeResponse protocolVersion */
                protocolVersion?: (number|Long|null);

                /** HandshakeResponse payload */
                payload?: (Uint8Array|null);
            }

            /** Represents a HandshakeResponse. */
            class HandshakeResponse implements IHandshakeResponse {

                /**
                 * Constructs a new HandshakeResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IHandshakeResponse);

                /** HandshakeResponse protocolVersion. */
                public protocolVersion: (number|Long);

                /** HandshakeResponse payload. */
                public payload: Uint8Array;

                /**
                 * Creates a new HandshakeResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HandshakeResponse instance
                 */
                public static create(properties?: arrow.flight.protocol.IHandshakeResponse): arrow.flight.protocol.HandshakeResponse;

                /**
                 * Encodes the specified HandshakeResponse message. Does not implicitly {@link arrow.flight.protocol.HandshakeResponse.verify|verify} messages.
                 * @param message HandshakeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IHandshakeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HandshakeResponse message, length delimited. Does not implicitly {@link arrow.flight.protocol.HandshakeResponse.verify|verify} messages.
                 * @param message HandshakeResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IHandshakeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HandshakeResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HandshakeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.HandshakeResponse;

                /**
                 * Decodes a HandshakeResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HandshakeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.HandshakeResponse;

                /**
                 * Verifies a HandshakeResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HandshakeResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HandshakeResponse
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.HandshakeResponse;

                /**
                 * Creates a plain object from a HandshakeResponse message. Also converts values to other types if specified.
                 * @param message HandshakeResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.HandshakeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HandshakeResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for HandshakeResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BasicAuth. */
            interface IBasicAuth {

                /** BasicAuth username */
                username?: (string|null);

                /** BasicAuth password */
                password?: (string|null);
            }

            /** Represents a BasicAuth. */
            class BasicAuth implements IBasicAuth {

                /**
                 * Constructs a new BasicAuth.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IBasicAuth);

                /** BasicAuth username. */
                public username: string;

                /** BasicAuth password. */
                public password: string;

                /**
                 * Creates a new BasicAuth instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BasicAuth instance
                 */
                public static create(properties?: arrow.flight.protocol.IBasicAuth): arrow.flight.protocol.BasicAuth;

                /**
                 * Encodes the specified BasicAuth message. Does not implicitly {@link arrow.flight.protocol.BasicAuth.verify|verify} messages.
                 * @param message BasicAuth message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IBasicAuth, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BasicAuth message, length delimited. Does not implicitly {@link arrow.flight.protocol.BasicAuth.verify|verify} messages.
                 * @param message BasicAuth message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IBasicAuth, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BasicAuth message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BasicAuth
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.BasicAuth;

                /**
                 * Decodes a BasicAuth message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BasicAuth
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.BasicAuth;

                /**
                 * Verifies a BasicAuth message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BasicAuth message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BasicAuth
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.BasicAuth;

                /**
                 * Creates a plain object from a BasicAuth message. Also converts values to other types if specified.
                 * @param message BasicAuth
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.BasicAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BasicAuth to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BasicAuth
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Empty. */
            interface IEmpty {
            }

            /** Represents an Empty. */
            class Empty implements IEmpty {

                /**
                 * Constructs a new Empty.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IEmpty);

                /**
                 * Creates a new Empty instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Empty instance
                 */
                public static create(properties?: arrow.flight.protocol.IEmpty): arrow.flight.protocol.Empty;

                /**
                 * Encodes the specified Empty message. Does not implicitly {@link arrow.flight.protocol.Empty.verify|verify} messages.
                 * @param message Empty message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link arrow.flight.protocol.Empty.verify|verify} messages.
                 * @param message Empty message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Empty;

                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Empty;

                /**
                 * Verifies an Empty message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Empty
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Empty;

                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @param message Empty
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Empty to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Empty
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ActionType. */
            interface IActionType {

                /** ActionType type */
                type?: (string|null);

                /** ActionType description */
                description?: (string|null);
            }

            /** Represents an ActionType. */
            class ActionType implements IActionType {

                /**
                 * Constructs a new ActionType.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IActionType);

                /** ActionType type. */
                public type: string;

                /** ActionType description. */
                public description: string;

                /**
                 * Creates a new ActionType instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ActionType instance
                 */
                public static create(properties?: arrow.flight.protocol.IActionType): arrow.flight.protocol.ActionType;

                /**
                 * Encodes the specified ActionType message. Does not implicitly {@link arrow.flight.protocol.ActionType.verify|verify} messages.
                 * @param message ActionType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IActionType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ActionType message, length delimited. Does not implicitly {@link arrow.flight.protocol.ActionType.verify|verify} messages.
                 * @param message ActionType message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IActionType, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ActionType message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ActionType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.ActionType;

                /**
                 * Decodes an ActionType message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ActionType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.ActionType;

                /**
                 * Verifies an ActionType message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ActionType message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ActionType
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.ActionType;

                /**
                 * Creates a plain object from an ActionType message. Also converts values to other types if specified.
                 * @param message ActionType
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.ActionType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ActionType to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ActionType
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Criteria. */
            interface ICriteria {

                /** Criteria expression */
                expression?: (Uint8Array|null);
            }

            /** Represents a Criteria. */
            class Criteria implements ICriteria {

                /**
                 * Constructs a new Criteria.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ICriteria);

                /** Criteria expression. */
                public expression: Uint8Array;

                /**
                 * Creates a new Criteria instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Criteria instance
                 */
                public static create(properties?: arrow.flight.protocol.ICriteria): arrow.flight.protocol.Criteria;

                /**
                 * Encodes the specified Criteria message. Does not implicitly {@link arrow.flight.protocol.Criteria.verify|verify} messages.
                 * @param message Criteria message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ICriteria, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Criteria message, length delimited. Does not implicitly {@link arrow.flight.protocol.Criteria.verify|verify} messages.
                 * @param message Criteria message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ICriteria, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Criteria message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Criteria
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Criteria;

                /**
                 * Decodes a Criteria message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Criteria
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Criteria;

                /**
                 * Verifies a Criteria message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Criteria message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Criteria
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Criteria;

                /**
                 * Creates a plain object from a Criteria message. Also converts values to other types if specified.
                 * @param message Criteria
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.Criteria, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Criteria to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Criteria
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Action. */
            interface IAction {

                /** Action type */
                type?: (string|null);

                /** Action body */
                body?: (Uint8Array|null);
            }

            /** Represents an Action. */
            class Action implements IAction {

                /**
                 * Constructs a new Action.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IAction);

                /** Action type. */
                public type: string;

                /** Action body. */
                public body: Uint8Array;

                /**
                 * Creates a new Action instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Action instance
                 */
                public static create(properties?: arrow.flight.protocol.IAction): arrow.flight.protocol.Action;

                /**
                 * Encodes the specified Action message. Does not implicitly {@link arrow.flight.protocol.Action.verify|verify} messages.
                 * @param message Action message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Action message, length delimited. Does not implicitly {@link arrow.flight.protocol.Action.verify|verify} messages.
                 * @param message Action message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Action message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Action;

                /**
                 * Decodes an Action message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Action;

                /**
                 * Verifies an Action message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Action message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Action
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Action;

                /**
                 * Creates a plain object from an Action message. Also converts values to other types if specified.
                 * @param message Action
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Action to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Action
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Result. */
            interface IResult {

                /** Result body */
                body?: (Uint8Array|null);
            }

            /** Represents a Result. */
            class Result implements IResult {

                /**
                 * Constructs a new Result.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IResult);

                /** Result body. */
                public body: Uint8Array;

                /**
                 * Creates a new Result instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Result instance
                 */
                public static create(properties?: arrow.flight.protocol.IResult): arrow.flight.protocol.Result;

                /**
                 * Encodes the specified Result message. Does not implicitly {@link arrow.flight.protocol.Result.verify|verify} messages.
                 * @param message Result message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Result message, length delimited. Does not implicitly {@link arrow.flight.protocol.Result.verify|verify} messages.
                 * @param message Result message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Result message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Result
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Result;

                /**
                 * Decodes a Result message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Result
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Result;

                /**
                 * Verifies a Result message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Result message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Result
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Result;

                /**
                 * Creates a plain object from a Result message. Also converts values to other types if specified.
                 * @param message Result
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Result to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Result
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SchemaResult. */
            interface ISchemaResult {

                /** SchemaResult schema */
                schema?: (Uint8Array|null);
            }

            /** Represents a SchemaResult. */
            class SchemaResult implements ISchemaResult {

                /**
                 * Constructs a new SchemaResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ISchemaResult);

                /** SchemaResult schema. */
                public schema: Uint8Array;

                /**
                 * Creates a new SchemaResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SchemaResult instance
                 */
                public static create(properties?: arrow.flight.protocol.ISchemaResult): arrow.flight.protocol.SchemaResult;

                /**
                 * Encodes the specified SchemaResult message. Does not implicitly {@link arrow.flight.protocol.SchemaResult.verify|verify} messages.
                 * @param message SchemaResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ISchemaResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SchemaResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.SchemaResult.verify|verify} messages.
                 * @param message SchemaResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ISchemaResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SchemaResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SchemaResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SchemaResult;

                /**
                 * Decodes a SchemaResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SchemaResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SchemaResult;

                /**
                 * Verifies a SchemaResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SchemaResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SchemaResult
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SchemaResult;

                /**
                 * Creates a plain object from a SchemaResult message. Also converts values to other types if specified.
                 * @param message SchemaResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.SchemaResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SchemaResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SchemaResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FlightDescriptor. */
            interface IFlightDescriptor {

                /** FlightDescriptor type */
                type?: (arrow.flight.protocol.FlightDescriptor.DescriptorType|null);

                /** FlightDescriptor cmd */
                cmd?: (Uint8Array|null);

                /** FlightDescriptor path */
                path?: (string[]|null);
            }

            /** Represents a FlightDescriptor. */
            class FlightDescriptor implements IFlightDescriptor {

                /**
                 * Constructs a new FlightDescriptor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IFlightDescriptor);

                /** FlightDescriptor type. */
                public type: arrow.flight.protocol.FlightDescriptor.DescriptorType;

                /** FlightDescriptor cmd. */
                public cmd: Uint8Array;

                /** FlightDescriptor path. */
                public path: string[];

                /**
                 * Creates a new FlightDescriptor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlightDescriptor instance
                 */
                public static create(properties?: arrow.flight.protocol.IFlightDescriptor): arrow.flight.protocol.FlightDescriptor;

                /**
                 * Encodes the specified FlightDescriptor message. Does not implicitly {@link arrow.flight.protocol.FlightDescriptor.verify|verify} messages.
                 * @param message FlightDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IFlightDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlightDescriptor message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightDescriptor.verify|verify} messages.
                 * @param message FlightDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IFlightDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlightDescriptor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FlightDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.FlightDescriptor;

                /**
                 * Decodes a FlightDescriptor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FlightDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.FlightDescriptor;

                /**
                 * Verifies a FlightDescriptor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlightDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlightDescriptor
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.FlightDescriptor;

                /**
                 * Creates a plain object from a FlightDescriptor message. Also converts values to other types if specified.
                 * @param message FlightDescriptor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.FlightDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlightDescriptor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FlightDescriptor
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace FlightDescriptor {

                /** DescriptorType enum. */
                enum DescriptorType {
                    UNKNOWN = 0,
                    PATH = 1,
                    CMD = 2
                }
            }

            /** Properties of a FlightInfo. */
            interface IFlightInfo {

                /** FlightInfo schema */
                schema?: (Uint8Array|null);

                /** FlightInfo flightDescriptor */
                flightDescriptor?: (arrow.flight.protocol.IFlightDescriptor|null);

                /** FlightInfo endpoint */
                endpoint?: (arrow.flight.protocol.IFlightEndpoint[]|null);

                /** FlightInfo totalRecords */
                totalRecords?: (number|Long|null);

                /** FlightInfo totalBytes */
                totalBytes?: (number|Long|null);

                /** FlightInfo ordered */
                ordered?: (boolean|null);

                /** FlightInfo appMetadata */
                appMetadata?: (Uint8Array|null);
            }

            /** Represents a FlightInfo. */
            class FlightInfo implements IFlightInfo {

                /**
                 * Constructs a new FlightInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IFlightInfo);

                /** FlightInfo schema. */
                public schema: Uint8Array;

                /** FlightInfo flightDescriptor. */
                public flightDescriptor?: (arrow.flight.protocol.IFlightDescriptor|null);

                /** FlightInfo endpoint. */
                public endpoint: arrow.flight.protocol.IFlightEndpoint[];

                /** FlightInfo totalRecords. */
                public totalRecords: (number|Long);

                /** FlightInfo totalBytes. */
                public totalBytes: (number|Long);

                /** FlightInfo ordered. */
                public ordered: boolean;

                /** FlightInfo appMetadata. */
                public appMetadata: Uint8Array;

                /**
                 * Creates a new FlightInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlightInfo instance
                 */
                public static create(properties?: arrow.flight.protocol.IFlightInfo): arrow.flight.protocol.FlightInfo;

                /**
                 * Encodes the specified FlightInfo message. Does not implicitly {@link arrow.flight.protocol.FlightInfo.verify|verify} messages.
                 * @param message FlightInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IFlightInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlightInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightInfo.verify|verify} messages.
                 * @param message FlightInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IFlightInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlightInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FlightInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.FlightInfo;

                /**
                 * Decodes a FlightInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FlightInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.FlightInfo;

                /**
                 * Verifies a FlightInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlightInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlightInfo
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.FlightInfo;

                /**
                 * Creates a plain object from a FlightInfo message. Also converts values to other types if specified.
                 * @param message FlightInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.FlightInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlightInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FlightInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PollInfo. */
            interface IPollInfo {

                /** PollInfo info */
                info?: (arrow.flight.protocol.IFlightInfo|null);

                /** PollInfo flightDescriptor */
                flightDescriptor?: (arrow.flight.protocol.IFlightDescriptor|null);

                /** PollInfo progress */
                progress?: (number|null);

                /** PollInfo expirationTime */
                expirationTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a PollInfo. */
            class PollInfo implements IPollInfo {

                /**
                 * Constructs a new PollInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IPollInfo);

                /** PollInfo info. */
                public info?: (arrow.flight.protocol.IFlightInfo|null);

                /** PollInfo flightDescriptor. */
                public flightDescriptor?: (arrow.flight.protocol.IFlightDescriptor|null);

                /** PollInfo progress. */
                public progress?: (number|null);

                /** PollInfo expirationTime. */
                public expirationTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new PollInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PollInfo instance
                 */
                public static create(properties?: arrow.flight.protocol.IPollInfo): arrow.flight.protocol.PollInfo;

                /**
                 * Encodes the specified PollInfo message. Does not implicitly {@link arrow.flight.protocol.PollInfo.verify|verify} messages.
                 * @param message PollInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IPollInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PollInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.PollInfo.verify|verify} messages.
                 * @param message PollInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IPollInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PollInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PollInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.PollInfo;

                /**
                 * Decodes a PollInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PollInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.PollInfo;

                /**
                 * Verifies a PollInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PollInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PollInfo
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.PollInfo;

                /**
                 * Creates a plain object from a PollInfo message. Also converts values to other types if specified.
                 * @param message PollInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.PollInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PollInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PollInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CancelFlightInfoRequest. */
            interface ICancelFlightInfoRequest {

                /** CancelFlightInfoRequest info */
                info?: (arrow.flight.protocol.IFlightInfo|null);
            }

            /** Represents a CancelFlightInfoRequest. */
            class CancelFlightInfoRequest implements ICancelFlightInfoRequest {

                /**
                 * Constructs a new CancelFlightInfoRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ICancelFlightInfoRequest);

                /** CancelFlightInfoRequest info. */
                public info?: (arrow.flight.protocol.IFlightInfo|null);

                /**
                 * Creates a new CancelFlightInfoRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CancelFlightInfoRequest instance
                 */
                public static create(properties?: arrow.flight.protocol.ICancelFlightInfoRequest): arrow.flight.protocol.CancelFlightInfoRequest;

                /**
                 * Encodes the specified CancelFlightInfoRequest message. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoRequest.verify|verify} messages.
                 * @param message CancelFlightInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ICancelFlightInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CancelFlightInfoRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoRequest.verify|verify} messages.
                 * @param message CancelFlightInfoRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ICancelFlightInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CancelFlightInfoRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CancelFlightInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.CancelFlightInfoRequest;

                /**
                 * Decodes a CancelFlightInfoRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CancelFlightInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.CancelFlightInfoRequest;

                /**
                 * Verifies a CancelFlightInfoRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CancelFlightInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CancelFlightInfoRequest
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.CancelFlightInfoRequest;

                /**
                 * Creates a plain object from a CancelFlightInfoRequest message. Also converts values to other types if specified.
                 * @param message CancelFlightInfoRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.CancelFlightInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CancelFlightInfoRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CancelFlightInfoRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** CancelStatus enum. */
            enum CancelStatus {
                CANCEL_STATUS_UNSPECIFIED = 0,
                CANCEL_STATUS_CANCELLED = 1,
                CANCEL_STATUS_CANCELLING = 2,
                CANCEL_STATUS_NOT_CANCELLABLE = 3
            }

            /** Properties of a CancelFlightInfoResult. */
            interface ICancelFlightInfoResult {

                /** CancelFlightInfoResult status */
                status?: (arrow.flight.protocol.CancelStatus|null);
            }

            /** Represents a CancelFlightInfoResult. */
            class CancelFlightInfoResult implements ICancelFlightInfoResult {

                /**
                 * Constructs a new CancelFlightInfoResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ICancelFlightInfoResult);

                /** CancelFlightInfoResult status. */
                public status: arrow.flight.protocol.CancelStatus;

                /**
                 * Creates a new CancelFlightInfoResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CancelFlightInfoResult instance
                 */
                public static create(properties?: arrow.flight.protocol.ICancelFlightInfoResult): arrow.flight.protocol.CancelFlightInfoResult;

                /**
                 * Encodes the specified CancelFlightInfoResult message. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoResult.verify|verify} messages.
                 * @param message CancelFlightInfoResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ICancelFlightInfoResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CancelFlightInfoResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoResult.verify|verify} messages.
                 * @param message CancelFlightInfoResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ICancelFlightInfoResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CancelFlightInfoResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CancelFlightInfoResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.CancelFlightInfoResult;

                /**
                 * Decodes a CancelFlightInfoResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CancelFlightInfoResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.CancelFlightInfoResult;

                /**
                 * Verifies a CancelFlightInfoResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CancelFlightInfoResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CancelFlightInfoResult
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.CancelFlightInfoResult;

                /**
                 * Creates a plain object from a CancelFlightInfoResult message. Also converts values to other types if specified.
                 * @param message CancelFlightInfoResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.CancelFlightInfoResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CancelFlightInfoResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CancelFlightInfoResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Ticket. */
            interface ITicket {

                /** Ticket ticket */
                ticket?: (Uint8Array|null);
            }

            /** Represents a Ticket. */
            class Ticket implements ITicket {

                /**
                 * Constructs a new Ticket.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ITicket);

                /** Ticket ticket. */
                public ticket: Uint8Array;

                /**
                 * Creates a new Ticket instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Ticket instance
                 */
                public static create(properties?: arrow.flight.protocol.ITicket): arrow.flight.protocol.Ticket;

                /**
                 * Encodes the specified Ticket message. Does not implicitly {@link arrow.flight.protocol.Ticket.verify|verify} messages.
                 * @param message Ticket message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ITicket, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Ticket message, length delimited. Does not implicitly {@link arrow.flight.protocol.Ticket.verify|verify} messages.
                 * @param message Ticket message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ITicket, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Ticket message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Ticket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Ticket;

                /**
                 * Decodes a Ticket message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Ticket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Ticket;

                /**
                 * Verifies a Ticket message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Ticket message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Ticket
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Ticket;

                /**
                 * Creates a plain object from a Ticket message. Also converts values to other types if specified.
                 * @param message Ticket
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.Ticket, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Ticket to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Ticket
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Location. */
            interface ILocation {

                /** Location uri */
                uri?: (string|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ILocation);

                /** Location uri. */
                public uri: string;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: arrow.flight.protocol.ILocation): arrow.flight.protocol.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link arrow.flight.protocol.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link arrow.flight.protocol.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FlightEndpoint. */
            interface IFlightEndpoint {

                /** FlightEndpoint ticket */
                ticket?: (arrow.flight.protocol.ITicket|null);

                /** FlightEndpoint location */
                location?: (arrow.flight.protocol.ILocation[]|null);

                /** FlightEndpoint expirationTime */
                expirationTime?: (google.protobuf.ITimestamp|null);

                /** FlightEndpoint appMetadata */
                appMetadata?: (Uint8Array|null);
            }

            /** Represents a FlightEndpoint. */
            class FlightEndpoint implements IFlightEndpoint {

                /**
                 * Constructs a new FlightEndpoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IFlightEndpoint);

                /** FlightEndpoint ticket. */
                public ticket?: (arrow.flight.protocol.ITicket|null);

                /** FlightEndpoint location. */
                public location: arrow.flight.protocol.ILocation[];

                /** FlightEndpoint expirationTime. */
                public expirationTime?: (google.protobuf.ITimestamp|null);

                /** FlightEndpoint appMetadata. */
                public appMetadata: Uint8Array;

                /**
                 * Creates a new FlightEndpoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlightEndpoint instance
                 */
                public static create(properties?: arrow.flight.protocol.IFlightEndpoint): arrow.flight.protocol.FlightEndpoint;

                /**
                 * Encodes the specified FlightEndpoint message. Does not implicitly {@link arrow.flight.protocol.FlightEndpoint.verify|verify} messages.
                 * @param message FlightEndpoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IFlightEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlightEndpoint message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightEndpoint.verify|verify} messages.
                 * @param message FlightEndpoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IFlightEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlightEndpoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FlightEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.FlightEndpoint;

                /**
                 * Decodes a FlightEndpoint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FlightEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.FlightEndpoint;

                /**
                 * Verifies a FlightEndpoint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlightEndpoint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlightEndpoint
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.FlightEndpoint;

                /**
                 * Creates a plain object from a FlightEndpoint message. Also converts values to other types if specified.
                 * @param message FlightEndpoint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.FlightEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlightEndpoint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FlightEndpoint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RenewFlightEndpointRequest. */
            interface IRenewFlightEndpointRequest {

                /** RenewFlightEndpointRequest endpoint */
                endpoint?: (arrow.flight.protocol.IFlightEndpoint|null);
            }

            /** Represents a RenewFlightEndpointRequest. */
            class RenewFlightEndpointRequest implements IRenewFlightEndpointRequest {

                /**
                 * Constructs a new RenewFlightEndpointRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IRenewFlightEndpointRequest);

                /** RenewFlightEndpointRequest endpoint. */
                public endpoint?: (arrow.flight.protocol.IFlightEndpoint|null);

                /**
                 * Creates a new RenewFlightEndpointRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RenewFlightEndpointRequest instance
                 */
                public static create(properties?: arrow.flight.protocol.IRenewFlightEndpointRequest): arrow.flight.protocol.RenewFlightEndpointRequest;

                /**
                 * Encodes the specified RenewFlightEndpointRequest message. Does not implicitly {@link arrow.flight.protocol.RenewFlightEndpointRequest.verify|verify} messages.
                 * @param message RenewFlightEndpointRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IRenewFlightEndpointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RenewFlightEndpointRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.RenewFlightEndpointRequest.verify|verify} messages.
                 * @param message RenewFlightEndpointRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IRenewFlightEndpointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RenewFlightEndpointRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RenewFlightEndpointRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.RenewFlightEndpointRequest;

                /**
                 * Decodes a RenewFlightEndpointRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RenewFlightEndpointRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.RenewFlightEndpointRequest;

                /**
                 * Verifies a RenewFlightEndpointRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RenewFlightEndpointRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RenewFlightEndpointRequest
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.RenewFlightEndpointRequest;

                /**
                 * Creates a plain object from a RenewFlightEndpointRequest message. Also converts values to other types if specified.
                 * @param message RenewFlightEndpointRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.RenewFlightEndpointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RenewFlightEndpointRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RenewFlightEndpointRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FlightData. */
            interface IFlightData {

                /** FlightData flightDescriptor */
                flightDescriptor?: (arrow.flight.protocol.IFlightDescriptor|null);

                /** FlightData dataHeader */
                dataHeader?: (Uint8Array|null);

                /** FlightData appMetadata */
                appMetadata?: (Uint8Array|null);

                /** FlightData dataBody */
                dataBody?: (Uint8Array|null);
            }

            /** Represents a FlightData. */
            class FlightData implements IFlightData {

                /**
                 * Constructs a new FlightData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IFlightData);

                /** FlightData flightDescriptor. */
                public flightDescriptor?: (arrow.flight.protocol.IFlightDescriptor|null);

                /** FlightData dataHeader. */
                public dataHeader: Uint8Array;

                /** FlightData appMetadata. */
                public appMetadata: Uint8Array;

                /** FlightData dataBody. */
                public dataBody: Uint8Array;

                /**
                 * Creates a new FlightData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlightData instance
                 */
                public static create(properties?: arrow.flight.protocol.IFlightData): arrow.flight.protocol.FlightData;

                /**
                 * Encodes the specified FlightData message. Does not implicitly {@link arrow.flight.protocol.FlightData.verify|verify} messages.
                 * @param message FlightData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IFlightData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlightData message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightData.verify|verify} messages.
                 * @param message FlightData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IFlightData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlightData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FlightData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.FlightData;

                /**
                 * Decodes a FlightData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FlightData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.FlightData;

                /**
                 * Verifies a FlightData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlightData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlightData
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.FlightData;

                /**
                 * Creates a plain object from a FlightData message. Also converts values to other types if specified.
                 * @param message FlightData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.FlightData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlightData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FlightData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PutResult. */
            interface IPutResult {

                /** PutResult appMetadata */
                appMetadata?: (Uint8Array|null);
            }

            /** The response message associated with the submission of a DoPut. */
            class PutResult implements IPutResult {

                /**
                 * Constructs a new PutResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IPutResult);

                /** PutResult appMetadata. */
                public appMetadata: Uint8Array;

                /**
                 * Creates a new PutResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PutResult instance
                 */
                public static create(properties?: arrow.flight.protocol.IPutResult): arrow.flight.protocol.PutResult;

                /**
                 * Encodes the specified PutResult message. Does not implicitly {@link arrow.flight.protocol.PutResult.verify|verify} messages.
                 * @param message PutResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IPutResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PutResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.PutResult.verify|verify} messages.
                 * @param message PutResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IPutResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PutResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PutResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.PutResult;

                /**
                 * Decodes a PutResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PutResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.PutResult;

                /**
                 * Verifies a PutResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PutResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PutResult
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.PutResult;

                /**
                 * Creates a plain object from a PutResult message. Also converts values to other types if specified.
                 * @param message PutResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.PutResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PutResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PutResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SessionOptionValue. */
            interface ISessionOptionValue {

                /** SessionOptionValue stringValue */
                stringValue?: (string|null);

                /** SessionOptionValue boolValue */
                boolValue?: (boolean|null);

                /** SessionOptionValue int64Value */
                int64Value?: (number|Long|null);

                /** SessionOptionValue doubleValue */
                doubleValue?: (number|null);

                /** SessionOptionValue stringListValue */
                stringListValue?: (arrow.flight.protocol.SessionOptionValue.IStringListValue|null);
            }

            /** Represents a SessionOptionValue. */
            class SessionOptionValue implements ISessionOptionValue {

                /**
                 * Constructs a new SessionOptionValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ISessionOptionValue);

                /** SessionOptionValue stringValue. */
                public stringValue?: (string|null);

                /** SessionOptionValue boolValue. */
                public boolValue?: (boolean|null);

                /** SessionOptionValue int64Value. */
                public int64Value?: (number|Long|null);

                /** SessionOptionValue doubleValue. */
                public doubleValue?: (number|null);

                /** SessionOptionValue stringListValue. */
                public stringListValue?: (arrow.flight.protocol.SessionOptionValue.IStringListValue|null);

                /** SessionOptionValue optionValue. */
                public optionValue?: ("stringValue"|"boolValue"|"int64Value"|"doubleValue"|"stringListValue");

                /**
                 * Creates a new SessionOptionValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SessionOptionValue instance
                 */
                public static create(properties?: arrow.flight.protocol.ISessionOptionValue): arrow.flight.protocol.SessionOptionValue;

                /**
                 * Encodes the specified SessionOptionValue message. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.verify|verify} messages.
                 * @param message SessionOptionValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ISessionOptionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SessionOptionValue message, length delimited. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.verify|verify} messages.
                 * @param message SessionOptionValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ISessionOptionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SessionOptionValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SessionOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SessionOptionValue;

                /**
                 * Decodes a SessionOptionValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SessionOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SessionOptionValue;

                /**
                 * Verifies a SessionOptionValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SessionOptionValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SessionOptionValue
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SessionOptionValue;

                /**
                 * Creates a plain object from a SessionOptionValue message. Also converts values to other types if specified.
                 * @param message SessionOptionValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.SessionOptionValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SessionOptionValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SessionOptionValue
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace SessionOptionValue {

                /** Properties of a StringListValue. */
                interface IStringListValue {

                    /** StringListValue values */
                    values?: (string[]|null);
                }

                /** Represents a StringListValue. */
                class StringListValue implements IStringListValue {

                    /**
                     * Constructs a new StringListValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.SessionOptionValue.IStringListValue);

                    /** StringListValue values. */
                    public values: string[];

                    /**
                     * Creates a new StringListValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StringListValue instance
                     */
                    public static create(properties?: arrow.flight.protocol.SessionOptionValue.IStringListValue): arrow.flight.protocol.SessionOptionValue.StringListValue;

                    /**
                     * Encodes the specified StringListValue message. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.StringListValue.verify|verify} messages.
                     * @param message StringListValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.SessionOptionValue.IStringListValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StringListValue message, length delimited. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.StringListValue.verify|verify} messages.
                     * @param message StringListValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.SessionOptionValue.IStringListValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StringListValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StringListValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SessionOptionValue.StringListValue;

                    /**
                     * Decodes a StringListValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StringListValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SessionOptionValue.StringListValue;

                    /**
                     * Verifies a StringListValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StringListValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StringListValue
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SessionOptionValue.StringListValue;

                    /**
                     * Creates a plain object from a StringListValue message. Also converts values to other types if specified.
                     * @param message StringListValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.SessionOptionValue.StringListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StringListValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StringListValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a SetSessionOptionsRequest. */
            interface ISetSessionOptionsRequest {

                /** SetSessionOptionsRequest sessionOptions */
                sessionOptions?: ({ [k: string]: arrow.flight.protocol.ISessionOptionValue }|null);
            }

            /** Represents a SetSessionOptionsRequest. */
            class SetSessionOptionsRequest implements ISetSessionOptionsRequest {

                /**
                 * Constructs a new SetSessionOptionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ISetSessionOptionsRequest);

                /** SetSessionOptionsRequest sessionOptions. */
                public sessionOptions: { [k: string]: arrow.flight.protocol.ISessionOptionValue };

                /**
                 * Creates a new SetSessionOptionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetSessionOptionsRequest instance
                 */
                public static create(properties?: arrow.flight.protocol.ISetSessionOptionsRequest): arrow.flight.protocol.SetSessionOptionsRequest;

                /**
                 * Encodes the specified SetSessionOptionsRequest message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsRequest.verify|verify} messages.
                 * @param message SetSessionOptionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ISetSessionOptionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetSessionOptionsRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsRequest.verify|verify} messages.
                 * @param message SetSessionOptionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ISetSessionOptionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetSessionOptionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SetSessionOptionsRequest;

                /**
                 * Decodes a SetSessionOptionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SetSessionOptionsRequest;

                /**
                 * Verifies a SetSessionOptionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetSessionOptionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetSessionOptionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SetSessionOptionsRequest;

                /**
                 * Creates a plain object from a SetSessionOptionsRequest message. Also converts values to other types if specified.
                 * @param message SetSessionOptionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.SetSessionOptionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetSessionOptionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SetSessionOptionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SetSessionOptionsResult. */
            interface ISetSessionOptionsResult {

                /** SetSessionOptionsResult errors */
                errors?: ({ [k: string]: arrow.flight.protocol.SetSessionOptionsResult.IError }|null);
            }

            /** Represents a SetSessionOptionsResult. */
            class SetSessionOptionsResult implements ISetSessionOptionsResult {

                /**
                 * Constructs a new SetSessionOptionsResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ISetSessionOptionsResult);

                /** SetSessionOptionsResult errors. */
                public errors: { [k: string]: arrow.flight.protocol.SetSessionOptionsResult.IError };

                /**
                 * Creates a new SetSessionOptionsResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetSessionOptionsResult instance
                 */
                public static create(properties?: arrow.flight.protocol.ISetSessionOptionsResult): arrow.flight.protocol.SetSessionOptionsResult;

                /**
                 * Encodes the specified SetSessionOptionsResult message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.verify|verify} messages.
                 * @param message SetSessionOptionsResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ISetSessionOptionsResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetSessionOptionsResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.verify|verify} messages.
                 * @param message SetSessionOptionsResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ISetSessionOptionsResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetSessionOptionsResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SetSessionOptionsResult;

                /**
                 * Decodes a SetSessionOptionsResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SetSessionOptionsResult;

                /**
                 * Verifies a SetSessionOptionsResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetSessionOptionsResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetSessionOptionsResult
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SetSessionOptionsResult;

                /**
                 * Creates a plain object from a SetSessionOptionsResult message. Also converts values to other types if specified.
                 * @param message SetSessionOptionsResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.SetSessionOptionsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetSessionOptionsResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SetSessionOptionsResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace SetSessionOptionsResult {

                /** ErrorValue enum. */
                enum ErrorValue {
                    UNSPECIFIED = 0,
                    INVALID_NAME = 1,
                    INVALID_VALUE = 2,
                    ERROR = 3
                }

                /** Properties of an Error. */
                interface IError {

                    /** Error value */
                    value?: (arrow.flight.protocol.SetSessionOptionsResult.ErrorValue|null);
                }

                /** Represents an Error. */
                class Error implements IError {

                    /**
                     * Constructs a new Error.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.SetSessionOptionsResult.IError);

                    /** Error value. */
                    public value: arrow.flight.protocol.SetSessionOptionsResult.ErrorValue;

                    /**
                     * Creates a new Error instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Error instance
                     */
                    public static create(properties?: arrow.flight.protocol.SetSessionOptionsResult.IError): arrow.flight.protocol.SetSessionOptionsResult.Error;

                    /**
                     * Encodes the specified Error message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.Error.verify|verify} messages.
                     * @param message Error message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.SetSessionOptionsResult.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Error message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.Error.verify|verify} messages.
                     * @param message Error message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.SetSessionOptionsResult.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Error message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.SetSessionOptionsResult.Error;

                    /**
                     * Decodes an Error message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.SetSessionOptionsResult.Error;

                    /**
                     * Verifies an Error message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Error message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Error
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.SetSessionOptionsResult.Error;

                    /**
                     * Creates a plain object from an Error message. Also converts values to other types if specified.
                     * @param message Error
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.SetSessionOptionsResult.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Error to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Error
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a GetSessionOptionsRequest. */
            interface IGetSessionOptionsRequest {
            }

            /** Represents a GetSessionOptionsRequest. */
            class GetSessionOptionsRequest implements IGetSessionOptionsRequest {

                /**
                 * Constructs a new GetSessionOptionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IGetSessionOptionsRequest);

                /**
                 * Creates a new GetSessionOptionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSessionOptionsRequest instance
                 */
                public static create(properties?: arrow.flight.protocol.IGetSessionOptionsRequest): arrow.flight.protocol.GetSessionOptionsRequest;

                /**
                 * Encodes the specified GetSessionOptionsRequest message. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsRequest.verify|verify} messages.
                 * @param message GetSessionOptionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IGetSessionOptionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSessionOptionsRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsRequest.verify|verify} messages.
                 * @param message GetSessionOptionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IGetSessionOptionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSessionOptionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.GetSessionOptionsRequest;

                /**
                 * Decodes a GetSessionOptionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.GetSessionOptionsRequest;

                /**
                 * Verifies a GetSessionOptionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSessionOptionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSessionOptionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.GetSessionOptionsRequest;

                /**
                 * Creates a plain object from a GetSessionOptionsRequest message. Also converts values to other types if specified.
                 * @param message GetSessionOptionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.GetSessionOptionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSessionOptionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetSessionOptionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetSessionOptionsResult. */
            interface IGetSessionOptionsResult {

                /** GetSessionOptionsResult sessionOptions */
                sessionOptions?: ({ [k: string]: arrow.flight.protocol.ISessionOptionValue }|null);
            }

            /** Represents a GetSessionOptionsResult. */
            class GetSessionOptionsResult implements IGetSessionOptionsResult {

                /**
                 * Constructs a new GetSessionOptionsResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.IGetSessionOptionsResult);

                /** GetSessionOptionsResult sessionOptions. */
                public sessionOptions: { [k: string]: arrow.flight.protocol.ISessionOptionValue };

                /**
                 * Creates a new GetSessionOptionsResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSessionOptionsResult instance
                 */
                public static create(properties?: arrow.flight.protocol.IGetSessionOptionsResult): arrow.flight.protocol.GetSessionOptionsResult;

                /**
                 * Encodes the specified GetSessionOptionsResult message. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsResult.verify|verify} messages.
                 * @param message GetSessionOptionsResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.IGetSessionOptionsResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSessionOptionsResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsResult.verify|verify} messages.
                 * @param message GetSessionOptionsResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.IGetSessionOptionsResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSessionOptionsResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.GetSessionOptionsResult;

                /**
                 * Decodes a GetSessionOptionsResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.GetSessionOptionsResult;

                /**
                 * Verifies a GetSessionOptionsResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSessionOptionsResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSessionOptionsResult
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.GetSessionOptionsResult;

                /**
                 * Creates a plain object from a GetSessionOptionsResult message. Also converts values to other types if specified.
                 * @param message GetSessionOptionsResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.GetSessionOptionsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSessionOptionsResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetSessionOptionsResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CloseSessionRequest. */
            interface ICloseSessionRequest {
            }

            /** Represents a CloseSessionRequest. */
            class CloseSessionRequest implements ICloseSessionRequest {

                /**
                 * Constructs a new CloseSessionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ICloseSessionRequest);

                /**
                 * Creates a new CloseSessionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CloseSessionRequest instance
                 */
                public static create(properties?: arrow.flight.protocol.ICloseSessionRequest): arrow.flight.protocol.CloseSessionRequest;

                /**
                 * Encodes the specified CloseSessionRequest message. Does not implicitly {@link arrow.flight.protocol.CloseSessionRequest.verify|verify} messages.
                 * @param message CloseSessionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ICloseSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CloseSessionRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.CloseSessionRequest.verify|verify} messages.
                 * @param message CloseSessionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ICloseSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CloseSessionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CloseSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.CloseSessionRequest;

                /**
                 * Decodes a CloseSessionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CloseSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.CloseSessionRequest;

                /**
                 * Verifies a CloseSessionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CloseSessionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CloseSessionRequest
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.CloseSessionRequest;

                /**
                 * Creates a plain object from a CloseSessionRequest message. Also converts values to other types if specified.
                 * @param message CloseSessionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.CloseSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CloseSessionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CloseSessionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CloseSessionResult. */
            interface ICloseSessionResult {

                /** CloseSessionResult status */
                status?: (arrow.flight.protocol.CloseSessionResult.Status|null);
            }

            /** Represents a CloseSessionResult. */
            class CloseSessionResult implements ICloseSessionResult {

                /**
                 * Constructs a new CloseSessionResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: arrow.flight.protocol.ICloseSessionResult);

                /** CloseSessionResult status. */
                public status: arrow.flight.protocol.CloseSessionResult.Status;

                /**
                 * Creates a new CloseSessionResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CloseSessionResult instance
                 */
                public static create(properties?: arrow.flight.protocol.ICloseSessionResult): arrow.flight.protocol.CloseSessionResult;

                /**
                 * Encodes the specified CloseSessionResult message. Does not implicitly {@link arrow.flight.protocol.CloseSessionResult.verify|verify} messages.
                 * @param message CloseSessionResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: arrow.flight.protocol.ICloseSessionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CloseSessionResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.CloseSessionResult.verify|verify} messages.
                 * @param message CloseSessionResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: arrow.flight.protocol.ICloseSessionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CloseSessionResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CloseSessionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.CloseSessionResult;

                /**
                 * Decodes a CloseSessionResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CloseSessionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.CloseSessionResult;

                /**
                 * Verifies a CloseSessionResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CloseSessionResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CloseSessionResult
                 */
                public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.CloseSessionResult;

                /**
                 * Creates a plain object from a CloseSessionResult message. Also converts values to other types if specified.
                 * @param message CloseSessionResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: arrow.flight.protocol.CloseSessionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CloseSessionResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CloseSessionResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CloseSessionResult {

                /** Status enum. */
                enum Status {
                    UNSPECIFIED = 0,
                    CLOSED = 1,
                    CLOSING = 2,
                    NOT_CLOSEABLE = 3
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

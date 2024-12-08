/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.arrow = (function() {

    /**
     * Namespace arrow.
     * @exports arrow
     * @namespace
     */
    var arrow = {};

    arrow.flight = (function() {

        /**
         * Namespace flight.
         * @memberof arrow
         * @namespace
         */
        var flight = {};

        flight.protocol = (function() {

            /**
             * Namespace protocol.
             * @memberof arrow.flight
             * @namespace
             */
            var protocol = {};

            protocol.FlightService = (function() {

                /**
                 * Constructs a new FlightService service.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a FlightService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function FlightService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (FlightService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = FlightService;

                /**
                 * Creates new FlightService service using the specified rpc implementation.
                 * @function create
                 * @memberof arrow.flight.protocol.FlightService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {FlightService} RPC service. Useful where requests and/or responses are streamed.
                 */
                FlightService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#handshake}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef HandshakeCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.HandshakeResponse} [response] HandshakeResponse
                 */

                /**
                 * Calls Handshake.
                 * @function handshake
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IHandshakeRequest} request HandshakeRequest message or plain object
                 * @param {arrow.flight.protocol.FlightService.HandshakeCallback} callback Node-style callback called with the error, if any, and HandshakeResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(FlightService.prototype.handshake = function handshake(request, callback) {
                    return this.rpcCall(handshake, $root.arrow.flight.protocol.HandshakeRequest, $root.arrow.flight.protocol.HandshakeResponse, request, callback);
                }, "name", { value: "Handshake" });

                /**
                 * Calls Handshake.
                 * @function handshake
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IHandshakeRequest} request HandshakeRequest message or plain object
                 * @returns {Promise<arrow.flight.protocol.HandshakeResponse>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#listFlights}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef ListFlightsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.FlightInfo} [response] FlightInfo
                 */

                /**
                 * Calls ListFlights.
                 * @function listFlights
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.ICriteria} request Criteria message or plain object
                 * @param {arrow.flight.protocol.FlightService.ListFlightsCallback} callback Node-style callback called with the error, if any, and FlightInfo
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(FlightService.prototype.listFlights = function listFlights(request, callback) {
                    return this.rpcCall(listFlights, $root.arrow.flight.protocol.Criteria, $root.arrow.flight.protocol.FlightInfo, request, callback);
                }, "name", { value: "ListFlights" });

                /**
                 * Calls ListFlights.
                 * @function listFlights
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.ICriteria} request Criteria message or plain object
                 * @returns {Promise<arrow.flight.protocol.FlightInfo>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#getFlightInfo}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef GetFlightInfoCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.FlightInfo} [response] FlightInfo
                 */

                /**
                 * Calls GetFlightInfo.
                 * @function getFlightInfo
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IFlightDescriptor} request FlightDescriptor message or plain object
                 * @param {arrow.flight.protocol.FlightService.GetFlightInfoCallback} callback Node-style callback called with the error, if any, and FlightInfo
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(FlightService.prototype.getFlightInfo = function getFlightInfo(request, callback) {
                    return this.rpcCall(getFlightInfo, $root.arrow.flight.protocol.FlightDescriptor, $root.arrow.flight.protocol.FlightInfo, request, callback);
                }, "name", { value: "GetFlightInfo" });

                /**
                 * Calls GetFlightInfo.
                 * @function getFlightInfo
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IFlightDescriptor} request FlightDescriptor message or plain object
                 * @returns {Promise<arrow.flight.protocol.FlightInfo>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#pollFlightInfo}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef PollFlightInfoCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.PollInfo} [response] PollInfo
                 */

                /**
                 * Calls PollFlightInfo.
                 * @function pollFlightInfo
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IFlightDescriptor} request FlightDescriptor message or plain object
                 * @param {arrow.flight.protocol.FlightService.PollFlightInfoCallback} callback Node-style callback called with the error, if any, and PollInfo
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(FlightService.prototype.pollFlightInfo = function pollFlightInfo(request, callback) {
                    return this.rpcCall(pollFlightInfo, $root.arrow.flight.protocol.FlightDescriptor, $root.arrow.flight.protocol.PollInfo, request, callback);
                }, "name", { value: "PollFlightInfo" });

                /**
                 * Calls PollFlightInfo.
                 * @function pollFlightInfo
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IFlightDescriptor} request FlightDescriptor message or plain object
                 * @returns {Promise<arrow.flight.protocol.PollInfo>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#getSchema}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef GetSchemaCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.SchemaResult} [response] SchemaResult
                 */

                /**
                 * Calls GetSchema.
                 * @function getSchema
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IFlightDescriptor} request FlightDescriptor message or plain object
                 * @param {arrow.flight.protocol.FlightService.GetSchemaCallback} callback Node-style callback called with the error, if any, and SchemaResult
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(FlightService.prototype.getSchema = function getSchema(request, callback) {
                    return this.rpcCall(getSchema, $root.arrow.flight.protocol.FlightDescriptor, $root.arrow.flight.protocol.SchemaResult, request, callback);
                }, "name", { value: "GetSchema" });

                /**
                 * Calls GetSchema.
                 * @function getSchema
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IFlightDescriptor} request FlightDescriptor message or plain object
                 * @returns {Promise<arrow.flight.protocol.SchemaResult>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doGet}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoGetCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.FlightData} [response] FlightData
                 */

                /**
                 * Calls DoGet.
                 * @function doGet
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.ITicket} request Ticket message or plain object
                 * @param {arrow.flight.protocol.FlightService.DoGetCallback} callback Node-style callback called with the error, if any, and FlightData
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(FlightService.prototype.doGet = function doGet(request, callback) {
                    return this.rpcCall(doGet, $root.arrow.flight.protocol.Ticket, $root.arrow.flight.protocol.FlightData, request, callback);
                }, "name", { value: "DoGet" });

                /**
                 * Calls DoGet.
                 * @function doGet
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.ITicket} request Ticket message or plain object
                 * @returns {Promise<arrow.flight.protocol.FlightData>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doPut}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoPutCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.PutResult} [response] PutResult
                 */

                /**
                 * Calls DoPut.
                 * @function doPut
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IFlightData} request FlightData message or plain object
                 * @param {arrow.flight.protocol.FlightService.DoPutCallback} callback Node-style callback called with the error, if any, and PutResult
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(FlightService.prototype.doPut = function doPut(request, callback) {
                    return this.rpcCall(doPut, $root.arrow.flight.protocol.FlightData, $root.arrow.flight.protocol.PutResult, request, callback);
                }, "name", { value: "DoPut" });

                /**
                 * Calls DoPut.
                 * @function doPut
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IFlightData} request FlightData message or plain object
                 * @returns {Promise<arrow.flight.protocol.PutResult>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doExchange}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoExchangeCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.FlightData} [response] FlightData
                 */

                /**
                 * Calls DoExchange.
                 * @function doExchange
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IFlightData} request FlightData message or plain object
                 * @param {arrow.flight.protocol.FlightService.DoExchangeCallback} callback Node-style callback called with the error, if any, and FlightData
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(FlightService.prototype.doExchange = function doExchange(request, callback) {
                    return this.rpcCall(doExchange, $root.arrow.flight.protocol.FlightData, $root.arrow.flight.protocol.FlightData, request, callback);
                }, "name", { value: "DoExchange" });

                /**
                 * Calls DoExchange.
                 * @function doExchange
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IFlightData} request FlightData message or plain object
                 * @returns {Promise<arrow.flight.protocol.FlightData>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#doAction}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef DoActionCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.Result} [response] Result
                 */

                /**
                 * Calls DoAction.
                 * @function doAction
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IAction} request Action message or plain object
                 * @param {arrow.flight.protocol.FlightService.DoActionCallback} callback Node-style callback called with the error, if any, and Result
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(FlightService.prototype.doAction = function doAction(request, callback) {
                    return this.rpcCall(doAction, $root.arrow.flight.protocol.Action, $root.arrow.flight.protocol.Result, request, callback);
                }, "name", { value: "DoAction" });

                /**
                 * Calls DoAction.
                 * @function doAction
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IAction} request Action message or plain object
                 * @returns {Promise<arrow.flight.protocol.Result>} Promise
                 * @variation 2
                 */

                /**
                 * Callback as used by {@link arrow.flight.protocol.FlightService#listActions}.
                 * @memberof arrow.flight.protocol.FlightService
                 * @typedef ListActionsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {arrow.flight.protocol.ActionType} [response] ActionType
                 */

                /**
                 * Calls ListActions.
                 * @function listActions
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IEmpty} request Empty message or plain object
                 * @param {arrow.flight.protocol.FlightService.ListActionsCallback} callback Node-style callback called with the error, if any, and ActionType
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(FlightService.prototype.listActions = function listActions(request, callback) {
                    return this.rpcCall(listActions, $root.arrow.flight.protocol.Empty, $root.arrow.flight.protocol.ActionType, request, callback);
                }, "name", { value: "ListActions" });

                /**
                 * Calls ListActions.
                 * @function listActions
                 * @memberof arrow.flight.protocol.FlightService
                 * @instance
                 * @param {arrow.flight.protocol.IEmpty} request Empty message or plain object
                 * @returns {Promise<arrow.flight.protocol.ActionType>} Promise
                 * @variation 2
                 */

                return FlightService;
            })();

            protocol.HandshakeRequest = (function() {

                /**
                 * Properties of a HandshakeRequest.
                 * @memberof arrow.flight.protocol
                 * @interface IHandshakeRequest
                 * @property {number|Long|null} [protocolVersion] HandshakeRequest protocolVersion
                 * @property {Uint8Array|null} [payload] HandshakeRequest payload
                 */

                /**
                 * Constructs a new HandshakeRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a HandshakeRequest.
                 * @implements IHandshakeRequest
                 * @constructor
                 * @param {arrow.flight.protocol.IHandshakeRequest=} [properties] Properties to set
                 */
                function HandshakeRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HandshakeRequest protocolVersion.
                 * @member {number|Long} protocolVersion
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @instance
                 */
                HandshakeRequest.prototype.protocolVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * HandshakeRequest payload.
                 * @member {Uint8Array} payload
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @instance
                 */
                HandshakeRequest.prototype.payload = $util.newBuffer([]);

                /**
                 * Creates a new HandshakeRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {arrow.flight.protocol.IHandshakeRequest=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.HandshakeRequest} HandshakeRequest instance
                 */
                HandshakeRequest.create = function create(properties) {
                    return new HandshakeRequest(properties);
                };

                /**
                 * Encodes the specified HandshakeRequest message. Does not implicitly {@link arrow.flight.protocol.HandshakeRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {arrow.flight.protocol.IHandshakeRequest} message HandshakeRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HandshakeRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.protocolVersion);
                    if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
                    return writer;
                };

                /**
                 * Encodes the specified HandshakeRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.HandshakeRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {arrow.flight.protocol.IHandshakeRequest} message HandshakeRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HandshakeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HandshakeRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.HandshakeRequest} HandshakeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HandshakeRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.HandshakeRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.protocolVersion = reader.uint64();
                                break;
                            }
                        case 2: {
                                message.payload = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HandshakeRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.HandshakeRequest} HandshakeRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HandshakeRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HandshakeRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HandshakeRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                        if (!$util.isInteger(message.protocolVersion) && !(message.protocolVersion && $util.isInteger(message.protocolVersion.low) && $util.isInteger(message.protocolVersion.high)))
                            return "protocolVersion: integer|Long expected";
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                            return "payload: buffer expected";
                    return null;
                };

                /**
                 * Creates a HandshakeRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.HandshakeRequest} HandshakeRequest
                 */
                HandshakeRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.HandshakeRequest)
                        return object;
                    var message = new $root.arrow.flight.protocol.HandshakeRequest();
                    if (object.protocolVersion != null)
                        if ($util.Long)
                            (message.protocolVersion = $util.Long.fromValue(object.protocolVersion)).unsigned = true;
                        else if (typeof object.protocolVersion === "string")
                            message.protocolVersion = parseInt(object.protocolVersion, 10);
                        else if (typeof object.protocolVersion === "number")
                            message.protocolVersion = object.protocolVersion;
                        else if (typeof object.protocolVersion === "object")
                            message.protocolVersion = new $util.LongBits(object.protocolVersion.low >>> 0, object.protocolVersion.high >>> 0).toNumber(true);
                    if (object.payload != null)
                        if (typeof object.payload === "string")
                            $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                        else if (object.payload.length >= 0)
                            message.payload = object.payload;
                    return message;
                };

                /**
                 * Creates a plain object from a HandshakeRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {arrow.flight.protocol.HandshakeRequest} message HandshakeRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HandshakeRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.protocolVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.protocolVersion = options.longs === String ? "0" : 0;
                        if (options.bytes === String)
                            object.payload = "";
                        else {
                            object.payload = [];
                            if (options.bytes !== Array)
                                object.payload = $util.newBuffer(object.payload);
                        }
                    }
                    if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                        if (typeof message.protocolVersion === "number")
                            object.protocolVersion = options.longs === String ? String(message.protocolVersion) : message.protocolVersion;
                        else
                            object.protocolVersion = options.longs === String ? $util.Long.prototype.toString.call(message.protocolVersion) : options.longs === Number ? new $util.LongBits(message.protocolVersion.low >>> 0, message.protocolVersion.high >>> 0).toNumber(true) : message.protocolVersion;
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                    return object;
                };

                /**
                 * Converts this HandshakeRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HandshakeRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for HandshakeRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.HandshakeRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                HandshakeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.HandshakeRequest";
                };

                return HandshakeRequest;
            })();

            protocol.HandshakeResponse = (function() {

                /**
                 * Properties of a HandshakeResponse.
                 * @memberof arrow.flight.protocol
                 * @interface IHandshakeResponse
                 * @property {number|Long|null} [protocolVersion] HandshakeResponse protocolVersion
                 * @property {Uint8Array|null} [payload] HandshakeResponse payload
                 */

                /**
                 * Constructs a new HandshakeResponse.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a HandshakeResponse.
                 * @implements IHandshakeResponse
                 * @constructor
                 * @param {arrow.flight.protocol.IHandshakeResponse=} [properties] Properties to set
                 */
                function HandshakeResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HandshakeResponse protocolVersion.
                 * @member {number|Long} protocolVersion
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @instance
                 */
                HandshakeResponse.prototype.protocolVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * HandshakeResponse payload.
                 * @member {Uint8Array} payload
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @instance
                 */
                HandshakeResponse.prototype.payload = $util.newBuffer([]);

                /**
                 * Creates a new HandshakeResponse instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {arrow.flight.protocol.IHandshakeResponse=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.HandshakeResponse} HandshakeResponse instance
                 */
                HandshakeResponse.create = function create(properties) {
                    return new HandshakeResponse(properties);
                };

                /**
                 * Encodes the specified HandshakeResponse message. Does not implicitly {@link arrow.flight.protocol.HandshakeResponse.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {arrow.flight.protocol.IHandshakeResponse} message HandshakeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HandshakeResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.protocolVersion != null && Object.hasOwnProperty.call(message, "protocolVersion"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.protocolVersion);
                    if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
                    return writer;
                };

                /**
                 * Encodes the specified HandshakeResponse message, length delimited. Does not implicitly {@link arrow.flight.protocol.HandshakeResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {arrow.flight.protocol.IHandshakeResponse} message HandshakeResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HandshakeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HandshakeResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.HandshakeResponse} HandshakeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HandshakeResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.HandshakeResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.protocolVersion = reader.uint64();
                                break;
                            }
                        case 2: {
                                message.payload = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HandshakeResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.HandshakeResponse} HandshakeResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HandshakeResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HandshakeResponse message.
                 * @function verify
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HandshakeResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                        if (!$util.isInteger(message.protocolVersion) && !(message.protocolVersion && $util.isInteger(message.protocolVersion.low) && $util.isInteger(message.protocolVersion.high)))
                            return "protocolVersion: integer|Long expected";
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                            return "payload: buffer expected";
                    return null;
                };

                /**
                 * Creates a HandshakeResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.HandshakeResponse} HandshakeResponse
                 */
                HandshakeResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.HandshakeResponse)
                        return object;
                    var message = new $root.arrow.flight.protocol.HandshakeResponse();
                    if (object.protocolVersion != null)
                        if ($util.Long)
                            (message.protocolVersion = $util.Long.fromValue(object.protocolVersion)).unsigned = true;
                        else if (typeof object.protocolVersion === "string")
                            message.protocolVersion = parseInt(object.protocolVersion, 10);
                        else if (typeof object.protocolVersion === "number")
                            message.protocolVersion = object.protocolVersion;
                        else if (typeof object.protocolVersion === "object")
                            message.protocolVersion = new $util.LongBits(object.protocolVersion.low >>> 0, object.protocolVersion.high >>> 0).toNumber(true);
                    if (object.payload != null)
                        if (typeof object.payload === "string")
                            $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                        else if (object.payload.length >= 0)
                            message.payload = object.payload;
                    return message;
                };

                /**
                 * Creates a plain object from a HandshakeResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {arrow.flight.protocol.HandshakeResponse} message HandshakeResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HandshakeResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.protocolVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.protocolVersion = options.longs === String ? "0" : 0;
                        if (options.bytes === String)
                            object.payload = "";
                        else {
                            object.payload = [];
                            if (options.bytes !== Array)
                                object.payload = $util.newBuffer(object.payload);
                        }
                    }
                    if (message.protocolVersion != null && message.hasOwnProperty("protocolVersion"))
                        if (typeof message.protocolVersion === "number")
                            object.protocolVersion = options.longs === String ? String(message.protocolVersion) : message.protocolVersion;
                        else
                            object.protocolVersion = options.longs === String ? $util.Long.prototype.toString.call(message.protocolVersion) : options.longs === Number ? new $util.LongBits(message.protocolVersion.low >>> 0, message.protocolVersion.high >>> 0).toNumber(true) : message.protocolVersion;
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                    return object;
                };

                /**
                 * Converts this HandshakeResponse to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HandshakeResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for HandshakeResponse
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.HandshakeResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                HandshakeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.HandshakeResponse";
                };

                return HandshakeResponse;
            })();

            protocol.BasicAuth = (function() {

                /**
                 * Properties of a BasicAuth.
                 * @memberof arrow.flight.protocol
                 * @interface IBasicAuth
                 * @property {string|null} [username] BasicAuth username
                 * @property {string|null} [password] BasicAuth password
                 */

                /**
                 * Constructs a new BasicAuth.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a BasicAuth.
                 * @implements IBasicAuth
                 * @constructor
                 * @param {arrow.flight.protocol.IBasicAuth=} [properties] Properties to set
                 */
                function BasicAuth(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BasicAuth username.
                 * @member {string} username
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @instance
                 */
                BasicAuth.prototype.username = "";

                /**
                 * BasicAuth password.
                 * @member {string} password
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @instance
                 */
                BasicAuth.prototype.password = "";

                /**
                 * Creates a new BasicAuth instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {arrow.flight.protocol.IBasicAuth=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.BasicAuth} BasicAuth instance
                 */
                BasicAuth.create = function create(properties) {
                    return new BasicAuth(properties);
                };

                /**
                 * Encodes the specified BasicAuth message. Does not implicitly {@link arrow.flight.protocol.BasicAuth.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {arrow.flight.protocol.IBasicAuth} message BasicAuth message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BasicAuth.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                    if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                    return writer;
                };

                /**
                 * Encodes the specified BasicAuth message, length delimited. Does not implicitly {@link arrow.flight.protocol.BasicAuth.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {arrow.flight.protocol.IBasicAuth} message BasicAuth message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BasicAuth.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BasicAuth message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.BasicAuth} BasicAuth
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BasicAuth.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.BasicAuth();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2: {
                                message.username = reader.string();
                                break;
                            }
                        case 3: {
                                message.password = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a BasicAuth message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.BasicAuth} BasicAuth
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BasicAuth.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BasicAuth message.
                 * @function verify
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BasicAuth.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.username != null && message.hasOwnProperty("username"))
                        if (!$util.isString(message.username))
                            return "username: string expected";
                    if (message.password != null && message.hasOwnProperty("password"))
                        if (!$util.isString(message.password))
                            return "password: string expected";
                    return null;
                };

                /**
                 * Creates a BasicAuth message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.BasicAuth} BasicAuth
                 */
                BasicAuth.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.BasicAuth)
                        return object;
                    var message = new $root.arrow.flight.protocol.BasicAuth();
                    if (object.username != null)
                        message.username = String(object.username);
                    if (object.password != null)
                        message.password = String(object.password);
                    return message;
                };

                /**
                 * Creates a plain object from a BasicAuth message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {arrow.flight.protocol.BasicAuth} message BasicAuth
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BasicAuth.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.username = "";
                        object.password = "";
                    }
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    return object;
                };

                /**
                 * Converts this BasicAuth to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BasicAuth.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for BasicAuth
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.BasicAuth
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                BasicAuth.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.BasicAuth";
                };

                return BasicAuth;
            })();

            protocol.Empty = (function() {

                /**
                 * Properties of an Empty.
                 * @memberof arrow.flight.protocol
                 * @interface IEmpty
                 */

                /**
                 * Constructs a new Empty.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents an Empty.
                 * @implements IEmpty
                 * @constructor
                 * @param {arrow.flight.protocol.IEmpty=} [properties] Properties to set
                 */
                function Empty(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new Empty instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {arrow.flight.protocol.IEmpty=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Empty} Empty instance
                 */
                Empty.create = function create(properties) {
                    return new Empty(properties);
                };

                /**
                 * Encodes the specified Empty message. Does not implicitly {@link arrow.flight.protocol.Empty.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {arrow.flight.protocol.IEmpty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link arrow.flight.protocol.Empty.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {arrow.flight.protocol.IEmpty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.Empty();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Empty message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Empty.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Empty} Empty
                 */
                Empty.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.Empty)
                        return object;
                    return new $root.arrow.flight.protocol.Empty();
                };

                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {arrow.flight.protocol.Empty} message Empty
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Empty.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this Empty to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Empty
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Empty.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Empty
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Empty
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.Empty";
                };

                return Empty;
            })();

            protocol.ActionType = (function() {

                /**
                 * Properties of an ActionType.
                 * @memberof arrow.flight.protocol
                 * @interface IActionType
                 * @property {string|null} [type] ActionType type
                 * @property {string|null} [description] ActionType description
                 */

                /**
                 * Constructs a new ActionType.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents an ActionType.
                 * @implements IActionType
                 * @constructor
                 * @param {arrow.flight.protocol.IActionType=} [properties] Properties to set
                 */
                function ActionType(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ActionType type.
                 * @member {string} type
                 * @memberof arrow.flight.protocol.ActionType
                 * @instance
                 */
                ActionType.prototype.type = "";

                /**
                 * ActionType description.
                 * @member {string} description
                 * @memberof arrow.flight.protocol.ActionType
                 * @instance
                 */
                ActionType.prototype.description = "";

                /**
                 * Creates a new ActionType instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {arrow.flight.protocol.IActionType=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.ActionType} ActionType instance
                 */
                ActionType.create = function create(properties) {
                    return new ActionType(properties);
                };

                /**
                 * Encodes the specified ActionType message. Does not implicitly {@link arrow.flight.protocol.ActionType.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {arrow.flight.protocol.IActionType} message ActionType message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ActionType.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified ActionType message, length delimited. Does not implicitly {@link arrow.flight.protocol.ActionType.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {arrow.flight.protocol.IActionType} message ActionType message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ActionType.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ActionType message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.ActionType} ActionType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ActionType.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.ActionType();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.string();
                                break;
                            }
                        case 2: {
                                message.description = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ActionType message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.ActionType} ActionType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ActionType.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ActionType message.
                 * @function verify
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ActionType.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates an ActionType message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.ActionType} ActionType
                 */
                ActionType.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.ActionType)
                        return object;
                    var message = new $root.arrow.flight.protocol.ActionType();
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from an ActionType message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {arrow.flight.protocol.ActionType} message ActionType
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ActionType.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = "";
                        object.description = "";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this ActionType to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.ActionType
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ActionType.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ActionType
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.ActionType
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ActionType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.ActionType";
                };

                return ActionType;
            })();

            protocol.Criteria = (function() {

                /**
                 * Properties of a Criteria.
                 * @memberof arrow.flight.protocol
                 * @interface ICriteria
                 * @property {Uint8Array|null} [expression] Criteria expression
                 */

                /**
                 * Constructs a new Criteria.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a Criteria.
                 * @implements ICriteria
                 * @constructor
                 * @param {arrow.flight.protocol.ICriteria=} [properties] Properties to set
                 */
                function Criteria(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Criteria expression.
                 * @member {Uint8Array} expression
                 * @memberof arrow.flight.protocol.Criteria
                 * @instance
                 */
                Criteria.prototype.expression = $util.newBuffer([]);

                /**
                 * Creates a new Criteria instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {arrow.flight.protocol.ICriteria=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Criteria} Criteria instance
                 */
                Criteria.create = function create(properties) {
                    return new Criteria(properties);
                };

                /**
                 * Encodes the specified Criteria message. Does not implicitly {@link arrow.flight.protocol.Criteria.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {arrow.flight.protocol.ICriteria} message Criteria message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Criteria.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.expression != null && Object.hasOwnProperty.call(message, "expression"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.expression);
                    return writer;
                };

                /**
                 * Encodes the specified Criteria message, length delimited. Does not implicitly {@link arrow.flight.protocol.Criteria.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {arrow.flight.protocol.ICriteria} message Criteria message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Criteria.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Criteria message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Criteria} Criteria
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Criteria.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.Criteria();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.expression = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Criteria message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Criteria} Criteria
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Criteria.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Criteria message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Criteria.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.expression != null && message.hasOwnProperty("expression"))
                        if (!(message.expression && typeof message.expression.length === "number" || $util.isString(message.expression)))
                            return "expression: buffer expected";
                    return null;
                };

                /**
                 * Creates a Criteria message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Criteria} Criteria
                 */
                Criteria.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.Criteria)
                        return object;
                    var message = new $root.arrow.flight.protocol.Criteria();
                    if (object.expression != null)
                        if (typeof object.expression === "string")
                            $util.base64.decode(object.expression, message.expression = $util.newBuffer($util.base64.length(object.expression)), 0);
                        else if (object.expression.length >= 0)
                            message.expression = object.expression;
                    return message;
                };

                /**
                 * Creates a plain object from a Criteria message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {arrow.flight.protocol.Criteria} message Criteria
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Criteria.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.expression = "";
                        else {
                            object.expression = [];
                            if (options.bytes !== Array)
                                object.expression = $util.newBuffer(object.expression);
                        }
                    if (message.expression != null && message.hasOwnProperty("expression"))
                        object.expression = options.bytes === String ? $util.base64.encode(message.expression, 0, message.expression.length) : options.bytes === Array ? Array.prototype.slice.call(message.expression) : message.expression;
                    return object;
                };

                /**
                 * Converts this Criteria to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Criteria
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Criteria.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Criteria
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Criteria
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Criteria.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.Criteria";
                };

                return Criteria;
            })();

            protocol.Action = (function() {

                /**
                 * Properties of an Action.
                 * @memberof arrow.flight.protocol
                 * @interface IAction
                 * @property {string|null} [type] Action type
                 * @property {Uint8Array|null} [body] Action body
                 */

                /**
                 * Constructs a new Action.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents an Action.
                 * @implements IAction
                 * @constructor
                 * @param {arrow.flight.protocol.IAction=} [properties] Properties to set
                 */
                function Action(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Action type.
                 * @member {string} type
                 * @memberof arrow.flight.protocol.Action
                 * @instance
                 */
                Action.prototype.type = "";

                /**
                 * Action body.
                 * @member {Uint8Array} body
                 * @memberof arrow.flight.protocol.Action
                 * @instance
                 */
                Action.prototype.body = $util.newBuffer([]);

                /**
                 * Creates a new Action instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {arrow.flight.protocol.IAction=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Action} Action instance
                 */
                Action.create = function create(properties) {
                    return new Action(properties);
                };

                /**
                 * Encodes the specified Action message. Does not implicitly {@link arrow.flight.protocol.Action.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {arrow.flight.protocol.IAction} message Action message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Action.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.body);
                    return writer;
                };

                /**
                 * Encodes the specified Action message, length delimited. Does not implicitly {@link arrow.flight.protocol.Action.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {arrow.flight.protocol.IAction} message Action message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Action.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Action message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Action} Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Action.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.Action();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.string();
                                break;
                            }
                        case 2: {
                                message.body = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Action message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Action} Action
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Action.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Action message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Action.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.body != null && message.hasOwnProperty("body"))
                        if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                            return "body: buffer expected";
                    return null;
                };

                /**
                 * Creates an Action message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Action} Action
                 */
                Action.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.Action)
                        return object;
                    var message = new $root.arrow.flight.protocol.Action();
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.body != null)
                        if (typeof object.body === "string")
                            $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                        else if (object.body.length >= 0)
                            message.body = object.body;
                    return message;
                };

                /**
                 * Creates a plain object from an Action message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {arrow.flight.protocol.Action} message Action
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Action.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = "";
                        if (options.bytes === String)
                            object.body = "";
                        else {
                            object.body = [];
                            if (options.bytes !== Array)
                                object.body = $util.newBuffer(object.body);
                        }
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
                    return object;
                };

                /**
                 * Converts this Action to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Action
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Action.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Action
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Action
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Action.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.Action";
                };

                return Action;
            })();

            protocol.Result = (function() {

                /**
                 * Properties of a Result.
                 * @memberof arrow.flight.protocol
                 * @interface IResult
                 * @property {Uint8Array|null} [body] Result body
                 */

                /**
                 * Constructs a new Result.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a Result.
                 * @implements IResult
                 * @constructor
                 * @param {arrow.flight.protocol.IResult=} [properties] Properties to set
                 */
                function Result(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Result body.
                 * @member {Uint8Array} body
                 * @memberof arrow.flight.protocol.Result
                 * @instance
                 */
                Result.prototype.body = $util.newBuffer([]);

                /**
                 * Creates a new Result instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {arrow.flight.protocol.IResult=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Result} Result instance
                 */
                Result.create = function create(properties) {
                    return new Result(properties);
                };

                /**
                 * Encodes the specified Result message. Does not implicitly {@link arrow.flight.protocol.Result.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {arrow.flight.protocol.IResult} message Result message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Result.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.body);
                    return writer;
                };

                /**
                 * Encodes the specified Result message, length delimited. Does not implicitly {@link arrow.flight.protocol.Result.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {arrow.flight.protocol.IResult} message Result message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Result.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Result message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Result} Result
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Result.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.Result();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.body = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Result message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Result} Result
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Result.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Result message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Result.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.body != null && message.hasOwnProperty("body"))
                        if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                            return "body: buffer expected";
                    return null;
                };

                /**
                 * Creates a Result message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Result} Result
                 */
                Result.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.Result)
                        return object;
                    var message = new $root.arrow.flight.protocol.Result();
                    if (object.body != null)
                        if (typeof object.body === "string")
                            $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                        else if (object.body.length >= 0)
                            message.body = object.body;
                    return message;
                };

                /**
                 * Creates a plain object from a Result message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {arrow.flight.protocol.Result} message Result
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Result.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.body = "";
                        else {
                            object.body = [];
                            if (options.bytes !== Array)
                                object.body = $util.newBuffer(object.body);
                        }
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
                    return object;
                };

                /**
                 * Converts this Result to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Result
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Result.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Result
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Result
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Result.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.Result";
                };

                return Result;
            })();

            protocol.SchemaResult = (function() {

                /**
                 * Properties of a SchemaResult.
                 * @memberof arrow.flight.protocol
                 * @interface ISchemaResult
                 * @property {Uint8Array|null} [schema] SchemaResult schema
                 */

                /**
                 * Constructs a new SchemaResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a SchemaResult.
                 * @implements ISchemaResult
                 * @constructor
                 * @param {arrow.flight.protocol.ISchemaResult=} [properties] Properties to set
                 */
                function SchemaResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SchemaResult schema.
                 * @member {Uint8Array} schema
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @instance
                 */
                SchemaResult.prototype.schema = $util.newBuffer([]);

                /**
                 * Creates a new SchemaResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {arrow.flight.protocol.ISchemaResult=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.SchemaResult} SchemaResult instance
                 */
                SchemaResult.create = function create(properties) {
                    return new SchemaResult(properties);
                };

                /**
                 * Encodes the specified SchemaResult message. Does not implicitly {@link arrow.flight.protocol.SchemaResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {arrow.flight.protocol.ISchemaResult} message SchemaResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SchemaResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.schema);
                    return writer;
                };

                /**
                 * Encodes the specified SchemaResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.SchemaResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {arrow.flight.protocol.ISchemaResult} message SchemaResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SchemaResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SchemaResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SchemaResult} SchemaResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SchemaResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.SchemaResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.schema = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SchemaResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SchemaResult} SchemaResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SchemaResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SchemaResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SchemaResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.schema != null && message.hasOwnProperty("schema"))
                        if (!(message.schema && typeof message.schema.length === "number" || $util.isString(message.schema)))
                            return "schema: buffer expected";
                    return null;
                };

                /**
                 * Creates a SchemaResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.SchemaResult} SchemaResult
                 */
                SchemaResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.SchemaResult)
                        return object;
                    var message = new $root.arrow.flight.protocol.SchemaResult();
                    if (object.schema != null)
                        if (typeof object.schema === "string")
                            $util.base64.decode(object.schema, message.schema = $util.newBuffer($util.base64.length(object.schema)), 0);
                        else if (object.schema.length >= 0)
                            message.schema = object.schema;
                    return message;
                };

                /**
                 * Creates a plain object from a SchemaResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {arrow.flight.protocol.SchemaResult} message SchemaResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SchemaResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.schema = "";
                        else {
                            object.schema = [];
                            if (options.bytes !== Array)
                                object.schema = $util.newBuffer(object.schema);
                        }
                    if (message.schema != null && message.hasOwnProperty("schema"))
                        object.schema = options.bytes === String ? $util.base64.encode(message.schema, 0, message.schema.length) : options.bytes === Array ? Array.prototype.slice.call(message.schema) : message.schema;
                    return object;
                };

                /**
                 * Converts this SchemaResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SchemaResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SchemaResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.SchemaResult
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SchemaResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.SchemaResult";
                };

                return SchemaResult;
            })();

            protocol.FlightDescriptor = (function() {

                /**
                 * Properties of a FlightDescriptor.
                 * @memberof arrow.flight.protocol
                 * @interface IFlightDescriptor
                 * @property {arrow.flight.protocol.FlightDescriptor.DescriptorType|null} [type] FlightDescriptor type
                 * @property {Uint8Array|null} [cmd] FlightDescriptor cmd
                 * @property {Array.<string>|null} [path] FlightDescriptor path
                 */

                /**
                 * Constructs a new FlightDescriptor.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a FlightDescriptor.
                 * @implements IFlightDescriptor
                 * @constructor
                 * @param {arrow.flight.protocol.IFlightDescriptor=} [properties] Properties to set
                 */
                function FlightDescriptor(properties) {
                    this.path = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FlightDescriptor type.
                 * @member {arrow.flight.protocol.FlightDescriptor.DescriptorType} type
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @instance
                 */
                FlightDescriptor.prototype.type = 0;

                /**
                 * FlightDescriptor cmd.
                 * @member {Uint8Array} cmd
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @instance
                 */
                FlightDescriptor.prototype.cmd = $util.newBuffer([]);

                /**
                 * FlightDescriptor path.
                 * @member {Array.<string>} path
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @instance
                 */
                FlightDescriptor.prototype.path = $util.emptyArray;

                /**
                 * Creates a new FlightDescriptor instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {arrow.flight.protocol.IFlightDescriptor=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.FlightDescriptor} FlightDescriptor instance
                 */
                FlightDescriptor.create = function create(properties) {
                    return new FlightDescriptor(properties);
                };

                /**
                 * Encodes the specified FlightDescriptor message. Does not implicitly {@link arrow.flight.protocol.FlightDescriptor.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {arrow.flight.protocol.IFlightDescriptor} message FlightDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightDescriptor.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.cmd);
                    if (message.path != null && message.path.length)
                        for (var i = 0; i < message.path.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.path[i]);
                    return writer;
                };

                /**
                 * Encodes the specified FlightDescriptor message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightDescriptor.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {arrow.flight.protocol.IFlightDescriptor} message FlightDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FlightDescriptor message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightDescriptor} FlightDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightDescriptor.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.FlightDescriptor();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.int32();
                                break;
                            }
                        case 2: {
                                message.cmd = reader.bytes();
                                break;
                            }
                        case 3: {
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                message.path.push(reader.string());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FlightDescriptor message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightDescriptor} FlightDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightDescriptor.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FlightDescriptor message.
                 * @function verify
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FlightDescriptor.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.cmd != null && message.hasOwnProperty("cmd"))
                        if (!(message.cmd && typeof message.cmd.length === "number" || $util.isString(message.cmd)))
                            return "cmd: buffer expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isString(message.path[i]))
                                return "path: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a FlightDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.FlightDescriptor} FlightDescriptor
                 */
                FlightDescriptor.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.FlightDescriptor)
                        return object;
                    var message = new $root.arrow.flight.protocol.FlightDescriptor();
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.type = 0;
                        break;
                    case "PATH":
                    case 1:
                        message.type = 1;
                        break;
                    case "CMD":
                    case 2:
                        message.type = 2;
                        break;
                    }
                    if (object.cmd != null)
                        if (typeof object.cmd === "string")
                            $util.base64.decode(object.cmd, message.cmd = $util.newBuffer($util.base64.length(object.cmd)), 0);
                        else if (object.cmd.length >= 0)
                            message.cmd = object.cmd;
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".arrow.flight.protocol.FlightDescriptor.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = String(object.path[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FlightDescriptor message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {arrow.flight.protocol.FlightDescriptor} message FlightDescriptor
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FlightDescriptor.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.type = options.enums === String ? "UNKNOWN" : 0;
                        if (options.bytes === String)
                            object.cmd = "";
                        else {
                            object.cmd = [];
                            if (options.bytes !== Array)
                                object.cmd = $util.newBuffer(object.cmd);
                        }
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.arrow.flight.protocol.FlightDescriptor.DescriptorType[message.type] === undefined ? message.type : $root.arrow.flight.protocol.FlightDescriptor.DescriptorType[message.type] : message.type;
                    if (message.cmd != null && message.hasOwnProperty("cmd"))
                        object.cmd = options.bytes === String ? $util.base64.encode(message.cmd, 0, message.cmd.length) : options.bytes === Array ? Array.prototype.slice.call(message.cmd) : message.cmd;
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    return object;
                };

                /**
                 * Converts this FlightDescriptor to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FlightDescriptor.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for FlightDescriptor
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.FlightDescriptor
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FlightDescriptor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.FlightDescriptor";
                };

                /**
                 * DescriptorType enum.
                 * @name arrow.flight.protocol.FlightDescriptor.DescriptorType
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} PATH=1 PATH value
                 * @property {number} CMD=2 CMD value
                 */
                FlightDescriptor.DescriptorType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "PATH"] = 1;
                    values[valuesById[2] = "CMD"] = 2;
                    return values;
                })();

                return FlightDescriptor;
            })();

            protocol.FlightInfo = (function() {

                /**
                 * Properties of a FlightInfo.
                 * @memberof arrow.flight.protocol
                 * @interface IFlightInfo
                 * @property {Uint8Array|null} [schema] FlightInfo schema
                 * @property {arrow.flight.protocol.IFlightDescriptor|null} [flightDescriptor] FlightInfo flightDescriptor
                 * @property {Array.<arrow.flight.protocol.IFlightEndpoint>|null} [endpoint] FlightInfo endpoint
                 * @property {number|Long|null} [totalRecords] FlightInfo totalRecords
                 * @property {number|Long|null} [totalBytes] FlightInfo totalBytes
                 * @property {boolean|null} [ordered] FlightInfo ordered
                 * @property {Uint8Array|null} [appMetadata] FlightInfo appMetadata
                 */

                /**
                 * Constructs a new FlightInfo.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a FlightInfo.
                 * @implements IFlightInfo
                 * @constructor
                 * @param {arrow.flight.protocol.IFlightInfo=} [properties] Properties to set
                 */
                function FlightInfo(properties) {
                    this.endpoint = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FlightInfo schema.
                 * @member {Uint8Array} schema
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.schema = $util.newBuffer([]);

                /**
                 * FlightInfo flightDescriptor.
                 * @member {arrow.flight.protocol.IFlightDescriptor|null|undefined} flightDescriptor
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.flightDescriptor = null;

                /**
                 * FlightInfo endpoint.
                 * @member {Array.<arrow.flight.protocol.IFlightEndpoint>} endpoint
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.endpoint = $util.emptyArray;

                /**
                 * FlightInfo totalRecords.
                 * @member {number|Long} totalRecords
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.totalRecords = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * FlightInfo totalBytes.
                 * @member {number|Long} totalBytes
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.totalBytes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * FlightInfo ordered.
                 * @member {boolean} ordered
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.ordered = false;

                /**
                 * FlightInfo appMetadata.
                 * @member {Uint8Array} appMetadata
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 */
                FlightInfo.prototype.appMetadata = $util.newBuffer([]);

                /**
                 * Creates a new FlightInfo instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {arrow.flight.protocol.IFlightInfo=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.FlightInfo} FlightInfo instance
                 */
                FlightInfo.create = function create(properties) {
                    return new FlightInfo(properties);
                };

                /**
                 * Encodes the specified FlightInfo message. Does not implicitly {@link arrow.flight.protocol.FlightInfo.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {arrow.flight.protocol.IFlightInfo} message FlightInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.schema);
                    if (message.flightDescriptor != null && Object.hasOwnProperty.call(message, "flightDescriptor"))
                        $root.arrow.flight.protocol.FlightDescriptor.encode(message.flightDescriptor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.endpoint != null && message.endpoint.length)
                        for (var i = 0; i < message.endpoint.length; ++i)
                            $root.arrow.flight.protocol.FlightEndpoint.encode(message.endpoint[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.totalRecords != null && Object.hasOwnProperty.call(message, "totalRecords"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.totalRecords);
                    if (message.totalBytes != null && Object.hasOwnProperty.call(message, "totalBytes"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.totalBytes);
                    if (message.ordered != null && Object.hasOwnProperty.call(message, "ordered"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.ordered);
                    if (message.appMetadata != null && Object.hasOwnProperty.call(message, "appMetadata"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.appMetadata);
                    return writer;
                };

                /**
                 * Encodes the specified FlightInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {arrow.flight.protocol.IFlightInfo} message FlightInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FlightInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightInfo} FlightInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.FlightInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.schema = reader.bytes();
                                break;
                            }
                        case 2: {
                                message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                if (!(message.endpoint && message.endpoint.length))
                                    message.endpoint = [];
                                message.endpoint.push($root.arrow.flight.protocol.FlightEndpoint.decode(reader, reader.uint32()));
                                break;
                            }
                        case 4: {
                                message.totalRecords = reader.int64();
                                break;
                            }
                        case 5: {
                                message.totalBytes = reader.int64();
                                break;
                            }
                        case 6: {
                                message.ordered = reader.bool();
                                break;
                            }
                        case 7: {
                                message.appMetadata = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FlightInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightInfo} FlightInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FlightInfo message.
                 * @function verify
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FlightInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.schema != null && message.hasOwnProperty("schema"))
                        if (!(message.schema && typeof message.schema.length === "number" || $util.isString(message.schema)))
                            return "schema: buffer expected";
                    if (message.flightDescriptor != null && message.hasOwnProperty("flightDescriptor")) {
                        var error = $root.arrow.flight.protocol.FlightDescriptor.verify(message.flightDescriptor);
                        if (error)
                            return "flightDescriptor." + error;
                    }
                    if (message.endpoint != null && message.hasOwnProperty("endpoint")) {
                        if (!Array.isArray(message.endpoint))
                            return "endpoint: array expected";
                        for (var i = 0; i < message.endpoint.length; ++i) {
                            var error = $root.arrow.flight.protocol.FlightEndpoint.verify(message.endpoint[i]);
                            if (error)
                                return "endpoint." + error;
                        }
                    }
                    if (message.totalRecords != null && message.hasOwnProperty("totalRecords"))
                        if (!$util.isInteger(message.totalRecords) && !(message.totalRecords && $util.isInteger(message.totalRecords.low) && $util.isInteger(message.totalRecords.high)))
                            return "totalRecords: integer|Long expected";
                    if (message.totalBytes != null && message.hasOwnProperty("totalBytes"))
                        if (!$util.isInteger(message.totalBytes) && !(message.totalBytes && $util.isInteger(message.totalBytes.low) && $util.isInteger(message.totalBytes.high)))
                            return "totalBytes: integer|Long expected";
                    if (message.ordered != null && message.hasOwnProperty("ordered"))
                        if (typeof message.ordered !== "boolean")
                            return "ordered: boolean expected";
                    if (message.appMetadata != null && message.hasOwnProperty("appMetadata"))
                        if (!(message.appMetadata && typeof message.appMetadata.length === "number" || $util.isString(message.appMetadata)))
                            return "appMetadata: buffer expected";
                    return null;
                };

                /**
                 * Creates a FlightInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.FlightInfo} FlightInfo
                 */
                FlightInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.FlightInfo)
                        return object;
                    var message = new $root.arrow.flight.protocol.FlightInfo();
                    if (object.schema != null)
                        if (typeof object.schema === "string")
                            $util.base64.decode(object.schema, message.schema = $util.newBuffer($util.base64.length(object.schema)), 0);
                        else if (object.schema.length >= 0)
                            message.schema = object.schema;
                    if (object.flightDescriptor != null) {
                        if (typeof object.flightDescriptor !== "object")
                            throw TypeError(".arrow.flight.protocol.FlightInfo.flightDescriptor: object expected");
                        message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.fromObject(object.flightDescriptor);
                    }
                    if (object.endpoint) {
                        if (!Array.isArray(object.endpoint))
                            throw TypeError(".arrow.flight.protocol.FlightInfo.endpoint: array expected");
                        message.endpoint = [];
                        for (var i = 0; i < object.endpoint.length; ++i) {
                            if (typeof object.endpoint[i] !== "object")
                                throw TypeError(".arrow.flight.protocol.FlightInfo.endpoint: object expected");
                            message.endpoint[i] = $root.arrow.flight.protocol.FlightEndpoint.fromObject(object.endpoint[i]);
                        }
                    }
                    if (object.totalRecords != null)
                        if ($util.Long)
                            (message.totalRecords = $util.Long.fromValue(object.totalRecords)).unsigned = false;
                        else if (typeof object.totalRecords === "string")
                            message.totalRecords = parseInt(object.totalRecords, 10);
                        else if (typeof object.totalRecords === "number")
                            message.totalRecords = object.totalRecords;
                        else if (typeof object.totalRecords === "object")
                            message.totalRecords = new $util.LongBits(object.totalRecords.low >>> 0, object.totalRecords.high >>> 0).toNumber();
                    if (object.totalBytes != null)
                        if ($util.Long)
                            (message.totalBytes = $util.Long.fromValue(object.totalBytes)).unsigned = false;
                        else if (typeof object.totalBytes === "string")
                            message.totalBytes = parseInt(object.totalBytes, 10);
                        else if (typeof object.totalBytes === "number")
                            message.totalBytes = object.totalBytes;
                        else if (typeof object.totalBytes === "object")
                            message.totalBytes = new $util.LongBits(object.totalBytes.low >>> 0, object.totalBytes.high >>> 0).toNumber();
                    if (object.ordered != null)
                        message.ordered = Boolean(object.ordered);
                    if (object.appMetadata != null)
                        if (typeof object.appMetadata === "string")
                            $util.base64.decode(object.appMetadata, message.appMetadata = $util.newBuffer($util.base64.length(object.appMetadata)), 0);
                        else if (object.appMetadata.length >= 0)
                            message.appMetadata = object.appMetadata;
                    return message;
                };

                /**
                 * Creates a plain object from a FlightInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {arrow.flight.protocol.FlightInfo} message FlightInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FlightInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.endpoint = [];
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.schema = "";
                        else {
                            object.schema = [];
                            if (options.bytes !== Array)
                                object.schema = $util.newBuffer(object.schema);
                        }
                        object.flightDescriptor = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.totalRecords = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.totalRecords = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.totalBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.totalBytes = options.longs === String ? "0" : 0;
                        object.ordered = false;
                        if (options.bytes === String)
                            object.appMetadata = "";
                        else {
                            object.appMetadata = [];
                            if (options.bytes !== Array)
                                object.appMetadata = $util.newBuffer(object.appMetadata);
                        }
                    }
                    if (message.schema != null && message.hasOwnProperty("schema"))
                        object.schema = options.bytes === String ? $util.base64.encode(message.schema, 0, message.schema.length) : options.bytes === Array ? Array.prototype.slice.call(message.schema) : message.schema;
                    if (message.flightDescriptor != null && message.hasOwnProperty("flightDescriptor"))
                        object.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.toObject(message.flightDescriptor, options);
                    if (message.endpoint && message.endpoint.length) {
                        object.endpoint = [];
                        for (var j = 0; j < message.endpoint.length; ++j)
                            object.endpoint[j] = $root.arrow.flight.protocol.FlightEndpoint.toObject(message.endpoint[j], options);
                    }
                    if (message.totalRecords != null && message.hasOwnProperty("totalRecords"))
                        if (typeof message.totalRecords === "number")
                            object.totalRecords = options.longs === String ? String(message.totalRecords) : message.totalRecords;
                        else
                            object.totalRecords = options.longs === String ? $util.Long.prototype.toString.call(message.totalRecords) : options.longs === Number ? new $util.LongBits(message.totalRecords.low >>> 0, message.totalRecords.high >>> 0).toNumber() : message.totalRecords;
                    if (message.totalBytes != null && message.hasOwnProperty("totalBytes"))
                        if (typeof message.totalBytes === "number")
                            object.totalBytes = options.longs === String ? String(message.totalBytes) : message.totalBytes;
                        else
                            object.totalBytes = options.longs === String ? $util.Long.prototype.toString.call(message.totalBytes) : options.longs === Number ? new $util.LongBits(message.totalBytes.low >>> 0, message.totalBytes.high >>> 0).toNumber() : message.totalBytes;
                    if (message.ordered != null && message.hasOwnProperty("ordered"))
                        object.ordered = message.ordered;
                    if (message.appMetadata != null && message.hasOwnProperty("appMetadata"))
                        object.appMetadata = options.bytes === String ? $util.base64.encode(message.appMetadata, 0, message.appMetadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.appMetadata) : message.appMetadata;
                    return object;
                };

                /**
                 * Converts this FlightInfo to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FlightInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for FlightInfo
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.FlightInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FlightInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.FlightInfo";
                };

                return FlightInfo;
            })();

            protocol.PollInfo = (function() {

                /**
                 * Properties of a PollInfo.
                 * @memberof arrow.flight.protocol
                 * @interface IPollInfo
                 * @property {arrow.flight.protocol.IFlightInfo|null} [info] PollInfo info
                 * @property {arrow.flight.protocol.IFlightDescriptor|null} [flightDescriptor] PollInfo flightDescriptor
                 * @property {number|null} [progress] PollInfo progress
                 * @property {google.protobuf.ITimestamp|null} [expirationTime] PollInfo expirationTime
                 */

                /**
                 * Constructs a new PollInfo.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a PollInfo.
                 * @implements IPollInfo
                 * @constructor
                 * @param {arrow.flight.protocol.IPollInfo=} [properties] Properties to set
                 */
                function PollInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PollInfo info.
                 * @member {arrow.flight.protocol.IFlightInfo|null|undefined} info
                 * @memberof arrow.flight.protocol.PollInfo
                 * @instance
                 */
                PollInfo.prototype.info = null;

                /**
                 * PollInfo flightDescriptor.
                 * @member {arrow.flight.protocol.IFlightDescriptor|null|undefined} flightDescriptor
                 * @memberof arrow.flight.protocol.PollInfo
                 * @instance
                 */
                PollInfo.prototype.flightDescriptor = null;

                /**
                 * PollInfo progress.
                 * @member {number|null|undefined} progress
                 * @memberof arrow.flight.protocol.PollInfo
                 * @instance
                 */
                PollInfo.prototype.progress = null;

                /**
                 * PollInfo expirationTime.
                 * @member {google.protobuf.ITimestamp|null|undefined} expirationTime
                 * @memberof arrow.flight.protocol.PollInfo
                 * @instance
                 */
                PollInfo.prototype.expirationTime = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(PollInfo.prototype, "_progress", {
                    get: $util.oneOfGetter($oneOfFields = ["progress"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new PollInfo instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {arrow.flight.protocol.IPollInfo=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.PollInfo} PollInfo instance
                 */
                PollInfo.create = function create(properties) {
                    return new PollInfo(properties);
                };

                /**
                 * Encodes the specified PollInfo message. Does not implicitly {@link arrow.flight.protocol.PollInfo.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {arrow.flight.protocol.IPollInfo} message PollInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PollInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                        $root.arrow.flight.protocol.FlightInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.flightDescriptor != null && Object.hasOwnProperty.call(message, "flightDescriptor"))
                        $root.arrow.flight.protocol.FlightDescriptor.encode(message.flightDescriptor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.progress != null && Object.hasOwnProperty.call(message, "progress"))
                        writer.uint32(/* id 3, wireType 1 =*/25).double(message.progress);
                    if (message.expirationTime != null && Object.hasOwnProperty.call(message, "expirationTime"))
                        $root.google.protobuf.Timestamp.encode(message.expirationTime, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified PollInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.PollInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {arrow.flight.protocol.IPollInfo} message PollInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PollInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PollInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.PollInfo} PollInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PollInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.PollInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.info = $root.arrow.flight.protocol.FlightInfo.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.progress = reader.double();
                                break;
                            }
                        case 4: {
                                message.expirationTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PollInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.PollInfo} PollInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PollInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PollInfo message.
                 * @function verify
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PollInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.arrow.flight.protocol.FlightInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    if (message.flightDescriptor != null && message.hasOwnProperty("flightDescriptor")) {
                        var error = $root.arrow.flight.protocol.FlightDescriptor.verify(message.flightDescriptor);
                        if (error)
                            return "flightDescriptor." + error;
                    }
                    if (message.progress != null && message.hasOwnProperty("progress")) {
                        properties._progress = 1;
                        if (typeof message.progress !== "number")
                            return "progress: number expected";
                    }
                    if (message.expirationTime != null && message.hasOwnProperty("expirationTime")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.expirationTime);
                        if (error)
                            return "expirationTime." + error;
                    }
                    return null;
                };

                /**
                 * Creates a PollInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.PollInfo} PollInfo
                 */
                PollInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.PollInfo)
                        return object;
                    var message = new $root.arrow.flight.protocol.PollInfo();
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".arrow.flight.protocol.PollInfo.info: object expected");
                        message.info = $root.arrow.flight.protocol.FlightInfo.fromObject(object.info);
                    }
                    if (object.flightDescriptor != null) {
                        if (typeof object.flightDescriptor !== "object")
                            throw TypeError(".arrow.flight.protocol.PollInfo.flightDescriptor: object expected");
                        message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.fromObject(object.flightDescriptor);
                    }
                    if (object.progress != null)
                        message.progress = Number(object.progress);
                    if (object.expirationTime != null) {
                        if (typeof object.expirationTime !== "object")
                            throw TypeError(".arrow.flight.protocol.PollInfo.expirationTime: object expected");
                        message.expirationTime = $root.google.protobuf.Timestamp.fromObject(object.expirationTime);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PollInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {arrow.flight.protocol.PollInfo} message PollInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PollInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.info = null;
                        object.flightDescriptor = null;
                        object.expirationTime = null;
                    }
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.arrow.flight.protocol.FlightInfo.toObject(message.info, options);
                    if (message.flightDescriptor != null && message.hasOwnProperty("flightDescriptor"))
                        object.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.toObject(message.flightDescriptor, options);
                    if (message.progress != null && message.hasOwnProperty("progress")) {
                        object.progress = options.json && !isFinite(message.progress) ? String(message.progress) : message.progress;
                        if (options.oneofs)
                            object._progress = "progress";
                    }
                    if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                        object.expirationTime = $root.google.protobuf.Timestamp.toObject(message.expirationTime, options);
                    return object;
                };

                /**
                 * Converts this PollInfo to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.PollInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PollInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PollInfo
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.PollInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PollInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.PollInfo";
                };

                return PollInfo;
            })();

            protocol.CancelFlightInfoRequest = (function() {

                /**
                 * Properties of a CancelFlightInfoRequest.
                 * @memberof arrow.flight.protocol
                 * @interface ICancelFlightInfoRequest
                 * @property {arrow.flight.protocol.IFlightInfo|null} [info] CancelFlightInfoRequest info
                 */

                /**
                 * Constructs a new CancelFlightInfoRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a CancelFlightInfoRequest.
                 * @implements ICancelFlightInfoRequest
                 * @constructor
                 * @param {arrow.flight.protocol.ICancelFlightInfoRequest=} [properties] Properties to set
                 */
                function CancelFlightInfoRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CancelFlightInfoRequest info.
                 * @member {arrow.flight.protocol.IFlightInfo|null|undefined} info
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @instance
                 */
                CancelFlightInfoRequest.prototype.info = null;

                /**
                 * Creates a new CancelFlightInfoRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {arrow.flight.protocol.ICancelFlightInfoRequest=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.CancelFlightInfoRequest} CancelFlightInfoRequest instance
                 */
                CancelFlightInfoRequest.create = function create(properties) {
                    return new CancelFlightInfoRequest(properties);
                };

                /**
                 * Encodes the specified CancelFlightInfoRequest message. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {arrow.flight.protocol.ICancelFlightInfoRequest} message CancelFlightInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CancelFlightInfoRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                        $root.arrow.flight.protocol.FlightInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CancelFlightInfoRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {arrow.flight.protocol.ICancelFlightInfoRequest} message CancelFlightInfoRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CancelFlightInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CancelFlightInfoRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CancelFlightInfoRequest} CancelFlightInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CancelFlightInfoRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.CancelFlightInfoRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.info = $root.arrow.flight.protocol.FlightInfo.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CancelFlightInfoRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CancelFlightInfoRequest} CancelFlightInfoRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CancelFlightInfoRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CancelFlightInfoRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CancelFlightInfoRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.arrow.flight.protocol.FlightInfo.verify(message.info);
                        if (error)
                            return "info." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CancelFlightInfoRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.CancelFlightInfoRequest} CancelFlightInfoRequest
                 */
                CancelFlightInfoRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.CancelFlightInfoRequest)
                        return object;
                    var message = new $root.arrow.flight.protocol.CancelFlightInfoRequest();
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".arrow.flight.protocol.CancelFlightInfoRequest.info: object expected");
                        message.info = $root.arrow.flight.protocol.FlightInfo.fromObject(object.info);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CancelFlightInfoRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {arrow.flight.protocol.CancelFlightInfoRequest} message CancelFlightInfoRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CancelFlightInfoRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.info = null;
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.arrow.flight.protocol.FlightInfo.toObject(message.info, options);
                    return object;
                };

                /**
                 * Converts this CancelFlightInfoRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CancelFlightInfoRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CancelFlightInfoRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.CancelFlightInfoRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CancelFlightInfoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.CancelFlightInfoRequest";
                };

                return CancelFlightInfoRequest;
            })();

            /**
             * CancelStatus enum.
             * @name arrow.flight.protocol.CancelStatus
             * @enum {number}
             * @property {number} CANCEL_STATUS_UNSPECIFIED=0 CANCEL_STATUS_UNSPECIFIED value
             * @property {number} CANCEL_STATUS_CANCELLED=1 CANCEL_STATUS_CANCELLED value
             * @property {number} CANCEL_STATUS_CANCELLING=2 CANCEL_STATUS_CANCELLING value
             * @property {number} CANCEL_STATUS_NOT_CANCELLABLE=3 CANCEL_STATUS_NOT_CANCELLABLE value
             */
            protocol.CancelStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CANCEL_STATUS_UNSPECIFIED"] = 0;
                values[valuesById[1] = "CANCEL_STATUS_CANCELLED"] = 1;
                values[valuesById[2] = "CANCEL_STATUS_CANCELLING"] = 2;
                values[valuesById[3] = "CANCEL_STATUS_NOT_CANCELLABLE"] = 3;
                return values;
            })();

            protocol.CancelFlightInfoResult = (function() {

                /**
                 * Properties of a CancelFlightInfoResult.
                 * @memberof arrow.flight.protocol
                 * @interface ICancelFlightInfoResult
                 * @property {arrow.flight.protocol.CancelStatus|null} [status] CancelFlightInfoResult status
                 */

                /**
                 * Constructs a new CancelFlightInfoResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a CancelFlightInfoResult.
                 * @implements ICancelFlightInfoResult
                 * @constructor
                 * @param {arrow.flight.protocol.ICancelFlightInfoResult=} [properties] Properties to set
                 */
                function CancelFlightInfoResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CancelFlightInfoResult status.
                 * @member {arrow.flight.protocol.CancelStatus} status
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @instance
                 */
                CancelFlightInfoResult.prototype.status = 0;

                /**
                 * Creates a new CancelFlightInfoResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {arrow.flight.protocol.ICancelFlightInfoResult=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.CancelFlightInfoResult} CancelFlightInfoResult instance
                 */
                CancelFlightInfoResult.create = function create(properties) {
                    return new CancelFlightInfoResult(properties);
                };

                /**
                 * Encodes the specified CancelFlightInfoResult message. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {arrow.flight.protocol.ICancelFlightInfoResult} message CancelFlightInfoResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CancelFlightInfoResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified CancelFlightInfoResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.CancelFlightInfoResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {arrow.flight.protocol.ICancelFlightInfoResult} message CancelFlightInfoResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CancelFlightInfoResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CancelFlightInfoResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CancelFlightInfoResult} CancelFlightInfoResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CancelFlightInfoResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.CancelFlightInfoResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.status = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CancelFlightInfoResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CancelFlightInfoResult} CancelFlightInfoResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CancelFlightInfoResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CancelFlightInfoResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CancelFlightInfoResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a CancelFlightInfoResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.CancelFlightInfoResult} CancelFlightInfoResult
                 */
                CancelFlightInfoResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.CancelFlightInfoResult)
                        return object;
                    var message = new $root.arrow.flight.protocol.CancelFlightInfoResult();
                    switch (object.status) {
                    default:
                        if (typeof object.status === "number") {
                            message.status = object.status;
                            break;
                        }
                        break;
                    case "CANCEL_STATUS_UNSPECIFIED":
                    case 0:
                        message.status = 0;
                        break;
                    case "CANCEL_STATUS_CANCELLED":
                    case 1:
                        message.status = 1;
                        break;
                    case "CANCEL_STATUS_CANCELLING":
                    case 2:
                        message.status = 2;
                        break;
                    case "CANCEL_STATUS_NOT_CANCELLABLE":
                    case 3:
                        message.status = 3;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CancelFlightInfoResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {arrow.flight.protocol.CancelFlightInfoResult} message CancelFlightInfoResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CancelFlightInfoResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.status = options.enums === String ? "CANCEL_STATUS_UNSPECIFIED" : 0;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.arrow.flight.protocol.CancelStatus[message.status] === undefined ? message.status : $root.arrow.flight.protocol.CancelStatus[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this CancelFlightInfoResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CancelFlightInfoResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CancelFlightInfoResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.CancelFlightInfoResult
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CancelFlightInfoResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.CancelFlightInfoResult";
                };

                return CancelFlightInfoResult;
            })();

            protocol.Ticket = (function() {

                /**
                 * Properties of a Ticket.
                 * @memberof arrow.flight.protocol
                 * @interface ITicket
                 * @property {Uint8Array|null} [ticket] Ticket ticket
                 */

                /**
                 * Constructs a new Ticket.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a Ticket.
                 * @implements ITicket
                 * @constructor
                 * @param {arrow.flight.protocol.ITicket=} [properties] Properties to set
                 */
                function Ticket(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Ticket ticket.
                 * @member {Uint8Array} ticket
                 * @memberof arrow.flight.protocol.Ticket
                 * @instance
                 */
                Ticket.prototype.ticket = $util.newBuffer([]);

                /**
                 * Creates a new Ticket instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {arrow.flight.protocol.ITicket=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Ticket} Ticket instance
                 */
                Ticket.create = function create(properties) {
                    return new Ticket(properties);
                };

                /**
                 * Encodes the specified Ticket message. Does not implicitly {@link arrow.flight.protocol.Ticket.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {arrow.flight.protocol.ITicket} message Ticket message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ticket.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ticket);
                    return writer;
                };

                /**
                 * Encodes the specified Ticket message, length delimited. Does not implicitly {@link arrow.flight.protocol.Ticket.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {arrow.flight.protocol.ITicket} message Ticket message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Ticket.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Ticket message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Ticket} Ticket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ticket.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.Ticket();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.ticket = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Ticket message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Ticket} Ticket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Ticket.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Ticket message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Ticket.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ticket != null && message.hasOwnProperty("ticket"))
                        if (!(message.ticket && typeof message.ticket.length === "number" || $util.isString(message.ticket)))
                            return "ticket: buffer expected";
                    return null;
                };

                /**
                 * Creates a Ticket message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Ticket} Ticket
                 */
                Ticket.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.Ticket)
                        return object;
                    var message = new $root.arrow.flight.protocol.Ticket();
                    if (object.ticket != null)
                        if (typeof object.ticket === "string")
                            $util.base64.decode(object.ticket, message.ticket = $util.newBuffer($util.base64.length(object.ticket)), 0);
                        else if (object.ticket.length >= 0)
                            message.ticket = object.ticket;
                    return message;
                };

                /**
                 * Creates a plain object from a Ticket message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {arrow.flight.protocol.Ticket} message Ticket
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Ticket.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.ticket = "";
                        else {
                            object.ticket = [];
                            if (options.bytes !== Array)
                                object.ticket = $util.newBuffer(object.ticket);
                        }
                    if (message.ticket != null && message.hasOwnProperty("ticket"))
                        object.ticket = options.bytes === String ? $util.base64.encode(message.ticket, 0, message.ticket.length) : options.bytes === Array ? Array.prototype.slice.call(message.ticket) : message.ticket;
                    return object;
                };

                /**
                 * Converts this Ticket to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Ticket
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Ticket.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Ticket
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Ticket
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Ticket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.Ticket";
                };

                return Ticket;
            })();

            protocol.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof arrow.flight.protocol
                 * @interface ILocation
                 * @property {string|null} [uri] Location uri
                 */

                /**
                 * Constructs a new Location.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {arrow.flight.protocol.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location uri.
                 * @member {string} uri
                 * @memberof arrow.flight.protocol.Location
                 * @instance
                 */
                Location.prototype.uri = "";

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {arrow.flight.protocol.ILocation=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link arrow.flight.protocol.Location.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {arrow.flight.protocol.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link arrow.flight.protocol.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {arrow.flight.protocol.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.Location();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.uri = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uri != null && message.hasOwnProperty("uri"))
                        if (!$util.isString(message.uri))
                            return "uri: string expected";
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.Location)
                        return object;
                    var message = new $root.arrow.flight.protocol.Location();
                    if (object.uri != null)
                        message.uri = String(object.uri);
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {arrow.flight.protocol.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.uri = "";
                    if (message.uri != null && message.hasOwnProperty("uri"))
                        object.uri = message.uri;
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Location
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.Location
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.Location";
                };

                return Location;
            })();

            protocol.FlightEndpoint = (function() {

                /**
                 * Properties of a FlightEndpoint.
                 * @memberof arrow.flight.protocol
                 * @interface IFlightEndpoint
                 * @property {arrow.flight.protocol.ITicket|null} [ticket] FlightEndpoint ticket
                 * @property {Array.<arrow.flight.protocol.ILocation>|null} [location] FlightEndpoint location
                 * @property {google.protobuf.ITimestamp|null} [expirationTime] FlightEndpoint expirationTime
                 * @property {Uint8Array|null} [appMetadata] FlightEndpoint appMetadata
                 */

                /**
                 * Constructs a new FlightEndpoint.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a FlightEndpoint.
                 * @implements IFlightEndpoint
                 * @constructor
                 * @param {arrow.flight.protocol.IFlightEndpoint=} [properties] Properties to set
                 */
                function FlightEndpoint(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FlightEndpoint ticket.
                 * @member {arrow.flight.protocol.ITicket|null|undefined} ticket
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @instance
                 */
                FlightEndpoint.prototype.ticket = null;

                /**
                 * FlightEndpoint location.
                 * @member {Array.<arrow.flight.protocol.ILocation>} location
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @instance
                 */
                FlightEndpoint.prototype.location = $util.emptyArray;

                /**
                 * FlightEndpoint expirationTime.
                 * @member {google.protobuf.ITimestamp|null|undefined} expirationTime
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @instance
                 */
                FlightEndpoint.prototype.expirationTime = null;

                /**
                 * FlightEndpoint appMetadata.
                 * @member {Uint8Array} appMetadata
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @instance
                 */
                FlightEndpoint.prototype.appMetadata = $util.newBuffer([]);

                /**
                 * Creates a new FlightEndpoint instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {arrow.flight.protocol.IFlightEndpoint=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.FlightEndpoint} FlightEndpoint instance
                 */
                FlightEndpoint.create = function create(properties) {
                    return new FlightEndpoint(properties);
                };

                /**
                 * Encodes the specified FlightEndpoint message. Does not implicitly {@link arrow.flight.protocol.FlightEndpoint.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {arrow.flight.protocol.IFlightEndpoint} message FlightEndpoint message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightEndpoint.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                        $root.arrow.flight.protocol.Ticket.encode(message.ticket, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.arrow.flight.protocol.Location.encode(message.location[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.expirationTime != null && Object.hasOwnProperty.call(message, "expirationTime"))
                        $root.google.protobuf.Timestamp.encode(message.expirationTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.appMetadata != null && Object.hasOwnProperty.call(message, "appMetadata"))
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.appMetadata);
                    return writer;
                };

                /**
                 * Encodes the specified FlightEndpoint message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightEndpoint.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {arrow.flight.protocol.IFlightEndpoint} message FlightEndpoint message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FlightEndpoint message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightEndpoint} FlightEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightEndpoint.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.FlightEndpoint();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.ticket = $root.arrow.flight.protocol.Ticket.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                if (!(message.location && message.location.length))
                                    message.location = [];
                                message.location.push($root.arrow.flight.protocol.Location.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.expirationTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.appMetadata = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FlightEndpoint message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightEndpoint} FlightEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightEndpoint.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FlightEndpoint message.
                 * @function verify
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FlightEndpoint.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ticket != null && message.hasOwnProperty("ticket")) {
                        var error = $root.arrow.flight.protocol.Ticket.verify(message.ticket);
                        if (error)
                            return "ticket." + error;
                    }
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.arrow.flight.protocol.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    if (message.expirationTime != null && message.hasOwnProperty("expirationTime")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.expirationTime);
                        if (error)
                            return "expirationTime." + error;
                    }
                    if (message.appMetadata != null && message.hasOwnProperty("appMetadata"))
                        if (!(message.appMetadata && typeof message.appMetadata.length === "number" || $util.isString(message.appMetadata)))
                            return "appMetadata: buffer expected";
                    return null;
                };

                /**
                 * Creates a FlightEndpoint message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.FlightEndpoint} FlightEndpoint
                 */
                FlightEndpoint.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.FlightEndpoint)
                        return object;
                    var message = new $root.arrow.flight.protocol.FlightEndpoint();
                    if (object.ticket != null) {
                        if (typeof object.ticket !== "object")
                            throw TypeError(".arrow.flight.protocol.FlightEndpoint.ticket: object expected");
                        message.ticket = $root.arrow.flight.protocol.Ticket.fromObject(object.ticket);
                    }
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".arrow.flight.protocol.FlightEndpoint.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".arrow.flight.protocol.FlightEndpoint.location: object expected");
                            message.location[i] = $root.arrow.flight.protocol.Location.fromObject(object.location[i]);
                        }
                    }
                    if (object.expirationTime != null) {
                        if (typeof object.expirationTime !== "object")
                            throw TypeError(".arrow.flight.protocol.FlightEndpoint.expirationTime: object expected");
                        message.expirationTime = $root.google.protobuf.Timestamp.fromObject(object.expirationTime);
                    }
                    if (object.appMetadata != null)
                        if (typeof object.appMetadata === "string")
                            $util.base64.decode(object.appMetadata, message.appMetadata = $util.newBuffer($util.base64.length(object.appMetadata)), 0);
                        else if (object.appMetadata.length >= 0)
                            message.appMetadata = object.appMetadata;
                    return message;
                };

                /**
                 * Creates a plain object from a FlightEndpoint message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {arrow.flight.protocol.FlightEndpoint} message FlightEndpoint
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FlightEndpoint.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (options.defaults) {
                        object.ticket = null;
                        object.expirationTime = null;
                        if (options.bytes === String)
                            object.appMetadata = "";
                        else {
                            object.appMetadata = [];
                            if (options.bytes !== Array)
                                object.appMetadata = $util.newBuffer(object.appMetadata);
                        }
                    }
                    if (message.ticket != null && message.hasOwnProperty("ticket"))
                        object.ticket = $root.arrow.flight.protocol.Ticket.toObject(message.ticket, options);
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.arrow.flight.protocol.Location.toObject(message.location[j], options);
                    }
                    if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
                        object.expirationTime = $root.google.protobuf.Timestamp.toObject(message.expirationTime, options);
                    if (message.appMetadata != null && message.hasOwnProperty("appMetadata"))
                        object.appMetadata = options.bytes === String ? $util.base64.encode(message.appMetadata, 0, message.appMetadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.appMetadata) : message.appMetadata;
                    return object;
                };

                /**
                 * Converts this FlightEndpoint to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FlightEndpoint.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for FlightEndpoint
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.FlightEndpoint
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FlightEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.FlightEndpoint";
                };

                return FlightEndpoint;
            })();

            protocol.RenewFlightEndpointRequest = (function() {

                /**
                 * Properties of a RenewFlightEndpointRequest.
                 * @memberof arrow.flight.protocol
                 * @interface IRenewFlightEndpointRequest
                 * @property {arrow.flight.protocol.IFlightEndpoint|null} [endpoint] RenewFlightEndpointRequest endpoint
                 */

                /**
                 * Constructs a new RenewFlightEndpointRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a RenewFlightEndpointRequest.
                 * @implements IRenewFlightEndpointRequest
                 * @constructor
                 * @param {arrow.flight.protocol.IRenewFlightEndpointRequest=} [properties] Properties to set
                 */
                function RenewFlightEndpointRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RenewFlightEndpointRequest endpoint.
                 * @member {arrow.flight.protocol.IFlightEndpoint|null|undefined} endpoint
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @instance
                 */
                RenewFlightEndpointRequest.prototype.endpoint = null;

                /**
                 * Creates a new RenewFlightEndpointRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {arrow.flight.protocol.IRenewFlightEndpointRequest=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.RenewFlightEndpointRequest} RenewFlightEndpointRequest instance
                 */
                RenewFlightEndpointRequest.create = function create(properties) {
                    return new RenewFlightEndpointRequest(properties);
                };

                /**
                 * Encodes the specified RenewFlightEndpointRequest message. Does not implicitly {@link arrow.flight.protocol.RenewFlightEndpointRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {arrow.flight.protocol.IRenewFlightEndpointRequest} message RenewFlightEndpointRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RenewFlightEndpointRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                        $root.arrow.flight.protocol.FlightEndpoint.encode(message.endpoint, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RenewFlightEndpointRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.RenewFlightEndpointRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {arrow.flight.protocol.IRenewFlightEndpointRequest} message RenewFlightEndpointRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RenewFlightEndpointRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RenewFlightEndpointRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.RenewFlightEndpointRequest} RenewFlightEndpointRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RenewFlightEndpointRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.RenewFlightEndpointRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.endpoint = $root.arrow.flight.protocol.FlightEndpoint.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RenewFlightEndpointRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.RenewFlightEndpointRequest} RenewFlightEndpointRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RenewFlightEndpointRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RenewFlightEndpointRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RenewFlightEndpointRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.endpoint != null && message.hasOwnProperty("endpoint")) {
                        var error = $root.arrow.flight.protocol.FlightEndpoint.verify(message.endpoint);
                        if (error)
                            return "endpoint." + error;
                    }
                    return null;
                };

                /**
                 * Creates a RenewFlightEndpointRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.RenewFlightEndpointRequest} RenewFlightEndpointRequest
                 */
                RenewFlightEndpointRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.RenewFlightEndpointRequest)
                        return object;
                    var message = new $root.arrow.flight.protocol.RenewFlightEndpointRequest();
                    if (object.endpoint != null) {
                        if (typeof object.endpoint !== "object")
                            throw TypeError(".arrow.flight.protocol.RenewFlightEndpointRequest.endpoint: object expected");
                        message.endpoint = $root.arrow.flight.protocol.FlightEndpoint.fromObject(object.endpoint);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RenewFlightEndpointRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {arrow.flight.protocol.RenewFlightEndpointRequest} message RenewFlightEndpointRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RenewFlightEndpointRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.endpoint = null;
                    if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                        object.endpoint = $root.arrow.flight.protocol.FlightEndpoint.toObject(message.endpoint, options);
                    return object;
                };

                /**
                 * Converts this RenewFlightEndpointRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RenewFlightEndpointRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for RenewFlightEndpointRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.RenewFlightEndpointRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RenewFlightEndpointRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.RenewFlightEndpointRequest";
                };

                return RenewFlightEndpointRequest;
            })();

            protocol.FlightData = (function() {

                /**
                 * Properties of a FlightData.
                 * @memberof arrow.flight.protocol
                 * @interface IFlightData
                 * @property {arrow.flight.protocol.IFlightDescriptor|null} [flightDescriptor] FlightData flightDescriptor
                 * @property {Uint8Array|null} [dataHeader] FlightData dataHeader
                 * @property {Uint8Array|null} [appMetadata] FlightData appMetadata
                 * @property {Uint8Array|null} [dataBody] FlightData dataBody
                 */

                /**
                 * Constructs a new FlightData.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a FlightData.
                 * @implements IFlightData
                 * @constructor
                 * @param {arrow.flight.protocol.IFlightData=} [properties] Properties to set
                 */
                function FlightData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FlightData flightDescriptor.
                 * @member {arrow.flight.protocol.IFlightDescriptor|null|undefined} flightDescriptor
                 * @memberof arrow.flight.protocol.FlightData
                 * @instance
                 */
                FlightData.prototype.flightDescriptor = null;

                /**
                 * FlightData dataHeader.
                 * @member {Uint8Array} dataHeader
                 * @memberof arrow.flight.protocol.FlightData
                 * @instance
                 */
                FlightData.prototype.dataHeader = $util.newBuffer([]);

                /**
                 * FlightData appMetadata.
                 * @member {Uint8Array} appMetadata
                 * @memberof arrow.flight.protocol.FlightData
                 * @instance
                 */
                FlightData.prototype.appMetadata = $util.newBuffer([]);

                /**
                 * FlightData dataBody.
                 * @member {Uint8Array} dataBody
                 * @memberof arrow.flight.protocol.FlightData
                 * @instance
                 */
                FlightData.prototype.dataBody = $util.newBuffer([]);

                /**
                 * Creates a new FlightData instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {arrow.flight.protocol.IFlightData=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.FlightData} FlightData instance
                 */
                FlightData.create = function create(properties) {
                    return new FlightData(properties);
                };

                /**
                 * Encodes the specified FlightData message. Does not implicitly {@link arrow.flight.protocol.FlightData.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {arrow.flight.protocol.IFlightData} message FlightData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightData.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.flightDescriptor != null && Object.hasOwnProperty.call(message, "flightDescriptor"))
                        $root.arrow.flight.protocol.FlightDescriptor.encode(message.flightDescriptor, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.dataHeader != null && Object.hasOwnProperty.call(message, "dataHeader"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.dataHeader);
                    if (message.appMetadata != null && Object.hasOwnProperty.call(message, "appMetadata"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.appMetadata);
                    if (message.dataBody != null && Object.hasOwnProperty.call(message, "dataBody"))
                        writer.uint32(/* id 1000, wireType 2 =*/8002).bytes(message.dataBody);
                    return writer;
                };

                /**
                 * Encodes the specified FlightData message, length delimited. Does not implicitly {@link arrow.flight.protocol.FlightData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {arrow.flight.protocol.IFlightData} message FlightData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FlightData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FlightData message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.FlightData} FlightData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightData.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.FlightData();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.dataHeader = reader.bytes();
                                break;
                            }
                        case 3: {
                                message.appMetadata = reader.bytes();
                                break;
                            }
                        case 1000: {
                                message.dataBody = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FlightData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.FlightData} FlightData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FlightData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FlightData message.
                 * @function verify
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FlightData.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.flightDescriptor != null && message.hasOwnProperty("flightDescriptor")) {
                        var error = $root.arrow.flight.protocol.FlightDescriptor.verify(message.flightDescriptor);
                        if (error)
                            return "flightDescriptor." + error;
                    }
                    if (message.dataHeader != null && message.hasOwnProperty("dataHeader"))
                        if (!(message.dataHeader && typeof message.dataHeader.length === "number" || $util.isString(message.dataHeader)))
                            return "dataHeader: buffer expected";
                    if (message.appMetadata != null && message.hasOwnProperty("appMetadata"))
                        if (!(message.appMetadata && typeof message.appMetadata.length === "number" || $util.isString(message.appMetadata)))
                            return "appMetadata: buffer expected";
                    if (message.dataBody != null && message.hasOwnProperty("dataBody"))
                        if (!(message.dataBody && typeof message.dataBody.length === "number" || $util.isString(message.dataBody)))
                            return "dataBody: buffer expected";
                    return null;
                };

                /**
                 * Creates a FlightData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.FlightData} FlightData
                 */
                FlightData.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.FlightData)
                        return object;
                    var message = new $root.arrow.flight.protocol.FlightData();
                    if (object.flightDescriptor != null) {
                        if (typeof object.flightDescriptor !== "object")
                            throw TypeError(".arrow.flight.protocol.FlightData.flightDescriptor: object expected");
                        message.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.fromObject(object.flightDescriptor);
                    }
                    if (object.dataHeader != null)
                        if (typeof object.dataHeader === "string")
                            $util.base64.decode(object.dataHeader, message.dataHeader = $util.newBuffer($util.base64.length(object.dataHeader)), 0);
                        else if (object.dataHeader.length >= 0)
                            message.dataHeader = object.dataHeader;
                    if (object.appMetadata != null)
                        if (typeof object.appMetadata === "string")
                            $util.base64.decode(object.appMetadata, message.appMetadata = $util.newBuffer($util.base64.length(object.appMetadata)), 0);
                        else if (object.appMetadata.length >= 0)
                            message.appMetadata = object.appMetadata;
                    if (object.dataBody != null)
                        if (typeof object.dataBody === "string")
                            $util.base64.decode(object.dataBody, message.dataBody = $util.newBuffer($util.base64.length(object.dataBody)), 0);
                        else if (object.dataBody.length >= 0)
                            message.dataBody = object.dataBody;
                    return message;
                };

                /**
                 * Creates a plain object from a FlightData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {arrow.flight.protocol.FlightData} message FlightData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FlightData.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.flightDescriptor = null;
                        if (options.bytes === String)
                            object.dataHeader = "";
                        else {
                            object.dataHeader = [];
                            if (options.bytes !== Array)
                                object.dataHeader = $util.newBuffer(object.dataHeader);
                        }
                        if (options.bytes === String)
                            object.appMetadata = "";
                        else {
                            object.appMetadata = [];
                            if (options.bytes !== Array)
                                object.appMetadata = $util.newBuffer(object.appMetadata);
                        }
                        if (options.bytes === String)
                            object.dataBody = "";
                        else {
                            object.dataBody = [];
                            if (options.bytes !== Array)
                                object.dataBody = $util.newBuffer(object.dataBody);
                        }
                    }
                    if (message.flightDescriptor != null && message.hasOwnProperty("flightDescriptor"))
                        object.flightDescriptor = $root.arrow.flight.protocol.FlightDescriptor.toObject(message.flightDescriptor, options);
                    if (message.dataHeader != null && message.hasOwnProperty("dataHeader"))
                        object.dataHeader = options.bytes === String ? $util.base64.encode(message.dataHeader, 0, message.dataHeader.length) : options.bytes === Array ? Array.prototype.slice.call(message.dataHeader) : message.dataHeader;
                    if (message.appMetadata != null && message.hasOwnProperty("appMetadata"))
                        object.appMetadata = options.bytes === String ? $util.base64.encode(message.appMetadata, 0, message.appMetadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.appMetadata) : message.appMetadata;
                    if (message.dataBody != null && message.hasOwnProperty("dataBody"))
                        object.dataBody = options.bytes === String ? $util.base64.encode(message.dataBody, 0, message.dataBody.length) : options.bytes === Array ? Array.prototype.slice.call(message.dataBody) : message.dataBody;
                    return object;
                };

                /**
                 * Converts this FlightData to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.FlightData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FlightData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for FlightData
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.FlightData
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FlightData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.FlightData";
                };

                return FlightData;
            })();

            protocol.PutResult = (function() {

                /**
                 * Properties of a PutResult.
                 * @memberof arrow.flight.protocol
                 * @interface IPutResult
                 * @property {Uint8Array|null} [appMetadata] PutResult appMetadata
                 */

                /**
                 * Constructs a new PutResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc The response message associated with the submission of a DoPut.
                 * @implements IPutResult
                 * @constructor
                 * @param {arrow.flight.protocol.IPutResult=} [properties] Properties to set
                 */
                function PutResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PutResult appMetadata.
                 * @member {Uint8Array} appMetadata
                 * @memberof arrow.flight.protocol.PutResult
                 * @instance
                 */
                PutResult.prototype.appMetadata = $util.newBuffer([]);

                /**
                 * Creates a new PutResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {arrow.flight.protocol.IPutResult=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.PutResult} PutResult instance
                 */
                PutResult.create = function create(properties) {
                    return new PutResult(properties);
                };

                /**
                 * Encodes the specified PutResult message. Does not implicitly {@link arrow.flight.protocol.PutResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {arrow.flight.protocol.IPutResult} message PutResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PutResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appMetadata != null && Object.hasOwnProperty.call(message, "appMetadata"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.appMetadata);
                    return writer;
                };

                /**
                 * Encodes the specified PutResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.PutResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {arrow.flight.protocol.IPutResult} message PutResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PutResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PutResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.PutResult} PutResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PutResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.PutResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.appMetadata = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PutResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.PutResult} PutResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PutResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PutResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PutResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.appMetadata != null && message.hasOwnProperty("appMetadata"))
                        if (!(message.appMetadata && typeof message.appMetadata.length === "number" || $util.isString(message.appMetadata)))
                            return "appMetadata: buffer expected";
                    return null;
                };

                /**
                 * Creates a PutResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.PutResult} PutResult
                 */
                PutResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.PutResult)
                        return object;
                    var message = new $root.arrow.flight.protocol.PutResult();
                    if (object.appMetadata != null)
                        if (typeof object.appMetadata === "string")
                            $util.base64.decode(object.appMetadata, message.appMetadata = $util.newBuffer($util.base64.length(object.appMetadata)), 0);
                        else if (object.appMetadata.length >= 0)
                            message.appMetadata = object.appMetadata;
                    return message;
                };

                /**
                 * Creates a plain object from a PutResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {arrow.flight.protocol.PutResult} message PutResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PutResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.appMetadata = "";
                        else {
                            object.appMetadata = [];
                            if (options.bytes !== Array)
                                object.appMetadata = $util.newBuffer(object.appMetadata);
                        }
                    if (message.appMetadata != null && message.hasOwnProperty("appMetadata"))
                        object.appMetadata = options.bytes === String ? $util.base64.encode(message.appMetadata, 0, message.appMetadata.length) : options.bytes === Array ? Array.prototype.slice.call(message.appMetadata) : message.appMetadata;
                    return object;
                };

                /**
                 * Converts this PutResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.PutResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PutResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PutResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.PutResult
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PutResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.PutResult";
                };

                return PutResult;
            })();

            protocol.SessionOptionValue = (function() {

                /**
                 * Properties of a SessionOptionValue.
                 * @memberof arrow.flight.protocol
                 * @interface ISessionOptionValue
                 * @property {string|null} [stringValue] SessionOptionValue stringValue
                 * @property {boolean|null} [boolValue] SessionOptionValue boolValue
                 * @property {number|Long|null} [int64Value] SessionOptionValue int64Value
                 * @property {number|null} [doubleValue] SessionOptionValue doubleValue
                 * @property {arrow.flight.protocol.SessionOptionValue.IStringListValue|null} [stringListValue] SessionOptionValue stringListValue
                 */

                /**
                 * Constructs a new SessionOptionValue.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a SessionOptionValue.
                 * @implements ISessionOptionValue
                 * @constructor
                 * @param {arrow.flight.protocol.ISessionOptionValue=} [properties] Properties to set
                 */
                function SessionOptionValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SessionOptionValue stringValue.
                 * @member {string|null|undefined} stringValue
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                SessionOptionValue.prototype.stringValue = null;

                /**
                 * SessionOptionValue boolValue.
                 * @member {boolean|null|undefined} boolValue
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                SessionOptionValue.prototype.boolValue = null;

                /**
                 * SessionOptionValue int64Value.
                 * @member {number|Long|null|undefined} int64Value
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                SessionOptionValue.prototype.int64Value = null;

                /**
                 * SessionOptionValue doubleValue.
                 * @member {number|null|undefined} doubleValue
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                SessionOptionValue.prototype.doubleValue = null;

                /**
                 * SessionOptionValue stringListValue.
                 * @member {arrow.flight.protocol.SessionOptionValue.IStringListValue|null|undefined} stringListValue
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                SessionOptionValue.prototype.stringListValue = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * SessionOptionValue optionValue.
                 * @member {"stringValue"|"boolValue"|"int64Value"|"doubleValue"|"stringListValue"|undefined} optionValue
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 */
                Object.defineProperty(SessionOptionValue.prototype, "optionValue", {
                    get: $util.oneOfGetter($oneOfFields = ["stringValue", "boolValue", "int64Value", "doubleValue", "stringListValue"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new SessionOptionValue instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {arrow.flight.protocol.ISessionOptionValue=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.SessionOptionValue} SessionOptionValue instance
                 */
                SessionOptionValue.create = function create(properties) {
                    return new SessionOptionValue(properties);
                };

                /**
                 * Encodes the specified SessionOptionValue message. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {arrow.flight.protocol.ISessionOptionValue} message SessionOptionValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SessionOptionValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringValue);
                    if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.boolValue);
                    if (message.int64Value != null && Object.hasOwnProperty.call(message, "int64Value"))
                        writer.uint32(/* id 3, wireType 1 =*/25).sfixed64(message.int64Value);
                    if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                        writer.uint32(/* id 4, wireType 1 =*/33).double(message.doubleValue);
                    if (message.stringListValue != null && Object.hasOwnProperty.call(message, "stringListValue"))
                        $root.arrow.flight.protocol.SessionOptionValue.StringListValue.encode(message.stringListValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SessionOptionValue message, length delimited. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {arrow.flight.protocol.ISessionOptionValue} message SessionOptionValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SessionOptionValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SessionOptionValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SessionOptionValue} SessionOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SessionOptionValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.SessionOptionValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.stringValue = reader.string();
                                break;
                            }
                        case 2: {
                                message.boolValue = reader.bool();
                                break;
                            }
                        case 3: {
                                message.int64Value = reader.sfixed64();
                                break;
                            }
                        case 4: {
                                message.doubleValue = reader.double();
                                break;
                            }
                        case 5: {
                                message.stringListValue = $root.arrow.flight.protocol.SessionOptionValue.StringListValue.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SessionOptionValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SessionOptionValue} SessionOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SessionOptionValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SessionOptionValue message.
                 * @function verify
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SessionOptionValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                        properties.optionValue = 1;
                        if (!$util.isString(message.stringValue))
                            return "stringValue: string expected";
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                        if (properties.optionValue === 1)
                            return "optionValue: multiple values";
                        properties.optionValue = 1;
                        if (typeof message.boolValue !== "boolean")
                            return "boolValue: boolean expected";
                    }
                    if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                        if (properties.optionValue === 1)
                            return "optionValue: multiple values";
                        properties.optionValue = 1;
                        if (!$util.isInteger(message.int64Value) && !(message.int64Value && $util.isInteger(message.int64Value.low) && $util.isInteger(message.int64Value.high)))
                            return "int64Value: integer|Long expected";
                    }
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                        if (properties.optionValue === 1)
                            return "optionValue: multiple values";
                        properties.optionValue = 1;
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    }
                    if (message.stringListValue != null && message.hasOwnProperty("stringListValue")) {
                        if (properties.optionValue === 1)
                            return "optionValue: multiple values";
                        properties.optionValue = 1;
                        {
                            var error = $root.arrow.flight.protocol.SessionOptionValue.StringListValue.verify(message.stringListValue);
                            if (error)
                                return "stringListValue." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SessionOptionValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.SessionOptionValue} SessionOptionValue
                 */
                SessionOptionValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.SessionOptionValue)
                        return object;
                    var message = new $root.arrow.flight.protocol.SessionOptionValue();
                    if (object.stringValue != null)
                        message.stringValue = String(object.stringValue);
                    if (object.boolValue != null)
                        message.boolValue = Boolean(object.boolValue);
                    if (object.int64Value != null)
                        if ($util.Long)
                            (message.int64Value = $util.Long.fromValue(object.int64Value)).unsigned = false;
                        else if (typeof object.int64Value === "string")
                            message.int64Value = parseInt(object.int64Value, 10);
                        else if (typeof object.int64Value === "number")
                            message.int64Value = object.int64Value;
                        else if (typeof object.int64Value === "object")
                            message.int64Value = new $util.LongBits(object.int64Value.low >>> 0, object.int64Value.high >>> 0).toNumber();
                    if (object.doubleValue != null)
                        message.doubleValue = Number(object.doubleValue);
                    if (object.stringListValue != null) {
                        if (typeof object.stringListValue !== "object")
                            throw TypeError(".arrow.flight.protocol.SessionOptionValue.stringListValue: object expected");
                        message.stringListValue = $root.arrow.flight.protocol.SessionOptionValue.StringListValue.fromObject(object.stringListValue);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SessionOptionValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {arrow.flight.protocol.SessionOptionValue} message SessionOptionValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SessionOptionValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                        object.stringValue = message.stringValue;
                        if (options.oneofs)
                            object.optionValue = "stringValue";
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                        object.boolValue = message.boolValue;
                        if (options.oneofs)
                            object.optionValue = "boolValue";
                    }
                    if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                        if (typeof message.int64Value === "number")
                            object.int64Value = options.longs === String ? String(message.int64Value) : message.int64Value;
                        else
                            object.int64Value = options.longs === String ? $util.Long.prototype.toString.call(message.int64Value) : options.longs === Number ? new $util.LongBits(message.int64Value.low >>> 0, message.int64Value.high >>> 0).toNumber() : message.int64Value;
                        if (options.oneofs)
                            object.optionValue = "int64Value";
                    }
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                        object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                        if (options.oneofs)
                            object.optionValue = "doubleValue";
                    }
                    if (message.stringListValue != null && message.hasOwnProperty("stringListValue")) {
                        object.stringListValue = $root.arrow.flight.protocol.SessionOptionValue.StringListValue.toObject(message.stringListValue, options);
                        if (options.oneofs)
                            object.optionValue = "stringListValue";
                    }
                    return object;
                };

                /**
                 * Converts this SessionOptionValue to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SessionOptionValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SessionOptionValue
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.SessionOptionValue
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SessionOptionValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.SessionOptionValue";
                };

                SessionOptionValue.StringListValue = (function() {

                    /**
                     * Properties of a StringListValue.
                     * @memberof arrow.flight.protocol.SessionOptionValue
                     * @interface IStringListValue
                     * @property {Array.<string>|null} [values] StringListValue values
                     */

                    /**
                     * Constructs a new StringListValue.
                     * @memberof arrow.flight.protocol.SessionOptionValue
                     * @classdesc Represents a StringListValue.
                     * @implements IStringListValue
                     * @constructor
                     * @param {arrow.flight.protocol.SessionOptionValue.IStringListValue=} [properties] Properties to set
                     */
                    function StringListValue(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * StringListValue values.
                     * @member {Array.<string>} values
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @instance
                     */
                    StringListValue.prototype.values = $util.emptyArray;

                    /**
                     * Creates a new StringListValue instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {arrow.flight.protocol.SessionOptionValue.IStringListValue=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.SessionOptionValue.StringListValue} StringListValue instance
                     */
                    StringListValue.create = function create(properties) {
                        return new StringListValue(properties);
                    };

                    /**
                     * Encodes the specified StringListValue message. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.StringListValue.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {arrow.flight.protocol.SessionOptionValue.IStringListValue} message StringListValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StringListValue.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.values != null && message.values.length)
                            for (var i = 0; i < message.values.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.values[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified StringListValue message, length delimited. Does not implicitly {@link arrow.flight.protocol.SessionOptionValue.StringListValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {arrow.flight.protocol.SessionOptionValue.IStringListValue} message StringListValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StringListValue.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a StringListValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.SessionOptionValue.StringListValue} StringListValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StringListValue.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.SessionOptionValue.StringListValue();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.values && message.values.length))
                                        message.values = [];
                                    message.values.push(reader.string());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a StringListValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.SessionOptionValue.StringListValue} StringListValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StringListValue.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a StringListValue message.
                     * @function verify
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StringListValue.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i)
                                if (!$util.isString(message.values[i]))
                                    return "values: string[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a StringListValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.SessionOptionValue.StringListValue} StringListValue
                     */
                    StringListValue.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.SessionOptionValue.StringListValue)
                            return object;
                        var message = new $root.arrow.flight.protocol.SessionOptionValue.StringListValue();
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".arrow.flight.protocol.SessionOptionValue.StringListValue.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i)
                                message.values[i] = String(object.values[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a StringListValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {arrow.flight.protocol.SessionOptionValue.StringListValue} message StringListValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StringListValue.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = message.values[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this StringListValue to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StringListValue.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for StringListValue
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.SessionOptionValue.StringListValue
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    StringListValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.SessionOptionValue.StringListValue";
                    };

                    return StringListValue;
                })();

                return SessionOptionValue;
            })();

            protocol.SetSessionOptionsRequest = (function() {

                /**
                 * Properties of a SetSessionOptionsRequest.
                 * @memberof arrow.flight.protocol
                 * @interface ISetSessionOptionsRequest
                 * @property {Object.<string,arrow.flight.protocol.ISessionOptionValue>|null} [sessionOptions] SetSessionOptionsRequest sessionOptions
                 */

                /**
                 * Constructs a new SetSessionOptionsRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a SetSessionOptionsRequest.
                 * @implements ISetSessionOptionsRequest
                 * @constructor
                 * @param {arrow.flight.protocol.ISetSessionOptionsRequest=} [properties] Properties to set
                 */
                function SetSessionOptionsRequest(properties) {
                    this.sessionOptions = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SetSessionOptionsRequest sessionOptions.
                 * @member {Object.<string,arrow.flight.protocol.ISessionOptionValue>} sessionOptions
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @instance
                 */
                SetSessionOptionsRequest.prototype.sessionOptions = $util.emptyObject;

                /**
                 * Creates a new SetSessionOptionsRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.ISetSessionOptionsRequest=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.SetSessionOptionsRequest} SetSessionOptionsRequest instance
                 */
                SetSessionOptionsRequest.create = function create(properties) {
                    return new SetSessionOptionsRequest(properties);
                };

                /**
                 * Encodes the specified SetSessionOptionsRequest message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.ISetSessionOptionsRequest} message SetSessionOptionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetSessionOptionsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sessionOptions != null && Object.hasOwnProperty.call(message, "sessionOptions"))
                        for (var keys = Object.keys(message.sessionOptions), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.arrow.flight.protocol.SessionOptionValue.encode(message.sessionOptions[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified SetSessionOptionsRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.ISetSessionOptionsRequest} message SetSessionOptionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetSessionOptionsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SetSessionOptionsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SetSessionOptionsRequest} SetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetSessionOptionsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.SetSessionOptionsRequest(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (message.sessionOptions === $util.emptyObject)
                                    message.sessionOptions = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = null;
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = $root.arrow.flight.protocol.SessionOptionValue.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.sessionOptions[key] = value;
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SetSessionOptionsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SetSessionOptionsRequest} SetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetSessionOptionsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SetSessionOptionsRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SetSessionOptionsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sessionOptions != null && message.hasOwnProperty("sessionOptions")) {
                        if (!$util.isObject(message.sessionOptions))
                            return "sessionOptions: object expected";
                        var key = Object.keys(message.sessionOptions);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.arrow.flight.protocol.SessionOptionValue.verify(message.sessionOptions[key[i]]);
                            if (error)
                                return "sessionOptions." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SetSessionOptionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.SetSessionOptionsRequest} SetSessionOptionsRequest
                 */
                SetSessionOptionsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.SetSessionOptionsRequest)
                        return object;
                    var message = new $root.arrow.flight.protocol.SetSessionOptionsRequest();
                    if (object.sessionOptions) {
                        if (typeof object.sessionOptions !== "object")
                            throw TypeError(".arrow.flight.protocol.SetSessionOptionsRequest.sessionOptions: object expected");
                        message.sessionOptions = {};
                        for (var keys = Object.keys(object.sessionOptions), i = 0; i < keys.length; ++i) {
                            if (typeof object.sessionOptions[keys[i]] !== "object")
                                throw TypeError(".arrow.flight.protocol.SetSessionOptionsRequest.sessionOptions: object expected");
                            message.sessionOptions[keys[i]] = $root.arrow.flight.protocol.SessionOptionValue.fromObject(object.sessionOptions[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SetSessionOptionsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.SetSessionOptionsRequest} message SetSessionOptionsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SetSessionOptionsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.sessionOptions = {};
                    var keys2;
                    if (message.sessionOptions && (keys2 = Object.keys(message.sessionOptions)).length) {
                        object.sessionOptions = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.sessionOptions[keys2[j]] = $root.arrow.flight.protocol.SessionOptionValue.toObject(message.sessionOptions[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this SetSessionOptionsRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SetSessionOptionsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SetSessionOptionsRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.SetSessionOptionsRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SetSessionOptionsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.SetSessionOptionsRequest";
                };

                return SetSessionOptionsRequest;
            })();

            protocol.SetSessionOptionsResult = (function() {

                /**
                 * Properties of a SetSessionOptionsResult.
                 * @memberof arrow.flight.protocol
                 * @interface ISetSessionOptionsResult
                 * @property {Object.<string,arrow.flight.protocol.SetSessionOptionsResult.IError>|null} [errors] SetSessionOptionsResult errors
                 */

                /**
                 * Constructs a new SetSessionOptionsResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a SetSessionOptionsResult.
                 * @implements ISetSessionOptionsResult
                 * @constructor
                 * @param {arrow.flight.protocol.ISetSessionOptionsResult=} [properties] Properties to set
                 */
                function SetSessionOptionsResult(properties) {
                    this.errors = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SetSessionOptionsResult errors.
                 * @member {Object.<string,arrow.flight.protocol.SetSessionOptionsResult.IError>} errors
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @instance
                 */
                SetSessionOptionsResult.prototype.errors = $util.emptyObject;

                /**
                 * Creates a new SetSessionOptionsResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.ISetSessionOptionsResult=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.SetSessionOptionsResult} SetSessionOptionsResult instance
                 */
                SetSessionOptionsResult.create = function create(properties) {
                    return new SetSessionOptionsResult(properties);
                };

                /**
                 * Encodes the specified SetSessionOptionsResult message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.ISetSessionOptionsResult} message SetSessionOptionsResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetSessionOptionsResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.errors != null && Object.hasOwnProperty.call(message, "errors"))
                        for (var keys = Object.keys(message.errors), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.arrow.flight.protocol.SetSessionOptionsResult.Error.encode(message.errors[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified SetSessionOptionsResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.ISetSessionOptionsResult} message SetSessionOptionsResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SetSessionOptionsResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SetSessionOptionsResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.SetSessionOptionsResult} SetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetSessionOptionsResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.SetSessionOptionsResult(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (message.errors === $util.emptyObject)
                                    message.errors = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = null;
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = $root.arrow.flight.protocol.SetSessionOptionsResult.Error.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.errors[key] = value;
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SetSessionOptionsResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.SetSessionOptionsResult} SetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SetSessionOptionsResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SetSessionOptionsResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SetSessionOptionsResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.errors != null && message.hasOwnProperty("errors")) {
                        if (!$util.isObject(message.errors))
                            return "errors: object expected";
                        var key = Object.keys(message.errors);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.arrow.flight.protocol.SetSessionOptionsResult.Error.verify(message.errors[key[i]]);
                            if (error)
                                return "errors." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SetSessionOptionsResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.SetSessionOptionsResult} SetSessionOptionsResult
                 */
                SetSessionOptionsResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.SetSessionOptionsResult)
                        return object;
                    var message = new $root.arrow.flight.protocol.SetSessionOptionsResult();
                    if (object.errors) {
                        if (typeof object.errors !== "object")
                            throw TypeError(".arrow.flight.protocol.SetSessionOptionsResult.errors: object expected");
                        message.errors = {};
                        for (var keys = Object.keys(object.errors), i = 0; i < keys.length; ++i) {
                            if (typeof object.errors[keys[i]] !== "object")
                                throw TypeError(".arrow.flight.protocol.SetSessionOptionsResult.errors: object expected");
                            message.errors[keys[i]] = $root.arrow.flight.protocol.SetSessionOptionsResult.Error.fromObject(object.errors[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SetSessionOptionsResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.SetSessionOptionsResult} message SetSessionOptionsResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SetSessionOptionsResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.errors = {};
                    var keys2;
                    if (message.errors && (keys2 = Object.keys(message.errors)).length) {
                        object.errors = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.errors[keys2[j]] = $root.arrow.flight.protocol.SetSessionOptionsResult.Error.toObject(message.errors[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this SetSessionOptionsResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SetSessionOptionsResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SetSessionOptionsResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.SetSessionOptionsResult
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SetSessionOptionsResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.SetSessionOptionsResult";
                };

                /**
                 * ErrorValue enum.
                 * @name arrow.flight.protocol.SetSessionOptionsResult.ErrorValue
                 * @enum {number}
                 * @property {number} UNSPECIFIED=0 UNSPECIFIED value
                 * @property {number} INVALID_NAME=1 INVALID_NAME value
                 * @property {number} INVALID_VALUE=2 INVALID_VALUE value
                 * @property {number} ERROR=3 ERROR value
                 */
                SetSessionOptionsResult.ErrorValue = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNSPECIFIED"] = 0;
                    values[valuesById[1] = "INVALID_NAME"] = 1;
                    values[valuesById[2] = "INVALID_VALUE"] = 2;
                    values[valuesById[3] = "ERROR"] = 3;
                    return values;
                })();

                SetSessionOptionsResult.Error = (function() {

                    /**
                     * Properties of an Error.
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult
                     * @interface IError
                     * @property {arrow.flight.protocol.SetSessionOptionsResult.ErrorValue|null} [value] Error value
                     */

                    /**
                     * Constructs a new Error.
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult
                     * @classdesc Represents an Error.
                     * @implements IError
                     * @constructor
                     * @param {arrow.flight.protocol.SetSessionOptionsResult.IError=} [properties] Properties to set
                     */
                    function Error(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Error value.
                     * @member {arrow.flight.protocol.SetSessionOptionsResult.ErrorValue} value
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @instance
                     */
                    Error.prototype.value = 0;

                    /**
                     * Creates a new Error instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {arrow.flight.protocol.SetSessionOptionsResult.IError=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.SetSessionOptionsResult.Error} Error instance
                     */
                    Error.create = function create(properties) {
                        return new Error(properties);
                    };

                    /**
                     * Encodes the specified Error message. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.Error.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {arrow.flight.protocol.SetSessionOptionsResult.IError} message Error message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Error.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                        return writer;
                    };

                    /**
                     * Encodes the specified Error message, length delimited. Does not implicitly {@link arrow.flight.protocol.SetSessionOptionsResult.Error.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {arrow.flight.protocol.SetSessionOptionsResult.IError} message Error message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Error.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Error message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.SetSessionOptionsResult.Error} Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Error.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.SetSessionOptionsResult.Error();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.value = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Error message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.SetSessionOptionsResult.Error} Error
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Error.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Error message.
                     * @function verify
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Error.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value"))
                            switch (message.value) {
                            default:
                                return "value: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates an Error message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.SetSessionOptionsResult.Error} Error
                     */
                    Error.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.SetSessionOptionsResult.Error)
                            return object;
                        var message = new $root.arrow.flight.protocol.SetSessionOptionsResult.Error();
                        switch (object.value) {
                        default:
                            if (typeof object.value === "number") {
                                message.value = object.value;
                                break;
                            }
                            break;
                        case "UNSPECIFIED":
                        case 0:
                            message.value = 0;
                            break;
                        case "INVALID_NAME":
                        case 1:
                            message.value = 1;
                            break;
                        case "INVALID_VALUE":
                        case 2:
                            message.value = 2;
                            break;
                        case "ERROR":
                        case 3:
                            message.value = 3;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Error message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {arrow.flight.protocol.SetSessionOptionsResult.Error} message Error
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Error.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.value = options.enums === String ? "UNSPECIFIED" : 0;
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = options.enums === String ? $root.arrow.flight.protocol.SetSessionOptionsResult.ErrorValue[message.value] === undefined ? message.value : $root.arrow.flight.protocol.SetSessionOptionsResult.ErrorValue[message.value] : message.value;
                        return object;
                    };

                    /**
                     * Converts this Error to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Error.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Error
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.SetSessionOptionsResult.Error
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.SetSessionOptionsResult.Error";
                    };

                    return Error;
                })();

                return SetSessionOptionsResult;
            })();

            protocol.GetSessionOptionsRequest = (function() {

                /**
                 * Properties of a GetSessionOptionsRequest.
                 * @memberof arrow.flight.protocol
                 * @interface IGetSessionOptionsRequest
                 */

                /**
                 * Constructs a new GetSessionOptionsRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a GetSessionOptionsRequest.
                 * @implements IGetSessionOptionsRequest
                 * @constructor
                 * @param {arrow.flight.protocol.IGetSessionOptionsRequest=} [properties] Properties to set
                 */
                function GetSessionOptionsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new GetSessionOptionsRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.IGetSessionOptionsRequest=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.GetSessionOptionsRequest} GetSessionOptionsRequest instance
                 */
                GetSessionOptionsRequest.create = function create(properties) {
                    return new GetSessionOptionsRequest(properties);
                };

                /**
                 * Encodes the specified GetSessionOptionsRequest message. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.IGetSessionOptionsRequest} message GetSessionOptionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetSessionOptionsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified GetSessionOptionsRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.IGetSessionOptionsRequest} message GetSessionOptionsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetSessionOptionsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetSessionOptionsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.GetSessionOptionsRequest} GetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetSessionOptionsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.GetSessionOptionsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetSessionOptionsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.GetSessionOptionsRequest} GetSessionOptionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetSessionOptionsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetSessionOptionsRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetSessionOptionsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a GetSessionOptionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.GetSessionOptionsRequest} GetSessionOptionsRequest
                 */
                GetSessionOptionsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.GetSessionOptionsRequest)
                        return object;
                    return new $root.arrow.flight.protocol.GetSessionOptionsRequest();
                };

                /**
                 * Creates a plain object from a GetSessionOptionsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {arrow.flight.protocol.GetSessionOptionsRequest} message GetSessionOptionsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetSessionOptionsRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this GetSessionOptionsRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetSessionOptionsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetSessionOptionsRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.GetSessionOptionsRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetSessionOptionsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.GetSessionOptionsRequest";
                };

                return GetSessionOptionsRequest;
            })();

            protocol.GetSessionOptionsResult = (function() {

                /**
                 * Properties of a GetSessionOptionsResult.
                 * @memberof arrow.flight.protocol
                 * @interface IGetSessionOptionsResult
                 * @property {Object.<string,arrow.flight.protocol.ISessionOptionValue>|null} [sessionOptions] GetSessionOptionsResult sessionOptions
                 */

                /**
                 * Constructs a new GetSessionOptionsResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a GetSessionOptionsResult.
                 * @implements IGetSessionOptionsResult
                 * @constructor
                 * @param {arrow.flight.protocol.IGetSessionOptionsResult=} [properties] Properties to set
                 */
                function GetSessionOptionsResult(properties) {
                    this.sessionOptions = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * GetSessionOptionsResult sessionOptions.
                 * @member {Object.<string,arrow.flight.protocol.ISessionOptionValue>} sessionOptions
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @instance
                 */
                GetSessionOptionsResult.prototype.sessionOptions = $util.emptyObject;

                /**
                 * Creates a new GetSessionOptionsResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.IGetSessionOptionsResult=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.GetSessionOptionsResult} GetSessionOptionsResult instance
                 */
                GetSessionOptionsResult.create = function create(properties) {
                    return new GetSessionOptionsResult(properties);
                };

                /**
                 * Encodes the specified GetSessionOptionsResult message. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.IGetSessionOptionsResult} message GetSessionOptionsResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetSessionOptionsResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sessionOptions != null && Object.hasOwnProperty.call(message, "sessionOptions"))
                        for (var keys = Object.keys(message.sessionOptions), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.arrow.flight.protocol.SessionOptionValue.encode(message.sessionOptions[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified GetSessionOptionsResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.GetSessionOptionsResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.IGetSessionOptionsResult} message GetSessionOptionsResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetSessionOptionsResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a GetSessionOptionsResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.GetSessionOptionsResult} GetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetSessionOptionsResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.GetSessionOptionsResult(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (message.sessionOptions === $util.emptyObject)
                                    message.sessionOptions = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = null;
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = $root.arrow.flight.protocol.SessionOptionValue.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.sessionOptions[key] = value;
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a GetSessionOptionsResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.GetSessionOptionsResult} GetSessionOptionsResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetSessionOptionsResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a GetSessionOptionsResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetSessionOptionsResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sessionOptions != null && message.hasOwnProperty("sessionOptions")) {
                        if (!$util.isObject(message.sessionOptions))
                            return "sessionOptions: object expected";
                        var key = Object.keys(message.sessionOptions);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.arrow.flight.protocol.SessionOptionValue.verify(message.sessionOptions[key[i]]);
                            if (error)
                                return "sessionOptions." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a GetSessionOptionsResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.GetSessionOptionsResult} GetSessionOptionsResult
                 */
                GetSessionOptionsResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.GetSessionOptionsResult)
                        return object;
                    var message = new $root.arrow.flight.protocol.GetSessionOptionsResult();
                    if (object.sessionOptions) {
                        if (typeof object.sessionOptions !== "object")
                            throw TypeError(".arrow.flight.protocol.GetSessionOptionsResult.sessionOptions: object expected");
                        message.sessionOptions = {};
                        for (var keys = Object.keys(object.sessionOptions), i = 0; i < keys.length; ++i) {
                            if (typeof object.sessionOptions[keys[i]] !== "object")
                                throw TypeError(".arrow.flight.protocol.GetSessionOptionsResult.sessionOptions: object expected");
                            message.sessionOptions[keys[i]] = $root.arrow.flight.protocol.SessionOptionValue.fromObject(object.sessionOptions[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a GetSessionOptionsResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {arrow.flight.protocol.GetSessionOptionsResult} message GetSessionOptionsResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetSessionOptionsResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.sessionOptions = {};
                    var keys2;
                    if (message.sessionOptions && (keys2 = Object.keys(message.sessionOptions)).length) {
                        object.sessionOptions = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.sessionOptions[keys2[j]] = $root.arrow.flight.protocol.SessionOptionValue.toObject(message.sessionOptions[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this GetSessionOptionsResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetSessionOptionsResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for GetSessionOptionsResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.GetSessionOptionsResult
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GetSessionOptionsResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.GetSessionOptionsResult";
                };

                return GetSessionOptionsResult;
            })();

            protocol.CloseSessionRequest = (function() {

                /**
                 * Properties of a CloseSessionRequest.
                 * @memberof arrow.flight.protocol
                 * @interface ICloseSessionRequest
                 */

                /**
                 * Constructs a new CloseSessionRequest.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a CloseSessionRequest.
                 * @implements ICloseSessionRequest
                 * @constructor
                 * @param {arrow.flight.protocol.ICloseSessionRequest=} [properties] Properties to set
                 */
                function CloseSessionRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Creates a new CloseSessionRequest instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {arrow.flight.protocol.ICloseSessionRequest=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.CloseSessionRequest} CloseSessionRequest instance
                 */
                CloseSessionRequest.create = function create(properties) {
                    return new CloseSessionRequest(properties);
                };

                /**
                 * Encodes the specified CloseSessionRequest message. Does not implicitly {@link arrow.flight.protocol.CloseSessionRequest.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {arrow.flight.protocol.ICloseSessionRequest} message CloseSessionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CloseSessionRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Encodes the specified CloseSessionRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.CloseSessionRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {arrow.flight.protocol.ICloseSessionRequest} message CloseSessionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CloseSessionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CloseSessionRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CloseSessionRequest} CloseSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CloseSessionRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.CloseSessionRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CloseSessionRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CloseSessionRequest} CloseSessionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CloseSessionRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CloseSessionRequest message.
                 * @function verify
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CloseSessionRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };

                /**
                 * Creates a CloseSessionRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.CloseSessionRequest} CloseSessionRequest
                 */
                CloseSessionRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.CloseSessionRequest)
                        return object;
                    return new $root.arrow.flight.protocol.CloseSessionRequest();
                };

                /**
                 * Creates a plain object from a CloseSessionRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {arrow.flight.protocol.CloseSessionRequest} message CloseSessionRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CloseSessionRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this CloseSessionRequest to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CloseSessionRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CloseSessionRequest
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.CloseSessionRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CloseSessionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.CloseSessionRequest";
                };

                return CloseSessionRequest;
            })();

            protocol.CloseSessionResult = (function() {

                /**
                 * Properties of a CloseSessionResult.
                 * @memberof arrow.flight.protocol
                 * @interface ICloseSessionResult
                 * @property {arrow.flight.protocol.CloseSessionResult.Status|null} [status] CloseSessionResult status
                 */

                /**
                 * Constructs a new CloseSessionResult.
                 * @memberof arrow.flight.protocol
                 * @classdesc Represents a CloseSessionResult.
                 * @implements ICloseSessionResult
                 * @constructor
                 * @param {arrow.flight.protocol.ICloseSessionResult=} [properties] Properties to set
                 */
                function CloseSessionResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CloseSessionResult status.
                 * @member {arrow.flight.protocol.CloseSessionResult.Status} status
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @instance
                 */
                CloseSessionResult.prototype.status = 0;

                /**
                 * Creates a new CloseSessionResult instance using the specified properties.
                 * @function create
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {arrow.flight.protocol.ICloseSessionResult=} [properties] Properties to set
                 * @returns {arrow.flight.protocol.CloseSessionResult} CloseSessionResult instance
                 */
                CloseSessionResult.create = function create(properties) {
                    return new CloseSessionResult(properties);
                };

                /**
                 * Encodes the specified CloseSessionResult message. Does not implicitly {@link arrow.flight.protocol.CloseSessionResult.verify|verify} messages.
                 * @function encode
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {arrow.flight.protocol.ICloseSessionResult} message CloseSessionResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CloseSessionResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    return writer;
                };

                /**
                 * Encodes the specified CloseSessionResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.CloseSessionResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {arrow.flight.protocol.ICloseSessionResult} message CloseSessionResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CloseSessionResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CloseSessionResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {arrow.flight.protocol.CloseSessionResult} CloseSessionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CloseSessionResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.CloseSessionResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.status = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CloseSessionResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {arrow.flight.protocol.CloseSessionResult} CloseSessionResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CloseSessionResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CloseSessionResult message.
                 * @function verify
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CloseSessionResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a CloseSessionResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {arrow.flight.protocol.CloseSessionResult} CloseSessionResult
                 */
                CloseSessionResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.arrow.flight.protocol.CloseSessionResult)
                        return object;
                    var message = new $root.arrow.flight.protocol.CloseSessionResult();
                    switch (object.status) {
                    default:
                        if (typeof object.status === "number") {
                            message.status = object.status;
                            break;
                        }
                        break;
                    case "UNSPECIFIED":
                    case 0:
                        message.status = 0;
                        break;
                    case "CLOSED":
                    case 1:
                        message.status = 1;
                        break;
                    case "CLOSING":
                    case 2:
                        message.status = 2;
                        break;
                    case "NOT_CLOSEABLE":
                    case 3:
                        message.status = 3;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CloseSessionResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {arrow.flight.protocol.CloseSessionResult} message CloseSessionResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CloseSessionResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.status = options.enums === String ? "UNSPECIFIED" : 0;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.arrow.flight.protocol.CloseSessionResult.Status[message.status] === undefined ? message.status : $root.arrow.flight.protocol.CloseSessionResult.Status[message.status] : message.status;
                    return object;
                };

                /**
                 * Converts this CloseSessionResult to JSON.
                 * @function toJSON
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CloseSessionResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CloseSessionResult
                 * @function getTypeUrl
                 * @memberof arrow.flight.protocol.CloseSessionResult
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CloseSessionResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/arrow.flight.protocol.CloseSessionResult";
                };

                /**
                 * Status enum.
                 * @name arrow.flight.protocol.CloseSessionResult.Status
                 * @enum {number}
                 * @property {number} UNSPECIFIED=0 UNSPECIFIED value
                 * @property {number} CLOSED=1 CLOSED value
                 * @property {number} CLOSING=2 CLOSING value
                 * @property {number} NOT_CLOSEABLE=3 NOT_CLOSEABLE value
                 */
                CloseSessionResult.Status = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNSPECIFIED"] = 0;
                    values[valuesById[1] = "CLOSED"] = 1;
                    values[valuesById[2] = "CLOSING"] = 2;
                    values[valuesById[3] = "NOT_CLOSEABLE"] = 3;
                    return values;
                })();

                return CloseSessionResult;
            })();

            return protocol;
        })();

        return flight;
    })();

    return arrow;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;

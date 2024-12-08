/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.fsql || ($protobuf.roots.fsql = {});

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

            protocol.sql = (function() {

                /**
                 * Namespace sql.
                 * @memberof arrow.flight.protocol
                 * @namespace
                 */
                var sql = {};

                sql.CommandGetSqlInfo = (function() {

                    /**
                     * Properties of a CommandGetSqlInfo.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandGetSqlInfo
                     * @property {Array.<number>|null} [info] CommandGetSqlInfo info
                     */

                    /**
                     * Constructs a new CommandGetSqlInfo.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandGetSqlInfo.
                     * @implements ICommandGetSqlInfo
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandGetSqlInfo=} [properties] Properties to set
                     */
                    function CommandGetSqlInfo(properties) {
                        this.info = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandGetSqlInfo info.
                     * @member {Array.<number>} info
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @instance
                     */
                    CommandGetSqlInfo.prototype.info = $util.emptyArray;

                    /**
                     * Creates a new CommandGetSqlInfo instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetSqlInfo=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandGetSqlInfo} CommandGetSqlInfo instance
                     */
                    CommandGetSqlInfo.create = function create(properties) {
                        return new CommandGetSqlInfo(properties);
                    };

                    /**
                     * Encodes the specified CommandGetSqlInfo message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetSqlInfo.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetSqlInfo} message CommandGetSqlInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetSqlInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.info != null && message.info.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.info.length; ++i)
                                writer.uint32(message.info[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandGetSqlInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetSqlInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetSqlInfo} message CommandGetSqlInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetSqlInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandGetSqlInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetSqlInfo} CommandGetSqlInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetSqlInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandGetSqlInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.info && message.info.length))
                                        message.info = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.info.push(reader.uint32());
                                    } else
                                        message.info.push(reader.uint32());
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
                     * Decodes a CommandGetSqlInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetSqlInfo} CommandGetSqlInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetSqlInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandGetSqlInfo message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandGetSqlInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.info != null && message.hasOwnProperty("info")) {
                            if (!Array.isArray(message.info))
                                return "info: array expected";
                            for (var i = 0; i < message.info.length; ++i)
                                if (!$util.isInteger(message.info[i]))
                                    return "info: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a CommandGetSqlInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandGetSqlInfo} CommandGetSqlInfo
                     */
                    CommandGetSqlInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandGetSqlInfo)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandGetSqlInfo();
                        if (object.info) {
                            if (!Array.isArray(object.info))
                                throw TypeError(".arrow.flight.protocol.sql.CommandGetSqlInfo.info: array expected");
                            message.info = [];
                            for (var i = 0; i < object.info.length; ++i)
                                message.info[i] = object.info[i] >>> 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandGetSqlInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandGetSqlInfo} message CommandGetSqlInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandGetSqlInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.info = [];
                        if (message.info && message.info.length) {
                            object.info = [];
                            for (var j = 0; j < message.info.length; ++j)
                                object.info[j] = message.info[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this CommandGetSqlInfo to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandGetSqlInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandGetSqlInfo
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandGetSqlInfo
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandGetSqlInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandGetSqlInfo";
                    };

                    return CommandGetSqlInfo;
                })();

                /**
                 * SqlInfo enum.
                 * @name arrow.flight.protocol.sql.SqlInfo
                 * @enum {number}
                 * @property {number} FLIGHT_SQL_SERVER_NAME=0 FLIGHT_SQL_SERVER_NAME value
                 * @property {number} FLIGHT_SQL_SERVER_VERSION=1 FLIGHT_SQL_SERVER_VERSION value
                 * @property {number} FLIGHT_SQL_SERVER_ARROW_VERSION=2 FLIGHT_SQL_SERVER_ARROW_VERSION value
                 * @property {number} FLIGHT_SQL_SERVER_READ_ONLY=3 FLIGHT_SQL_SERVER_READ_ONLY value
                 * @property {number} FLIGHT_SQL_SERVER_SQL=4 FLIGHT_SQL_SERVER_SQL value
                 * @property {number} FLIGHT_SQL_SERVER_SUBSTRAIT=5 FLIGHT_SQL_SERVER_SUBSTRAIT value
                 * @property {number} FLIGHT_SQL_SERVER_SUBSTRAIT_MIN_VERSION=6 FLIGHT_SQL_SERVER_SUBSTRAIT_MIN_VERSION value
                 * @property {number} FLIGHT_SQL_SERVER_SUBSTRAIT_MAX_VERSION=7 FLIGHT_SQL_SERVER_SUBSTRAIT_MAX_VERSION value
                 * @property {number} FLIGHT_SQL_SERVER_TRANSACTION=8 FLIGHT_SQL_SERVER_TRANSACTION value
                 * @property {number} FLIGHT_SQL_SERVER_CANCEL=9 FLIGHT_SQL_SERVER_CANCEL value
                 * @property {number} FLIGHT_SQL_SERVER_BULK_INGESTION=10 FLIGHT_SQL_SERVER_BULK_INGESTION value
                 * @property {number} FLIGHT_SQL_SERVER_INGEST_TRANSACTIONS_SUPPORTED=11 FLIGHT_SQL_SERVER_INGEST_TRANSACTIONS_SUPPORTED value
                 * @property {number} FLIGHT_SQL_SERVER_STATEMENT_TIMEOUT=100 FLIGHT_SQL_SERVER_STATEMENT_TIMEOUT value
                 * @property {number} FLIGHT_SQL_SERVER_TRANSACTION_TIMEOUT=101 FLIGHT_SQL_SERVER_TRANSACTION_TIMEOUT value
                 * @property {number} SQL_DDL_CATALOG=500 SQL_DDL_CATALOG value
                 * @property {number} SQL_DDL_SCHEMA=501 SQL_DDL_SCHEMA value
                 * @property {number} SQL_DDL_TABLE=502 SQL_DDL_TABLE value
                 * @property {number} SQL_IDENTIFIER_CASE=503 SQL_IDENTIFIER_CASE value
                 * @property {number} SQL_IDENTIFIER_QUOTE_CHAR=504 SQL_IDENTIFIER_QUOTE_CHAR value
                 * @property {number} SQL_QUOTED_IDENTIFIER_CASE=505 SQL_QUOTED_IDENTIFIER_CASE value
                 * @property {number} SQL_ALL_TABLES_ARE_SELECTABLE=506 SQL_ALL_TABLES_ARE_SELECTABLE value
                 * @property {number} SQL_NULL_ORDERING=507 SQL_NULL_ORDERING value
                 * @property {number} SQL_KEYWORDS=508 SQL_KEYWORDS value
                 * @property {number} SQL_NUMERIC_FUNCTIONS=509 SQL_NUMERIC_FUNCTIONS value
                 * @property {number} SQL_STRING_FUNCTIONS=510 SQL_STRING_FUNCTIONS value
                 * @property {number} SQL_SYSTEM_FUNCTIONS=511 SQL_SYSTEM_FUNCTIONS value
                 * @property {number} SQL_DATETIME_FUNCTIONS=512 SQL_DATETIME_FUNCTIONS value
                 * @property {number} SQL_SEARCH_STRING_ESCAPE=513 SQL_SEARCH_STRING_ESCAPE value
                 * @property {number} SQL_EXTRA_NAME_CHARACTERS=514 SQL_EXTRA_NAME_CHARACTERS value
                 * @property {number} SQL_SUPPORTS_COLUMN_ALIASING=515 SQL_SUPPORTS_COLUMN_ALIASING value
                 * @property {number} SQL_NULL_PLUS_NULL_IS_NULL=516 SQL_NULL_PLUS_NULL_IS_NULL value
                 * @property {number} SQL_SUPPORTS_CONVERT=517 SQL_SUPPORTS_CONVERT value
                 * @property {number} SQL_SUPPORTS_TABLE_CORRELATION_NAMES=518 SQL_SUPPORTS_TABLE_CORRELATION_NAMES value
                 * @property {number} SQL_SUPPORTS_DIFFERENT_TABLE_CORRELATION_NAMES=519 SQL_SUPPORTS_DIFFERENT_TABLE_CORRELATION_NAMES value
                 * @property {number} SQL_SUPPORTS_EXPRESSIONS_IN_ORDER_BY=520 SQL_SUPPORTS_EXPRESSIONS_IN_ORDER_BY value
                 * @property {number} SQL_SUPPORTS_ORDER_BY_UNRELATED=521 SQL_SUPPORTS_ORDER_BY_UNRELATED value
                 * @property {number} SQL_SUPPORTED_GROUP_BY=522 SQL_SUPPORTED_GROUP_BY value
                 * @property {number} SQL_SUPPORTS_LIKE_ESCAPE_CLAUSE=523 SQL_SUPPORTS_LIKE_ESCAPE_CLAUSE value
                 * @property {number} SQL_SUPPORTS_NON_NULLABLE_COLUMNS=524 SQL_SUPPORTS_NON_NULLABLE_COLUMNS value
                 * @property {number} SQL_SUPPORTED_GRAMMAR=525 SQL_SUPPORTED_GRAMMAR value
                 * @property {number} SQL_ANSI92_SUPPORTED_LEVEL=526 SQL_ANSI92_SUPPORTED_LEVEL value
                 * @property {number} SQL_SUPPORTS_INTEGRITY_ENHANCEMENT_FACILITY=527 SQL_SUPPORTS_INTEGRITY_ENHANCEMENT_FACILITY value
                 * @property {number} SQL_OUTER_JOINS_SUPPORT_LEVEL=528 SQL_OUTER_JOINS_SUPPORT_LEVEL value
                 * @property {number} SQL_SCHEMA_TERM=529 SQL_SCHEMA_TERM value
                 * @property {number} SQL_PROCEDURE_TERM=530 SQL_PROCEDURE_TERM value
                 * @property {number} SQL_CATALOG_TERM=531 SQL_CATALOG_TERM value
                 * @property {number} SQL_CATALOG_AT_START=532 SQL_CATALOG_AT_START value
                 * @property {number} SQL_SCHEMAS_SUPPORTED_ACTIONS=533 SQL_SCHEMAS_SUPPORTED_ACTIONS value
                 * @property {number} SQL_CATALOGS_SUPPORTED_ACTIONS=534 SQL_CATALOGS_SUPPORTED_ACTIONS value
                 * @property {number} SQL_SUPPORTED_POSITIONED_COMMANDS=535 SQL_SUPPORTED_POSITIONED_COMMANDS value
                 * @property {number} SQL_SELECT_FOR_UPDATE_SUPPORTED=536 SQL_SELECT_FOR_UPDATE_SUPPORTED value
                 * @property {number} SQL_STORED_PROCEDURES_SUPPORTED=537 SQL_STORED_PROCEDURES_SUPPORTED value
                 * @property {number} SQL_SUPPORTED_SUBQUERIES=538 SQL_SUPPORTED_SUBQUERIES value
                 * @property {number} SQL_CORRELATED_SUBQUERIES_SUPPORTED=539 SQL_CORRELATED_SUBQUERIES_SUPPORTED value
                 * @property {number} SQL_SUPPORTED_UNIONS=540 SQL_SUPPORTED_UNIONS value
                 * @property {number} SQL_MAX_BINARY_LITERAL_LENGTH=541 SQL_MAX_BINARY_LITERAL_LENGTH value
                 * @property {number} SQL_MAX_CHAR_LITERAL_LENGTH=542 SQL_MAX_CHAR_LITERAL_LENGTH value
                 * @property {number} SQL_MAX_COLUMN_NAME_LENGTH=543 SQL_MAX_COLUMN_NAME_LENGTH value
                 * @property {number} SQL_MAX_COLUMNS_IN_GROUP_BY=544 SQL_MAX_COLUMNS_IN_GROUP_BY value
                 * @property {number} SQL_MAX_COLUMNS_IN_INDEX=545 SQL_MAX_COLUMNS_IN_INDEX value
                 * @property {number} SQL_MAX_COLUMNS_IN_ORDER_BY=546 SQL_MAX_COLUMNS_IN_ORDER_BY value
                 * @property {number} SQL_MAX_COLUMNS_IN_SELECT=547 SQL_MAX_COLUMNS_IN_SELECT value
                 * @property {number} SQL_MAX_COLUMNS_IN_TABLE=548 SQL_MAX_COLUMNS_IN_TABLE value
                 * @property {number} SQL_MAX_CONNECTIONS=549 SQL_MAX_CONNECTIONS value
                 * @property {number} SQL_MAX_CURSOR_NAME_LENGTH=550 SQL_MAX_CURSOR_NAME_LENGTH value
                 * @property {number} SQL_MAX_INDEX_LENGTH=551 SQL_MAX_INDEX_LENGTH value
                 * @property {number} SQL_DB_SCHEMA_NAME_LENGTH=552 SQL_DB_SCHEMA_NAME_LENGTH value
                 * @property {number} SQL_MAX_PROCEDURE_NAME_LENGTH=553 SQL_MAX_PROCEDURE_NAME_LENGTH value
                 * @property {number} SQL_MAX_CATALOG_NAME_LENGTH=554 SQL_MAX_CATALOG_NAME_LENGTH value
                 * @property {number} SQL_MAX_ROW_SIZE=555 SQL_MAX_ROW_SIZE value
                 * @property {number} SQL_MAX_ROW_SIZE_INCLUDES_BLOBS=556 SQL_MAX_ROW_SIZE_INCLUDES_BLOBS value
                 * @property {number} SQL_MAX_STATEMENT_LENGTH=557 SQL_MAX_STATEMENT_LENGTH value
                 * @property {number} SQL_MAX_STATEMENTS=558 SQL_MAX_STATEMENTS value
                 * @property {number} SQL_MAX_TABLE_NAME_LENGTH=559 SQL_MAX_TABLE_NAME_LENGTH value
                 * @property {number} SQL_MAX_TABLES_IN_SELECT=560 SQL_MAX_TABLES_IN_SELECT value
                 * @property {number} SQL_MAX_USERNAME_LENGTH=561 SQL_MAX_USERNAME_LENGTH value
                 * @property {number} SQL_DEFAULT_TRANSACTION_ISOLATION=562 SQL_DEFAULT_TRANSACTION_ISOLATION value
                 * @property {number} SQL_TRANSACTIONS_SUPPORTED=563 SQL_TRANSACTIONS_SUPPORTED value
                 * @property {number} SQL_SUPPORTED_TRANSACTIONS_ISOLATION_LEVELS=564 SQL_SUPPORTED_TRANSACTIONS_ISOLATION_LEVELS value
                 * @property {number} SQL_DATA_DEFINITION_CAUSES_TRANSACTION_COMMIT=565 SQL_DATA_DEFINITION_CAUSES_TRANSACTION_COMMIT value
                 * @property {number} SQL_DATA_DEFINITIONS_IN_TRANSACTIONS_IGNORED=566 SQL_DATA_DEFINITIONS_IN_TRANSACTIONS_IGNORED value
                 * @property {number} SQL_SUPPORTED_RESULT_SET_TYPES=567 SQL_SUPPORTED_RESULT_SET_TYPES value
                 * @property {number} SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_UNSPECIFIED=568 SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_UNSPECIFIED value
                 * @property {number} SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_FORWARD_ONLY=569 SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_FORWARD_ONLY value
                 * @property {number} SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_SENSITIVE=570 SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_SENSITIVE value
                 * @property {number} SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_INSENSITIVE=571 SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_INSENSITIVE value
                 * @property {number} SQL_BATCH_UPDATES_SUPPORTED=572 SQL_BATCH_UPDATES_SUPPORTED value
                 * @property {number} SQL_SAVEPOINTS_SUPPORTED=573 SQL_SAVEPOINTS_SUPPORTED value
                 * @property {number} SQL_NAMED_PARAMETERS_SUPPORTED=574 SQL_NAMED_PARAMETERS_SUPPORTED value
                 * @property {number} SQL_LOCATORS_UPDATE_COPY=575 SQL_LOCATORS_UPDATE_COPY value
                 * @property {number} SQL_STORED_FUNCTIONS_USING_CALL_SYNTAX_SUPPORTED=576 SQL_STORED_FUNCTIONS_USING_CALL_SYNTAX_SUPPORTED value
                 */
                sql.SqlInfo = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "FLIGHT_SQL_SERVER_NAME"] = 0;
                    values[valuesById[1] = "FLIGHT_SQL_SERVER_VERSION"] = 1;
                    values[valuesById[2] = "FLIGHT_SQL_SERVER_ARROW_VERSION"] = 2;
                    values[valuesById[3] = "FLIGHT_SQL_SERVER_READ_ONLY"] = 3;
                    values[valuesById[4] = "FLIGHT_SQL_SERVER_SQL"] = 4;
                    values[valuesById[5] = "FLIGHT_SQL_SERVER_SUBSTRAIT"] = 5;
                    values[valuesById[6] = "FLIGHT_SQL_SERVER_SUBSTRAIT_MIN_VERSION"] = 6;
                    values[valuesById[7] = "FLIGHT_SQL_SERVER_SUBSTRAIT_MAX_VERSION"] = 7;
                    values[valuesById[8] = "FLIGHT_SQL_SERVER_TRANSACTION"] = 8;
                    values[valuesById[9] = "FLIGHT_SQL_SERVER_CANCEL"] = 9;
                    values[valuesById[10] = "FLIGHT_SQL_SERVER_BULK_INGESTION"] = 10;
                    values[valuesById[11] = "FLIGHT_SQL_SERVER_INGEST_TRANSACTIONS_SUPPORTED"] = 11;
                    values[valuesById[100] = "FLIGHT_SQL_SERVER_STATEMENT_TIMEOUT"] = 100;
                    values[valuesById[101] = "FLIGHT_SQL_SERVER_TRANSACTION_TIMEOUT"] = 101;
                    values[valuesById[500] = "SQL_DDL_CATALOG"] = 500;
                    values[valuesById[501] = "SQL_DDL_SCHEMA"] = 501;
                    values[valuesById[502] = "SQL_DDL_TABLE"] = 502;
                    values[valuesById[503] = "SQL_IDENTIFIER_CASE"] = 503;
                    values[valuesById[504] = "SQL_IDENTIFIER_QUOTE_CHAR"] = 504;
                    values[valuesById[505] = "SQL_QUOTED_IDENTIFIER_CASE"] = 505;
                    values[valuesById[506] = "SQL_ALL_TABLES_ARE_SELECTABLE"] = 506;
                    values[valuesById[507] = "SQL_NULL_ORDERING"] = 507;
                    values[valuesById[508] = "SQL_KEYWORDS"] = 508;
                    values[valuesById[509] = "SQL_NUMERIC_FUNCTIONS"] = 509;
                    values[valuesById[510] = "SQL_STRING_FUNCTIONS"] = 510;
                    values[valuesById[511] = "SQL_SYSTEM_FUNCTIONS"] = 511;
                    values[valuesById[512] = "SQL_DATETIME_FUNCTIONS"] = 512;
                    values[valuesById[513] = "SQL_SEARCH_STRING_ESCAPE"] = 513;
                    values[valuesById[514] = "SQL_EXTRA_NAME_CHARACTERS"] = 514;
                    values[valuesById[515] = "SQL_SUPPORTS_COLUMN_ALIASING"] = 515;
                    values[valuesById[516] = "SQL_NULL_PLUS_NULL_IS_NULL"] = 516;
                    values[valuesById[517] = "SQL_SUPPORTS_CONVERT"] = 517;
                    values[valuesById[518] = "SQL_SUPPORTS_TABLE_CORRELATION_NAMES"] = 518;
                    values[valuesById[519] = "SQL_SUPPORTS_DIFFERENT_TABLE_CORRELATION_NAMES"] = 519;
                    values[valuesById[520] = "SQL_SUPPORTS_EXPRESSIONS_IN_ORDER_BY"] = 520;
                    values[valuesById[521] = "SQL_SUPPORTS_ORDER_BY_UNRELATED"] = 521;
                    values[valuesById[522] = "SQL_SUPPORTED_GROUP_BY"] = 522;
                    values[valuesById[523] = "SQL_SUPPORTS_LIKE_ESCAPE_CLAUSE"] = 523;
                    values[valuesById[524] = "SQL_SUPPORTS_NON_NULLABLE_COLUMNS"] = 524;
                    values[valuesById[525] = "SQL_SUPPORTED_GRAMMAR"] = 525;
                    values[valuesById[526] = "SQL_ANSI92_SUPPORTED_LEVEL"] = 526;
                    values[valuesById[527] = "SQL_SUPPORTS_INTEGRITY_ENHANCEMENT_FACILITY"] = 527;
                    values[valuesById[528] = "SQL_OUTER_JOINS_SUPPORT_LEVEL"] = 528;
                    values[valuesById[529] = "SQL_SCHEMA_TERM"] = 529;
                    values[valuesById[530] = "SQL_PROCEDURE_TERM"] = 530;
                    values[valuesById[531] = "SQL_CATALOG_TERM"] = 531;
                    values[valuesById[532] = "SQL_CATALOG_AT_START"] = 532;
                    values[valuesById[533] = "SQL_SCHEMAS_SUPPORTED_ACTIONS"] = 533;
                    values[valuesById[534] = "SQL_CATALOGS_SUPPORTED_ACTIONS"] = 534;
                    values[valuesById[535] = "SQL_SUPPORTED_POSITIONED_COMMANDS"] = 535;
                    values[valuesById[536] = "SQL_SELECT_FOR_UPDATE_SUPPORTED"] = 536;
                    values[valuesById[537] = "SQL_STORED_PROCEDURES_SUPPORTED"] = 537;
                    values[valuesById[538] = "SQL_SUPPORTED_SUBQUERIES"] = 538;
                    values[valuesById[539] = "SQL_CORRELATED_SUBQUERIES_SUPPORTED"] = 539;
                    values[valuesById[540] = "SQL_SUPPORTED_UNIONS"] = 540;
                    values[valuesById[541] = "SQL_MAX_BINARY_LITERAL_LENGTH"] = 541;
                    values[valuesById[542] = "SQL_MAX_CHAR_LITERAL_LENGTH"] = 542;
                    values[valuesById[543] = "SQL_MAX_COLUMN_NAME_LENGTH"] = 543;
                    values[valuesById[544] = "SQL_MAX_COLUMNS_IN_GROUP_BY"] = 544;
                    values[valuesById[545] = "SQL_MAX_COLUMNS_IN_INDEX"] = 545;
                    values[valuesById[546] = "SQL_MAX_COLUMNS_IN_ORDER_BY"] = 546;
                    values[valuesById[547] = "SQL_MAX_COLUMNS_IN_SELECT"] = 547;
                    values[valuesById[548] = "SQL_MAX_COLUMNS_IN_TABLE"] = 548;
                    values[valuesById[549] = "SQL_MAX_CONNECTIONS"] = 549;
                    values[valuesById[550] = "SQL_MAX_CURSOR_NAME_LENGTH"] = 550;
                    values[valuesById[551] = "SQL_MAX_INDEX_LENGTH"] = 551;
                    values[valuesById[552] = "SQL_DB_SCHEMA_NAME_LENGTH"] = 552;
                    values[valuesById[553] = "SQL_MAX_PROCEDURE_NAME_LENGTH"] = 553;
                    values[valuesById[554] = "SQL_MAX_CATALOG_NAME_LENGTH"] = 554;
                    values[valuesById[555] = "SQL_MAX_ROW_SIZE"] = 555;
                    values[valuesById[556] = "SQL_MAX_ROW_SIZE_INCLUDES_BLOBS"] = 556;
                    values[valuesById[557] = "SQL_MAX_STATEMENT_LENGTH"] = 557;
                    values[valuesById[558] = "SQL_MAX_STATEMENTS"] = 558;
                    values[valuesById[559] = "SQL_MAX_TABLE_NAME_LENGTH"] = 559;
                    values[valuesById[560] = "SQL_MAX_TABLES_IN_SELECT"] = 560;
                    values[valuesById[561] = "SQL_MAX_USERNAME_LENGTH"] = 561;
                    values[valuesById[562] = "SQL_DEFAULT_TRANSACTION_ISOLATION"] = 562;
                    values[valuesById[563] = "SQL_TRANSACTIONS_SUPPORTED"] = 563;
                    values[valuesById[564] = "SQL_SUPPORTED_TRANSACTIONS_ISOLATION_LEVELS"] = 564;
                    values[valuesById[565] = "SQL_DATA_DEFINITION_CAUSES_TRANSACTION_COMMIT"] = 565;
                    values[valuesById[566] = "SQL_DATA_DEFINITIONS_IN_TRANSACTIONS_IGNORED"] = 566;
                    values[valuesById[567] = "SQL_SUPPORTED_RESULT_SET_TYPES"] = 567;
                    values[valuesById[568] = "SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_UNSPECIFIED"] = 568;
                    values[valuesById[569] = "SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_FORWARD_ONLY"] = 569;
                    values[valuesById[570] = "SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_SENSITIVE"] = 570;
                    values[valuesById[571] = "SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_INSENSITIVE"] = 571;
                    values[valuesById[572] = "SQL_BATCH_UPDATES_SUPPORTED"] = 572;
                    values[valuesById[573] = "SQL_SAVEPOINTS_SUPPORTED"] = 573;
                    values[valuesById[574] = "SQL_NAMED_PARAMETERS_SUPPORTED"] = 574;
                    values[valuesById[575] = "SQL_LOCATORS_UPDATE_COPY"] = 575;
                    values[valuesById[576] = "SQL_STORED_FUNCTIONS_USING_CALL_SYNTAX_SUPPORTED"] = 576;
                    return values;
                })();

                /**
                 * SqlSupportedTransaction enum.
                 * @name arrow.flight.protocol.sql.SqlSupportedTransaction
                 * @enum {number}
                 * @property {number} SQL_SUPPORTED_TRANSACTION_NONE=0 SQL_SUPPORTED_TRANSACTION_NONE value
                 * @property {number} SQL_SUPPORTED_TRANSACTION_TRANSACTION=1 SQL_SUPPORTED_TRANSACTION_TRANSACTION value
                 * @property {number} SQL_SUPPORTED_TRANSACTION_SAVEPOINT=2 SQL_SUPPORTED_TRANSACTION_SAVEPOINT value
                 */
                sql.SqlSupportedTransaction = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_SUPPORTED_TRANSACTION_NONE"] = 0;
                    values[valuesById[1] = "SQL_SUPPORTED_TRANSACTION_TRANSACTION"] = 1;
                    values[valuesById[2] = "SQL_SUPPORTED_TRANSACTION_SAVEPOINT"] = 2;
                    return values;
                })();

                /**
                 * SqlSupportedCaseSensitivity enum.
                 * @name arrow.flight.protocol.sql.SqlSupportedCaseSensitivity
                 * @enum {number}
                 * @property {number} SQL_CASE_SENSITIVITY_UNKNOWN=0 SQL_CASE_SENSITIVITY_UNKNOWN value
                 * @property {number} SQL_CASE_SENSITIVITY_CASE_INSENSITIVE=1 SQL_CASE_SENSITIVITY_CASE_INSENSITIVE value
                 * @property {number} SQL_CASE_SENSITIVITY_UPPERCASE=2 SQL_CASE_SENSITIVITY_UPPERCASE value
                 * @property {number} SQL_CASE_SENSITIVITY_LOWERCASE=3 SQL_CASE_SENSITIVITY_LOWERCASE value
                 */
                sql.SqlSupportedCaseSensitivity = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_CASE_SENSITIVITY_UNKNOWN"] = 0;
                    values[valuesById[1] = "SQL_CASE_SENSITIVITY_CASE_INSENSITIVE"] = 1;
                    values[valuesById[2] = "SQL_CASE_SENSITIVITY_UPPERCASE"] = 2;
                    values[valuesById[3] = "SQL_CASE_SENSITIVITY_LOWERCASE"] = 3;
                    return values;
                })();

                /**
                 * SqlNullOrdering enum.
                 * @name arrow.flight.protocol.sql.SqlNullOrdering
                 * @enum {number}
                 * @property {number} SQL_NULLS_SORTED_HIGH=0 SQL_NULLS_SORTED_HIGH value
                 * @property {number} SQL_NULLS_SORTED_LOW=1 SQL_NULLS_SORTED_LOW value
                 * @property {number} SQL_NULLS_SORTED_AT_START=2 SQL_NULLS_SORTED_AT_START value
                 * @property {number} SQL_NULLS_SORTED_AT_END=3 SQL_NULLS_SORTED_AT_END value
                 */
                sql.SqlNullOrdering = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_NULLS_SORTED_HIGH"] = 0;
                    values[valuesById[1] = "SQL_NULLS_SORTED_LOW"] = 1;
                    values[valuesById[2] = "SQL_NULLS_SORTED_AT_START"] = 2;
                    values[valuesById[3] = "SQL_NULLS_SORTED_AT_END"] = 3;
                    return values;
                })();

                /**
                 * SupportedSqlGrammar enum.
                 * @name arrow.flight.protocol.sql.SupportedSqlGrammar
                 * @enum {number}
                 * @property {number} SQL_MINIMUM_GRAMMAR=0 SQL_MINIMUM_GRAMMAR value
                 * @property {number} SQL_CORE_GRAMMAR=1 SQL_CORE_GRAMMAR value
                 * @property {number} SQL_EXTENDED_GRAMMAR=2 SQL_EXTENDED_GRAMMAR value
                 */
                sql.SupportedSqlGrammar = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_MINIMUM_GRAMMAR"] = 0;
                    values[valuesById[1] = "SQL_CORE_GRAMMAR"] = 1;
                    values[valuesById[2] = "SQL_EXTENDED_GRAMMAR"] = 2;
                    return values;
                })();

                /**
                 * SupportedAnsi92SqlGrammarLevel enum.
                 * @name arrow.flight.protocol.sql.SupportedAnsi92SqlGrammarLevel
                 * @enum {number}
                 * @property {number} ANSI92_ENTRY_SQL=0 ANSI92_ENTRY_SQL value
                 * @property {number} ANSI92_INTERMEDIATE_SQL=1 ANSI92_INTERMEDIATE_SQL value
                 * @property {number} ANSI92_FULL_SQL=2 ANSI92_FULL_SQL value
                 */
                sql.SupportedAnsi92SqlGrammarLevel = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "ANSI92_ENTRY_SQL"] = 0;
                    values[valuesById[1] = "ANSI92_INTERMEDIATE_SQL"] = 1;
                    values[valuesById[2] = "ANSI92_FULL_SQL"] = 2;
                    return values;
                })();

                /**
                 * SqlOuterJoinsSupportLevel enum.
                 * @name arrow.flight.protocol.sql.SqlOuterJoinsSupportLevel
                 * @enum {number}
                 * @property {number} SQL_JOINS_UNSUPPORTED=0 SQL_JOINS_UNSUPPORTED value
                 * @property {number} SQL_LIMITED_OUTER_JOINS=1 SQL_LIMITED_OUTER_JOINS value
                 * @property {number} SQL_FULL_OUTER_JOINS=2 SQL_FULL_OUTER_JOINS value
                 */
                sql.SqlOuterJoinsSupportLevel = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_JOINS_UNSUPPORTED"] = 0;
                    values[valuesById[1] = "SQL_LIMITED_OUTER_JOINS"] = 1;
                    values[valuesById[2] = "SQL_FULL_OUTER_JOINS"] = 2;
                    return values;
                })();

                /**
                 * SqlSupportedGroupBy enum.
                 * @name arrow.flight.protocol.sql.SqlSupportedGroupBy
                 * @enum {number}
                 * @property {number} SQL_GROUP_BY_UNRELATED=0 SQL_GROUP_BY_UNRELATED value
                 * @property {number} SQL_GROUP_BY_BEYOND_SELECT=1 SQL_GROUP_BY_BEYOND_SELECT value
                 */
                sql.SqlSupportedGroupBy = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_GROUP_BY_UNRELATED"] = 0;
                    values[valuesById[1] = "SQL_GROUP_BY_BEYOND_SELECT"] = 1;
                    return values;
                })();

                /**
                 * SqlSupportedElementActions enum.
                 * @name arrow.flight.protocol.sql.SqlSupportedElementActions
                 * @enum {number}
                 * @property {number} SQL_ELEMENT_IN_PROCEDURE_CALLS=0 SQL_ELEMENT_IN_PROCEDURE_CALLS value
                 * @property {number} SQL_ELEMENT_IN_INDEX_DEFINITIONS=1 SQL_ELEMENT_IN_INDEX_DEFINITIONS value
                 * @property {number} SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS=2 SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS value
                 */
                sql.SqlSupportedElementActions = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_ELEMENT_IN_PROCEDURE_CALLS"] = 0;
                    values[valuesById[1] = "SQL_ELEMENT_IN_INDEX_DEFINITIONS"] = 1;
                    values[valuesById[2] = "SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS"] = 2;
                    return values;
                })();

                /**
                 * SqlSupportedPositionedCommands enum.
                 * @name arrow.flight.protocol.sql.SqlSupportedPositionedCommands
                 * @enum {number}
                 * @property {number} SQL_POSITIONED_DELETE=0 SQL_POSITIONED_DELETE value
                 * @property {number} SQL_POSITIONED_UPDATE=1 SQL_POSITIONED_UPDATE value
                 */
                sql.SqlSupportedPositionedCommands = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_POSITIONED_DELETE"] = 0;
                    values[valuesById[1] = "SQL_POSITIONED_UPDATE"] = 1;
                    return values;
                })();

                /**
                 * SqlSupportedSubqueries enum.
                 * @name arrow.flight.protocol.sql.SqlSupportedSubqueries
                 * @enum {number}
                 * @property {number} SQL_SUBQUERIES_IN_COMPARISONS=0 SQL_SUBQUERIES_IN_COMPARISONS value
                 * @property {number} SQL_SUBQUERIES_IN_EXISTS=1 SQL_SUBQUERIES_IN_EXISTS value
                 * @property {number} SQL_SUBQUERIES_IN_INS=2 SQL_SUBQUERIES_IN_INS value
                 * @property {number} SQL_SUBQUERIES_IN_QUANTIFIEDS=3 SQL_SUBQUERIES_IN_QUANTIFIEDS value
                 */
                sql.SqlSupportedSubqueries = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_SUBQUERIES_IN_COMPARISONS"] = 0;
                    values[valuesById[1] = "SQL_SUBQUERIES_IN_EXISTS"] = 1;
                    values[valuesById[2] = "SQL_SUBQUERIES_IN_INS"] = 2;
                    values[valuesById[3] = "SQL_SUBQUERIES_IN_QUANTIFIEDS"] = 3;
                    return values;
                })();

                /**
                 * SqlSupportedUnions enum.
                 * @name arrow.flight.protocol.sql.SqlSupportedUnions
                 * @enum {number}
                 * @property {number} SQL_UNION=0 SQL_UNION value
                 * @property {number} SQL_UNION_ALL=1 SQL_UNION_ALL value
                 */
                sql.SqlSupportedUnions = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_UNION"] = 0;
                    values[valuesById[1] = "SQL_UNION_ALL"] = 1;
                    return values;
                })();

                /**
                 * SqlTransactionIsolationLevel enum.
                 * @name arrow.flight.protocol.sql.SqlTransactionIsolationLevel
                 * @enum {number}
                 * @property {number} SQL_TRANSACTION_NONE=0 SQL_TRANSACTION_NONE value
                 * @property {number} SQL_TRANSACTION_READ_UNCOMMITTED=1 SQL_TRANSACTION_READ_UNCOMMITTED value
                 * @property {number} SQL_TRANSACTION_READ_COMMITTED=2 SQL_TRANSACTION_READ_COMMITTED value
                 * @property {number} SQL_TRANSACTION_REPEATABLE_READ=3 SQL_TRANSACTION_REPEATABLE_READ value
                 * @property {number} SQL_TRANSACTION_SERIALIZABLE=4 SQL_TRANSACTION_SERIALIZABLE value
                 */
                sql.SqlTransactionIsolationLevel = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_TRANSACTION_NONE"] = 0;
                    values[valuesById[1] = "SQL_TRANSACTION_READ_UNCOMMITTED"] = 1;
                    values[valuesById[2] = "SQL_TRANSACTION_READ_COMMITTED"] = 2;
                    values[valuesById[3] = "SQL_TRANSACTION_REPEATABLE_READ"] = 3;
                    values[valuesById[4] = "SQL_TRANSACTION_SERIALIZABLE"] = 4;
                    return values;
                })();

                /**
                 * SqlSupportedTransactions enum.
                 * @name arrow.flight.protocol.sql.SqlSupportedTransactions
                 * @enum {number}
                 * @property {number} SQL_TRANSACTION_UNSPECIFIED=0 SQL_TRANSACTION_UNSPECIFIED value
                 * @property {number} SQL_DATA_DEFINITION_TRANSACTIONS=1 SQL_DATA_DEFINITION_TRANSACTIONS value
                 * @property {number} SQL_DATA_MANIPULATION_TRANSACTIONS=2 SQL_DATA_MANIPULATION_TRANSACTIONS value
                 */
                sql.SqlSupportedTransactions = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_TRANSACTION_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "SQL_DATA_DEFINITION_TRANSACTIONS"] = 1;
                    values[valuesById[2] = "SQL_DATA_MANIPULATION_TRANSACTIONS"] = 2;
                    return values;
                })();

                /**
                 * SqlSupportedResultSetType enum.
                 * @name arrow.flight.protocol.sql.SqlSupportedResultSetType
                 * @enum {number}
                 * @property {number} SQL_RESULT_SET_TYPE_UNSPECIFIED=0 SQL_RESULT_SET_TYPE_UNSPECIFIED value
                 * @property {number} SQL_RESULT_SET_TYPE_FORWARD_ONLY=1 SQL_RESULT_SET_TYPE_FORWARD_ONLY value
                 * @property {number} SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE=2 SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE value
                 * @property {number} SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE=3 SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE value
                 */
                sql.SqlSupportedResultSetType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_RESULT_SET_TYPE_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "SQL_RESULT_SET_TYPE_FORWARD_ONLY"] = 1;
                    values[valuesById[2] = "SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE"] = 2;
                    values[valuesById[3] = "SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE"] = 3;
                    return values;
                })();

                /**
                 * SqlSupportedResultSetConcurrency enum.
                 * @name arrow.flight.protocol.sql.SqlSupportedResultSetConcurrency
                 * @enum {number}
                 * @property {number} SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED=0 SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED value
                 * @property {number} SQL_RESULT_SET_CONCURRENCY_READ_ONLY=1 SQL_RESULT_SET_CONCURRENCY_READ_ONLY value
                 * @property {number} SQL_RESULT_SET_CONCURRENCY_UPDATABLE=2 SQL_RESULT_SET_CONCURRENCY_UPDATABLE value
                 */
                sql.SqlSupportedResultSetConcurrency = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "SQL_RESULT_SET_CONCURRENCY_READ_ONLY"] = 1;
                    values[valuesById[2] = "SQL_RESULT_SET_CONCURRENCY_UPDATABLE"] = 2;
                    return values;
                })();

                /**
                 * SqlSupportsConvert enum.
                 * @name arrow.flight.protocol.sql.SqlSupportsConvert
                 * @enum {number}
                 * @property {number} SQL_CONVERT_BIGINT=0 SQL_CONVERT_BIGINT value
                 * @property {number} SQL_CONVERT_BINARY=1 SQL_CONVERT_BINARY value
                 * @property {number} SQL_CONVERT_BIT=2 SQL_CONVERT_BIT value
                 * @property {number} SQL_CONVERT_CHAR=3 SQL_CONVERT_CHAR value
                 * @property {number} SQL_CONVERT_DATE=4 SQL_CONVERT_DATE value
                 * @property {number} SQL_CONVERT_DECIMAL=5 SQL_CONVERT_DECIMAL value
                 * @property {number} SQL_CONVERT_FLOAT=6 SQL_CONVERT_FLOAT value
                 * @property {number} SQL_CONVERT_INTEGER=7 SQL_CONVERT_INTEGER value
                 * @property {number} SQL_CONVERT_INTERVAL_DAY_TIME=8 SQL_CONVERT_INTERVAL_DAY_TIME value
                 * @property {number} SQL_CONVERT_INTERVAL_YEAR_MONTH=9 SQL_CONVERT_INTERVAL_YEAR_MONTH value
                 * @property {number} SQL_CONVERT_LONGVARBINARY=10 SQL_CONVERT_LONGVARBINARY value
                 * @property {number} SQL_CONVERT_LONGVARCHAR=11 SQL_CONVERT_LONGVARCHAR value
                 * @property {number} SQL_CONVERT_NUMERIC=12 SQL_CONVERT_NUMERIC value
                 * @property {number} SQL_CONVERT_REAL=13 SQL_CONVERT_REAL value
                 * @property {number} SQL_CONVERT_SMALLINT=14 SQL_CONVERT_SMALLINT value
                 * @property {number} SQL_CONVERT_TIME=15 SQL_CONVERT_TIME value
                 * @property {number} SQL_CONVERT_TIMESTAMP=16 SQL_CONVERT_TIMESTAMP value
                 * @property {number} SQL_CONVERT_TINYINT=17 SQL_CONVERT_TINYINT value
                 * @property {number} SQL_CONVERT_VARBINARY=18 SQL_CONVERT_VARBINARY value
                 * @property {number} SQL_CONVERT_VARCHAR=19 SQL_CONVERT_VARCHAR value
                 */
                sql.SqlSupportsConvert = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SQL_CONVERT_BIGINT"] = 0;
                    values[valuesById[1] = "SQL_CONVERT_BINARY"] = 1;
                    values[valuesById[2] = "SQL_CONVERT_BIT"] = 2;
                    values[valuesById[3] = "SQL_CONVERT_CHAR"] = 3;
                    values[valuesById[4] = "SQL_CONVERT_DATE"] = 4;
                    values[valuesById[5] = "SQL_CONVERT_DECIMAL"] = 5;
                    values[valuesById[6] = "SQL_CONVERT_FLOAT"] = 6;
                    values[valuesById[7] = "SQL_CONVERT_INTEGER"] = 7;
                    values[valuesById[8] = "SQL_CONVERT_INTERVAL_DAY_TIME"] = 8;
                    values[valuesById[9] = "SQL_CONVERT_INTERVAL_YEAR_MONTH"] = 9;
                    values[valuesById[10] = "SQL_CONVERT_LONGVARBINARY"] = 10;
                    values[valuesById[11] = "SQL_CONVERT_LONGVARCHAR"] = 11;
                    values[valuesById[12] = "SQL_CONVERT_NUMERIC"] = 12;
                    values[valuesById[13] = "SQL_CONVERT_REAL"] = 13;
                    values[valuesById[14] = "SQL_CONVERT_SMALLINT"] = 14;
                    values[valuesById[15] = "SQL_CONVERT_TIME"] = 15;
                    values[valuesById[16] = "SQL_CONVERT_TIMESTAMP"] = 16;
                    values[valuesById[17] = "SQL_CONVERT_TINYINT"] = 17;
                    values[valuesById[18] = "SQL_CONVERT_VARBINARY"] = 18;
                    values[valuesById[19] = "SQL_CONVERT_VARCHAR"] = 19;
                    return values;
                })();

                /**
                 * The JDBC/ODBC-defined type of any object.
                 * All the values here are the same as in the JDBC and ODBC specs.
                 * @name arrow.flight.protocol.sql.XdbcDataType
                 * @enum {number}
                 * @property {number} XDBC_UNKNOWN_TYPE=0 XDBC_UNKNOWN_TYPE value
                 * @property {number} XDBC_CHAR=1 XDBC_CHAR value
                 * @property {number} XDBC_NUMERIC=2 XDBC_NUMERIC value
                 * @property {number} XDBC_DECIMAL=3 XDBC_DECIMAL value
                 * @property {number} XDBC_INTEGER=4 XDBC_INTEGER value
                 * @property {number} XDBC_SMALLINT=5 XDBC_SMALLINT value
                 * @property {number} XDBC_FLOAT=6 XDBC_FLOAT value
                 * @property {number} XDBC_REAL=7 XDBC_REAL value
                 * @property {number} XDBC_DOUBLE=8 XDBC_DOUBLE value
                 * @property {number} XDBC_DATETIME=9 XDBC_DATETIME value
                 * @property {number} XDBC_INTERVAL=10 XDBC_INTERVAL value
                 * @property {number} XDBC_VARCHAR=12 XDBC_VARCHAR value
                 * @property {number} XDBC_DATE=91 XDBC_DATE value
                 * @property {number} XDBC_TIME=92 XDBC_TIME value
                 * @property {number} XDBC_TIMESTAMP=93 XDBC_TIMESTAMP value
                 * @property {number} XDBC_LONGVARCHAR=-1 XDBC_LONGVARCHAR value
                 * @property {number} XDBC_BINARY=-2 XDBC_BINARY value
                 * @property {number} XDBC_VARBINARY=-3 XDBC_VARBINARY value
                 * @property {number} XDBC_LONGVARBINARY=-4 XDBC_LONGVARBINARY value
                 * @property {number} XDBC_BIGINT=-5 XDBC_BIGINT value
                 * @property {number} XDBC_TINYINT=-6 XDBC_TINYINT value
                 * @property {number} XDBC_BIT=-7 XDBC_BIT value
                 * @property {number} XDBC_WCHAR=-8 XDBC_WCHAR value
                 * @property {number} XDBC_WVARCHAR=-9 XDBC_WVARCHAR value
                 */
                sql.XdbcDataType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "XDBC_UNKNOWN_TYPE"] = 0;
                    values[valuesById[1] = "XDBC_CHAR"] = 1;
                    values[valuesById[2] = "XDBC_NUMERIC"] = 2;
                    values[valuesById[3] = "XDBC_DECIMAL"] = 3;
                    values[valuesById[4] = "XDBC_INTEGER"] = 4;
                    values[valuesById[5] = "XDBC_SMALLINT"] = 5;
                    values[valuesById[6] = "XDBC_FLOAT"] = 6;
                    values[valuesById[7] = "XDBC_REAL"] = 7;
                    values[valuesById[8] = "XDBC_DOUBLE"] = 8;
                    values[valuesById[9] = "XDBC_DATETIME"] = 9;
                    values[valuesById[10] = "XDBC_INTERVAL"] = 10;
                    values[valuesById[12] = "XDBC_VARCHAR"] = 12;
                    values[valuesById[91] = "XDBC_DATE"] = 91;
                    values[valuesById[92] = "XDBC_TIME"] = 92;
                    values[valuesById[93] = "XDBC_TIMESTAMP"] = 93;
                    values[valuesById[-1] = "XDBC_LONGVARCHAR"] = -1;
                    values[valuesById[-2] = "XDBC_BINARY"] = -2;
                    values[valuesById[-3] = "XDBC_VARBINARY"] = -3;
                    values[valuesById[-4] = "XDBC_LONGVARBINARY"] = -4;
                    values[valuesById[-5] = "XDBC_BIGINT"] = -5;
                    values[valuesById[-6] = "XDBC_TINYINT"] = -6;
                    values[valuesById[-7] = "XDBC_BIT"] = -7;
                    values[valuesById[-8] = "XDBC_WCHAR"] = -8;
                    values[valuesById[-9] = "XDBC_WVARCHAR"] = -9;
                    return values;
                })();

                /**
                 * Detailed subtype information for XDBC_TYPE_DATETIME and XDBC_TYPE_INTERVAL.
                 * @name arrow.flight.protocol.sql.XdbcDatetimeSubcode
                 * @enum {number}
                 * @property {number} XDBC_SUBCODE_UNKNOWN=0 XDBC_SUBCODE_UNKNOWN value
                 * @property {number} XDBC_SUBCODE_YEAR=1 XDBC_SUBCODE_YEAR value
                 * @property {number} XDBC_SUBCODE_DATE=1 XDBC_SUBCODE_DATE value
                 * @property {number} XDBC_SUBCODE_TIME=2 XDBC_SUBCODE_TIME value
                 * @property {number} XDBC_SUBCODE_MONTH=2 XDBC_SUBCODE_MONTH value
                 * @property {number} XDBC_SUBCODE_TIMESTAMP=3 XDBC_SUBCODE_TIMESTAMP value
                 * @property {number} XDBC_SUBCODE_DAY=3 XDBC_SUBCODE_DAY value
                 * @property {number} XDBC_SUBCODE_TIME_WITH_TIMEZONE=4 XDBC_SUBCODE_TIME_WITH_TIMEZONE value
                 * @property {number} XDBC_SUBCODE_HOUR=4 XDBC_SUBCODE_HOUR value
                 * @property {number} XDBC_SUBCODE_TIMESTAMP_WITH_TIMEZONE=5 XDBC_SUBCODE_TIMESTAMP_WITH_TIMEZONE value
                 * @property {number} XDBC_SUBCODE_MINUTE=5 XDBC_SUBCODE_MINUTE value
                 * @property {number} XDBC_SUBCODE_SECOND=6 XDBC_SUBCODE_SECOND value
                 * @property {number} XDBC_SUBCODE_YEAR_TO_MONTH=7 XDBC_SUBCODE_YEAR_TO_MONTH value
                 * @property {number} XDBC_SUBCODE_DAY_TO_HOUR=8 XDBC_SUBCODE_DAY_TO_HOUR value
                 * @property {number} XDBC_SUBCODE_DAY_TO_MINUTE=9 XDBC_SUBCODE_DAY_TO_MINUTE value
                 * @property {number} XDBC_SUBCODE_DAY_TO_SECOND=10 XDBC_SUBCODE_DAY_TO_SECOND value
                 * @property {number} XDBC_SUBCODE_HOUR_TO_MINUTE=11 XDBC_SUBCODE_HOUR_TO_MINUTE value
                 * @property {number} XDBC_SUBCODE_HOUR_TO_SECOND=12 XDBC_SUBCODE_HOUR_TO_SECOND value
                 * @property {number} XDBC_SUBCODE_MINUTE_TO_SECOND=13 XDBC_SUBCODE_MINUTE_TO_SECOND value
                 * @property {number} XDBC_SUBCODE_INTERVAL_YEAR=101 XDBC_SUBCODE_INTERVAL_YEAR value
                 * @property {number} XDBC_SUBCODE_INTERVAL_MONTH=102 XDBC_SUBCODE_INTERVAL_MONTH value
                 * @property {number} XDBC_SUBCODE_INTERVAL_DAY=103 XDBC_SUBCODE_INTERVAL_DAY value
                 * @property {number} XDBC_SUBCODE_INTERVAL_HOUR=104 XDBC_SUBCODE_INTERVAL_HOUR value
                 * @property {number} XDBC_SUBCODE_INTERVAL_MINUTE=105 XDBC_SUBCODE_INTERVAL_MINUTE value
                 * @property {number} XDBC_SUBCODE_INTERVAL_SECOND=106 XDBC_SUBCODE_INTERVAL_SECOND value
                 * @property {number} XDBC_SUBCODE_INTERVAL_YEAR_TO_MONTH=107 XDBC_SUBCODE_INTERVAL_YEAR_TO_MONTH value
                 * @property {number} XDBC_SUBCODE_INTERVAL_DAY_TO_HOUR=108 XDBC_SUBCODE_INTERVAL_DAY_TO_HOUR value
                 * @property {number} XDBC_SUBCODE_INTERVAL_DAY_TO_MINUTE=109 XDBC_SUBCODE_INTERVAL_DAY_TO_MINUTE value
                 * @property {number} XDBC_SUBCODE_INTERVAL_DAY_TO_SECOND=110 XDBC_SUBCODE_INTERVAL_DAY_TO_SECOND value
                 * @property {number} XDBC_SUBCODE_INTERVAL_HOUR_TO_MINUTE=111 XDBC_SUBCODE_INTERVAL_HOUR_TO_MINUTE value
                 * @property {number} XDBC_SUBCODE_INTERVAL_HOUR_TO_SECOND=112 XDBC_SUBCODE_INTERVAL_HOUR_TO_SECOND value
                 * @property {number} XDBC_SUBCODE_INTERVAL_MINUTE_TO_SECOND=113 XDBC_SUBCODE_INTERVAL_MINUTE_TO_SECOND value
                 */
                sql.XdbcDatetimeSubcode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "XDBC_SUBCODE_UNKNOWN"] = 0;
                    values[valuesById[1] = "XDBC_SUBCODE_YEAR"] = 1;
                    values["XDBC_SUBCODE_DATE"] = 1;
                    values[valuesById[2] = "XDBC_SUBCODE_TIME"] = 2;
                    values["XDBC_SUBCODE_MONTH"] = 2;
                    values[valuesById[3] = "XDBC_SUBCODE_TIMESTAMP"] = 3;
                    values["XDBC_SUBCODE_DAY"] = 3;
                    values[valuesById[4] = "XDBC_SUBCODE_TIME_WITH_TIMEZONE"] = 4;
                    values["XDBC_SUBCODE_HOUR"] = 4;
                    values[valuesById[5] = "XDBC_SUBCODE_TIMESTAMP_WITH_TIMEZONE"] = 5;
                    values["XDBC_SUBCODE_MINUTE"] = 5;
                    values[valuesById[6] = "XDBC_SUBCODE_SECOND"] = 6;
                    values[valuesById[7] = "XDBC_SUBCODE_YEAR_TO_MONTH"] = 7;
                    values[valuesById[8] = "XDBC_SUBCODE_DAY_TO_HOUR"] = 8;
                    values[valuesById[9] = "XDBC_SUBCODE_DAY_TO_MINUTE"] = 9;
                    values[valuesById[10] = "XDBC_SUBCODE_DAY_TO_SECOND"] = 10;
                    values[valuesById[11] = "XDBC_SUBCODE_HOUR_TO_MINUTE"] = 11;
                    values[valuesById[12] = "XDBC_SUBCODE_HOUR_TO_SECOND"] = 12;
                    values[valuesById[13] = "XDBC_SUBCODE_MINUTE_TO_SECOND"] = 13;
                    values[valuesById[101] = "XDBC_SUBCODE_INTERVAL_YEAR"] = 101;
                    values[valuesById[102] = "XDBC_SUBCODE_INTERVAL_MONTH"] = 102;
                    values[valuesById[103] = "XDBC_SUBCODE_INTERVAL_DAY"] = 103;
                    values[valuesById[104] = "XDBC_SUBCODE_INTERVAL_HOUR"] = 104;
                    values[valuesById[105] = "XDBC_SUBCODE_INTERVAL_MINUTE"] = 105;
                    values[valuesById[106] = "XDBC_SUBCODE_INTERVAL_SECOND"] = 106;
                    values[valuesById[107] = "XDBC_SUBCODE_INTERVAL_YEAR_TO_MONTH"] = 107;
                    values[valuesById[108] = "XDBC_SUBCODE_INTERVAL_DAY_TO_HOUR"] = 108;
                    values[valuesById[109] = "XDBC_SUBCODE_INTERVAL_DAY_TO_MINUTE"] = 109;
                    values[valuesById[110] = "XDBC_SUBCODE_INTERVAL_DAY_TO_SECOND"] = 110;
                    values[valuesById[111] = "XDBC_SUBCODE_INTERVAL_HOUR_TO_MINUTE"] = 111;
                    values[valuesById[112] = "XDBC_SUBCODE_INTERVAL_HOUR_TO_SECOND"] = 112;
                    values[valuesById[113] = "XDBC_SUBCODE_INTERVAL_MINUTE_TO_SECOND"] = 113;
                    return values;
                })();

                /**
                 * Nullable enum.
                 * @name arrow.flight.protocol.sql.Nullable
                 * @enum {number}
                 * @property {number} NULLABILITY_NO_NULLS=0 Indicates that the fields does not allow the use of null values.
                 * @property {number} NULLABILITY_NULLABLE=1 Indicates that the fields allow the use of null values.
                 * @property {number} NULLABILITY_UNKNOWN=2 Indicates that nullability of the fields cannot be determined.
                 */
                sql.Nullable = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "NULLABILITY_NO_NULLS"] = 0;
                    values[valuesById[1] = "NULLABILITY_NULLABLE"] = 1;
                    values[valuesById[2] = "NULLABILITY_UNKNOWN"] = 2;
                    return values;
                })();

                /**
                 * Searchable enum.
                 * @name arrow.flight.protocol.sql.Searchable
                 * @enum {number}
                 * @property {number} SEARCHABLE_NONE=0 Indicates that column cannot be used in a WHERE clause.
                 * @property {number} SEARCHABLE_CHAR=1 Indicates that the column can be used in a WHERE clause if it is using a
                 * LIKE operator.
                 * @property {number} SEARCHABLE_BASIC=2 Indicates that the column can be used In a WHERE clause with any
                 * operator other than LIKE.
                 * 
                 * - Allowed operators: comparison, quantified comparison, BETWEEN,
                 * DISTINCT, IN, MATCH, and UNIQUE.
                 * @property {number} SEARCHABLE_FULL=3 Indicates that the column can be used in a WHERE clause using any operator.
                 */
                sql.Searchable = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SEARCHABLE_NONE"] = 0;
                    values[valuesById[1] = "SEARCHABLE_CHAR"] = 1;
                    values[valuesById[2] = "SEARCHABLE_BASIC"] = 2;
                    values[valuesById[3] = "SEARCHABLE_FULL"] = 3;
                    return values;
                })();

                sql.CommandGetXdbcTypeInfo = (function() {

                    /**
                     * Properties of a CommandGetXdbcTypeInfo.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandGetXdbcTypeInfo
                     * @property {number|null} [dataType] CommandGetXdbcTypeInfo dataType
                     */

                    /**
                     * Constructs a new CommandGetXdbcTypeInfo.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandGetXdbcTypeInfo.
                     * @implements ICommandGetXdbcTypeInfo
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandGetXdbcTypeInfo=} [properties] Properties to set
                     */
                    function CommandGetXdbcTypeInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandGetXdbcTypeInfo dataType.
                     * @member {number|null|undefined} dataType
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @instance
                     */
                    CommandGetXdbcTypeInfo.prototype.dataType = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandGetXdbcTypeInfo _dataType.
                     * @member {"dataType"|undefined} _dataType
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @instance
                     */
                    Object.defineProperty(CommandGetXdbcTypeInfo.prototype, "_dataType", {
                        get: $util.oneOfGetter($oneOfFields = ["dataType"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandGetXdbcTypeInfo instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetXdbcTypeInfo=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandGetXdbcTypeInfo} CommandGetXdbcTypeInfo instance
                     */
                    CommandGetXdbcTypeInfo.create = function create(properties) {
                        return new CommandGetXdbcTypeInfo(properties);
                    };

                    /**
                     * Encodes the specified CommandGetXdbcTypeInfo message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetXdbcTypeInfo} message CommandGetXdbcTypeInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetXdbcTypeInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.dataType != null && Object.hasOwnProperty.call(message, "dataType"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.dataType);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandGetXdbcTypeInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetXdbcTypeInfo} message CommandGetXdbcTypeInfo message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetXdbcTypeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandGetXdbcTypeInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetXdbcTypeInfo} CommandGetXdbcTypeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetXdbcTypeInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.dataType = reader.int32();
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
                     * Decodes a CommandGetXdbcTypeInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetXdbcTypeInfo} CommandGetXdbcTypeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetXdbcTypeInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandGetXdbcTypeInfo message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandGetXdbcTypeInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.dataType != null && message.hasOwnProperty("dataType")) {
                            properties._dataType = 1;
                            if (!$util.isInteger(message.dataType))
                                return "dataType: integer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a CommandGetXdbcTypeInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandGetXdbcTypeInfo} CommandGetXdbcTypeInfo
                     */
                    CommandGetXdbcTypeInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandGetXdbcTypeInfo();
                        if (object.dataType != null)
                            message.dataType = object.dataType | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandGetXdbcTypeInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandGetXdbcTypeInfo} message CommandGetXdbcTypeInfo
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandGetXdbcTypeInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.dataType != null && message.hasOwnProperty("dataType")) {
                            object.dataType = message.dataType;
                            if (options.oneofs)
                                object._dataType = "dataType";
                        }
                        return object;
                    };

                    /**
                     * Converts this CommandGetXdbcTypeInfo to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandGetXdbcTypeInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandGetXdbcTypeInfo
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandGetXdbcTypeInfo
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandGetXdbcTypeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandGetXdbcTypeInfo";
                    };

                    return CommandGetXdbcTypeInfo;
                })();

                sql.CommandGetCatalogs = (function() {

                    /**
                     * Properties of a CommandGetCatalogs.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandGetCatalogs
                     */

                    /**
                     * Constructs a new CommandGetCatalogs.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandGetCatalogs.
                     * @implements ICommandGetCatalogs
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandGetCatalogs=} [properties] Properties to set
                     */
                    function CommandGetCatalogs(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new CommandGetCatalogs instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandGetCatalogs
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetCatalogs=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandGetCatalogs} CommandGetCatalogs instance
                     */
                    CommandGetCatalogs.create = function create(properties) {
                        return new CommandGetCatalogs(properties);
                    };

                    /**
                     * Encodes the specified CommandGetCatalogs message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCatalogs.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandGetCatalogs
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetCatalogs} message CommandGetCatalogs message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetCatalogs.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandGetCatalogs message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCatalogs.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetCatalogs
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetCatalogs} message CommandGetCatalogs message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetCatalogs.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandGetCatalogs message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandGetCatalogs
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetCatalogs} CommandGetCatalogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetCatalogs.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandGetCatalogs();
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
                     * Decodes a CommandGetCatalogs message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetCatalogs
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetCatalogs} CommandGetCatalogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetCatalogs.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandGetCatalogs message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandGetCatalogs
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandGetCatalogs.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a CommandGetCatalogs message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandGetCatalogs
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandGetCatalogs} CommandGetCatalogs
                     */
                    CommandGetCatalogs.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandGetCatalogs)
                            return object;
                        return new $root.arrow.flight.protocol.sql.CommandGetCatalogs();
                    };

                    /**
                     * Creates a plain object from a CommandGetCatalogs message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandGetCatalogs
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandGetCatalogs} message CommandGetCatalogs
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandGetCatalogs.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this CommandGetCatalogs to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandGetCatalogs
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandGetCatalogs.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandGetCatalogs
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandGetCatalogs
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandGetCatalogs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandGetCatalogs";
                    };

                    return CommandGetCatalogs;
                })();

                sql.CommandGetDbSchemas = (function() {

                    /**
                     * Properties of a CommandGetDbSchemas.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandGetDbSchemas
                     * @property {string|null} [catalog] CommandGetDbSchemas catalog
                     * @property {string|null} [dbSchemaFilterPattern] CommandGetDbSchemas dbSchemaFilterPattern
                     */

                    /**
                     * Constructs a new CommandGetDbSchemas.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandGetDbSchemas.
                     * @implements ICommandGetDbSchemas
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandGetDbSchemas=} [properties] Properties to set
                     */
                    function CommandGetDbSchemas(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandGetDbSchemas catalog.
                     * @member {string|null|undefined} catalog
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @instance
                     */
                    CommandGetDbSchemas.prototype.catalog = null;

                    /**
                     * CommandGetDbSchemas dbSchemaFilterPattern.
                     * @member {string|null|undefined} dbSchemaFilterPattern
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @instance
                     */
                    CommandGetDbSchemas.prototype.dbSchemaFilterPattern = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandGetDbSchemas _catalog.
                     * @member {"catalog"|undefined} _catalog
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @instance
                     */
                    Object.defineProperty(CommandGetDbSchemas.prototype, "_catalog", {
                        get: $util.oneOfGetter($oneOfFields = ["catalog"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandGetDbSchemas _dbSchemaFilterPattern.
                     * @member {"dbSchemaFilterPattern"|undefined} _dbSchemaFilterPattern
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @instance
                     */
                    Object.defineProperty(CommandGetDbSchemas.prototype, "_dbSchemaFilterPattern", {
                        get: $util.oneOfGetter($oneOfFields = ["dbSchemaFilterPattern"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandGetDbSchemas instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetDbSchemas=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandGetDbSchemas} CommandGetDbSchemas instance
                     */
                    CommandGetDbSchemas.create = function create(properties) {
                        return new CommandGetDbSchemas(properties);
                    };

                    /**
                     * Encodes the specified CommandGetDbSchemas message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetDbSchemas.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetDbSchemas} message CommandGetDbSchemas message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetDbSchemas.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.catalog != null && Object.hasOwnProperty.call(message, "catalog"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.catalog);
                        if (message.dbSchemaFilterPattern != null && Object.hasOwnProperty.call(message, "dbSchemaFilterPattern"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.dbSchemaFilterPattern);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandGetDbSchemas message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetDbSchemas.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetDbSchemas} message CommandGetDbSchemas message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetDbSchemas.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandGetDbSchemas message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetDbSchemas} CommandGetDbSchemas
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetDbSchemas.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandGetDbSchemas();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.catalog = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.dbSchemaFilterPattern = reader.string();
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
                     * Decodes a CommandGetDbSchemas message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetDbSchemas} CommandGetDbSchemas
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetDbSchemas.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandGetDbSchemas message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandGetDbSchemas.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            properties._catalog = 1;
                            if (!$util.isString(message.catalog))
                                return "catalog: string expected";
                        }
                        if (message.dbSchemaFilterPattern != null && message.hasOwnProperty("dbSchemaFilterPattern")) {
                            properties._dbSchemaFilterPattern = 1;
                            if (!$util.isString(message.dbSchemaFilterPattern))
                                return "dbSchemaFilterPattern: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a CommandGetDbSchemas message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandGetDbSchemas} CommandGetDbSchemas
                     */
                    CommandGetDbSchemas.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandGetDbSchemas)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandGetDbSchemas();
                        if (object.catalog != null)
                            message.catalog = String(object.catalog);
                        if (object.dbSchemaFilterPattern != null)
                            message.dbSchemaFilterPattern = String(object.dbSchemaFilterPattern);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandGetDbSchemas message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandGetDbSchemas} message CommandGetDbSchemas
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandGetDbSchemas.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            object.catalog = message.catalog;
                            if (options.oneofs)
                                object._catalog = "catalog";
                        }
                        if (message.dbSchemaFilterPattern != null && message.hasOwnProperty("dbSchemaFilterPattern")) {
                            object.dbSchemaFilterPattern = message.dbSchemaFilterPattern;
                            if (options.oneofs)
                                object._dbSchemaFilterPattern = "dbSchemaFilterPattern";
                        }
                        return object;
                    };

                    /**
                     * Converts this CommandGetDbSchemas to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandGetDbSchemas.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandGetDbSchemas
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandGetDbSchemas
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandGetDbSchemas.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandGetDbSchemas";
                    };

                    return CommandGetDbSchemas;
                })();

                sql.CommandGetTables = (function() {

                    /**
                     * Properties of a CommandGetTables.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandGetTables
                     * @property {string|null} [catalog] CommandGetTables catalog
                     * @property {string|null} [dbSchemaFilterPattern] CommandGetTables dbSchemaFilterPattern
                     * @property {string|null} [tableNameFilterPattern] CommandGetTables tableNameFilterPattern
                     * @property {Array.<string>|null} [tableTypes] CommandGetTables tableTypes
                     * @property {boolean|null} [includeSchema] CommandGetTables includeSchema
                     */

                    /**
                     * Constructs a new CommandGetTables.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandGetTables.
                     * @implements ICommandGetTables
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandGetTables=} [properties] Properties to set
                     */
                    function CommandGetTables(properties) {
                        this.tableTypes = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandGetTables catalog.
                     * @member {string|null|undefined} catalog
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @instance
                     */
                    CommandGetTables.prototype.catalog = null;

                    /**
                     * CommandGetTables dbSchemaFilterPattern.
                     * @member {string|null|undefined} dbSchemaFilterPattern
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @instance
                     */
                    CommandGetTables.prototype.dbSchemaFilterPattern = null;

                    /**
                     * CommandGetTables tableNameFilterPattern.
                     * @member {string|null|undefined} tableNameFilterPattern
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @instance
                     */
                    CommandGetTables.prototype.tableNameFilterPattern = null;

                    /**
                     * CommandGetTables tableTypes.
                     * @member {Array.<string>} tableTypes
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @instance
                     */
                    CommandGetTables.prototype.tableTypes = $util.emptyArray;

                    /**
                     * CommandGetTables includeSchema.
                     * @member {boolean} includeSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @instance
                     */
                    CommandGetTables.prototype.includeSchema = false;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandGetTables _catalog.
                     * @member {"catalog"|undefined} _catalog
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @instance
                     */
                    Object.defineProperty(CommandGetTables.prototype, "_catalog", {
                        get: $util.oneOfGetter($oneOfFields = ["catalog"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandGetTables _dbSchemaFilterPattern.
                     * @member {"dbSchemaFilterPattern"|undefined} _dbSchemaFilterPattern
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @instance
                     */
                    Object.defineProperty(CommandGetTables.prototype, "_dbSchemaFilterPattern", {
                        get: $util.oneOfGetter($oneOfFields = ["dbSchemaFilterPattern"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandGetTables _tableNameFilterPattern.
                     * @member {"tableNameFilterPattern"|undefined} _tableNameFilterPattern
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @instance
                     */
                    Object.defineProperty(CommandGetTables.prototype, "_tableNameFilterPattern", {
                        get: $util.oneOfGetter($oneOfFields = ["tableNameFilterPattern"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandGetTables instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetTables=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandGetTables} CommandGetTables instance
                     */
                    CommandGetTables.create = function create(properties) {
                        return new CommandGetTables(properties);
                    };

                    /**
                     * Encodes the specified CommandGetTables message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTables.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetTables} message CommandGetTables message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetTables.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.catalog != null && Object.hasOwnProperty.call(message, "catalog"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.catalog);
                        if (message.dbSchemaFilterPattern != null && Object.hasOwnProperty.call(message, "dbSchemaFilterPattern"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.dbSchemaFilterPattern);
                        if (message.tableNameFilterPattern != null && Object.hasOwnProperty.call(message, "tableNameFilterPattern"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableNameFilterPattern);
                        if (message.tableTypes != null && message.tableTypes.length)
                            for (var i = 0; i < message.tableTypes.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tableTypes[i]);
                        if (message.includeSchema != null && Object.hasOwnProperty.call(message, "includeSchema"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.includeSchema);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandGetTables message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTables.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetTables} message CommandGetTables message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetTables.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandGetTables message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetTables} CommandGetTables
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetTables.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandGetTables();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.catalog = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.dbSchemaFilterPattern = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.tableNameFilterPattern = reader.string();
                                    break;
                                }
                            case 4: {
                                    if (!(message.tableTypes && message.tableTypes.length))
                                        message.tableTypes = [];
                                    message.tableTypes.push(reader.string());
                                    break;
                                }
                            case 5: {
                                    message.includeSchema = reader.bool();
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
                     * Decodes a CommandGetTables message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetTables} CommandGetTables
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetTables.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandGetTables message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandGetTables.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            properties._catalog = 1;
                            if (!$util.isString(message.catalog))
                                return "catalog: string expected";
                        }
                        if (message.dbSchemaFilterPattern != null && message.hasOwnProperty("dbSchemaFilterPattern")) {
                            properties._dbSchemaFilterPattern = 1;
                            if (!$util.isString(message.dbSchemaFilterPattern))
                                return "dbSchemaFilterPattern: string expected";
                        }
                        if (message.tableNameFilterPattern != null && message.hasOwnProperty("tableNameFilterPattern")) {
                            properties._tableNameFilterPattern = 1;
                            if (!$util.isString(message.tableNameFilterPattern))
                                return "tableNameFilterPattern: string expected";
                        }
                        if (message.tableTypes != null && message.hasOwnProperty("tableTypes")) {
                            if (!Array.isArray(message.tableTypes))
                                return "tableTypes: array expected";
                            for (var i = 0; i < message.tableTypes.length; ++i)
                                if (!$util.isString(message.tableTypes[i]))
                                    return "tableTypes: string[] expected";
                        }
                        if (message.includeSchema != null && message.hasOwnProperty("includeSchema"))
                            if (typeof message.includeSchema !== "boolean")
                                return "includeSchema: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a CommandGetTables message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandGetTables} CommandGetTables
                     */
                    CommandGetTables.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandGetTables)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandGetTables();
                        if (object.catalog != null)
                            message.catalog = String(object.catalog);
                        if (object.dbSchemaFilterPattern != null)
                            message.dbSchemaFilterPattern = String(object.dbSchemaFilterPattern);
                        if (object.tableNameFilterPattern != null)
                            message.tableNameFilterPattern = String(object.tableNameFilterPattern);
                        if (object.tableTypes) {
                            if (!Array.isArray(object.tableTypes))
                                throw TypeError(".arrow.flight.protocol.sql.CommandGetTables.tableTypes: array expected");
                            message.tableTypes = [];
                            for (var i = 0; i < object.tableTypes.length; ++i)
                                message.tableTypes[i] = String(object.tableTypes[i]);
                        }
                        if (object.includeSchema != null)
                            message.includeSchema = Boolean(object.includeSchema);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandGetTables message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandGetTables} message CommandGetTables
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandGetTables.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.tableTypes = [];
                        if (options.defaults)
                            object.includeSchema = false;
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            object.catalog = message.catalog;
                            if (options.oneofs)
                                object._catalog = "catalog";
                        }
                        if (message.dbSchemaFilterPattern != null && message.hasOwnProperty("dbSchemaFilterPattern")) {
                            object.dbSchemaFilterPattern = message.dbSchemaFilterPattern;
                            if (options.oneofs)
                                object._dbSchemaFilterPattern = "dbSchemaFilterPattern";
                        }
                        if (message.tableNameFilterPattern != null && message.hasOwnProperty("tableNameFilterPattern")) {
                            object.tableNameFilterPattern = message.tableNameFilterPattern;
                            if (options.oneofs)
                                object._tableNameFilterPattern = "tableNameFilterPattern";
                        }
                        if (message.tableTypes && message.tableTypes.length) {
                            object.tableTypes = [];
                            for (var j = 0; j < message.tableTypes.length; ++j)
                                object.tableTypes[j] = message.tableTypes[j];
                        }
                        if (message.includeSchema != null && message.hasOwnProperty("includeSchema"))
                            object.includeSchema = message.includeSchema;
                        return object;
                    };

                    /**
                     * Converts this CommandGetTables to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandGetTables.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandGetTables
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandGetTables
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandGetTables.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandGetTables";
                    };

                    return CommandGetTables;
                })();

                sql.CommandGetTableTypes = (function() {

                    /**
                     * Properties of a CommandGetTableTypes.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandGetTableTypes
                     */

                    /**
                     * Constructs a new CommandGetTableTypes.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandGetTableTypes.
                     * @implements ICommandGetTableTypes
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandGetTableTypes=} [properties] Properties to set
                     */
                    function CommandGetTableTypes(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new CommandGetTableTypes instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandGetTableTypes
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetTableTypes=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandGetTableTypes} CommandGetTableTypes instance
                     */
                    CommandGetTableTypes.create = function create(properties) {
                        return new CommandGetTableTypes(properties);
                    };

                    /**
                     * Encodes the specified CommandGetTableTypes message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTableTypes.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandGetTableTypes
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetTableTypes} message CommandGetTableTypes message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetTableTypes.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandGetTableTypes message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTableTypes.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetTableTypes
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetTableTypes} message CommandGetTableTypes message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetTableTypes.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandGetTableTypes message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandGetTableTypes
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetTableTypes} CommandGetTableTypes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetTableTypes.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandGetTableTypes();
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
                     * Decodes a CommandGetTableTypes message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetTableTypes
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetTableTypes} CommandGetTableTypes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetTableTypes.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandGetTableTypes message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandGetTableTypes
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandGetTableTypes.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a CommandGetTableTypes message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandGetTableTypes
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandGetTableTypes} CommandGetTableTypes
                     */
                    CommandGetTableTypes.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandGetTableTypes)
                            return object;
                        return new $root.arrow.flight.protocol.sql.CommandGetTableTypes();
                    };

                    /**
                     * Creates a plain object from a CommandGetTableTypes message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandGetTableTypes
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandGetTableTypes} message CommandGetTableTypes
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandGetTableTypes.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this CommandGetTableTypes to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandGetTableTypes
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandGetTableTypes.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandGetTableTypes
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandGetTableTypes
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandGetTableTypes.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandGetTableTypes";
                    };

                    return CommandGetTableTypes;
                })();

                sql.CommandGetPrimaryKeys = (function() {

                    /**
                     * Properties of a CommandGetPrimaryKeys.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandGetPrimaryKeys
                     * @property {string|null} [catalog] CommandGetPrimaryKeys catalog
                     * @property {string|null} [dbSchema] CommandGetPrimaryKeys dbSchema
                     * @property {string|null} [table] CommandGetPrimaryKeys table
                     */

                    /**
                     * Constructs a new CommandGetPrimaryKeys.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandGetPrimaryKeys.
                     * @implements ICommandGetPrimaryKeys
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandGetPrimaryKeys=} [properties] Properties to set
                     */
                    function CommandGetPrimaryKeys(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandGetPrimaryKeys catalog.
                     * @member {string|null|undefined} catalog
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @instance
                     */
                    CommandGetPrimaryKeys.prototype.catalog = null;

                    /**
                     * CommandGetPrimaryKeys dbSchema.
                     * @member {string|null|undefined} dbSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @instance
                     */
                    CommandGetPrimaryKeys.prototype.dbSchema = null;

                    /**
                     * CommandGetPrimaryKeys table.
                     * @member {string} table
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @instance
                     */
                    CommandGetPrimaryKeys.prototype.table = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandGetPrimaryKeys _catalog.
                     * @member {"catalog"|undefined} _catalog
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @instance
                     */
                    Object.defineProperty(CommandGetPrimaryKeys.prototype, "_catalog", {
                        get: $util.oneOfGetter($oneOfFields = ["catalog"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandGetPrimaryKeys _dbSchema.
                     * @member {"dbSchema"|undefined} _dbSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @instance
                     */
                    Object.defineProperty(CommandGetPrimaryKeys.prototype, "_dbSchema", {
                        get: $util.oneOfGetter($oneOfFields = ["dbSchema"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandGetPrimaryKeys instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetPrimaryKeys=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandGetPrimaryKeys} CommandGetPrimaryKeys instance
                     */
                    CommandGetPrimaryKeys.create = function create(properties) {
                        return new CommandGetPrimaryKeys(properties);
                    };

                    /**
                     * Encodes the specified CommandGetPrimaryKeys message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetPrimaryKeys.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetPrimaryKeys} message CommandGetPrimaryKeys message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetPrimaryKeys.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.catalog != null && Object.hasOwnProperty.call(message, "catalog"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.catalog);
                        if (message.dbSchema != null && Object.hasOwnProperty.call(message, "dbSchema"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.dbSchema);
                        if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.table);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandGetPrimaryKeys message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetPrimaryKeys.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetPrimaryKeys} message CommandGetPrimaryKeys message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetPrimaryKeys.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandGetPrimaryKeys message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetPrimaryKeys} CommandGetPrimaryKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetPrimaryKeys.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandGetPrimaryKeys();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.catalog = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.dbSchema = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.table = reader.string();
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
                     * Decodes a CommandGetPrimaryKeys message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetPrimaryKeys} CommandGetPrimaryKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetPrimaryKeys.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandGetPrimaryKeys message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandGetPrimaryKeys.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            properties._catalog = 1;
                            if (!$util.isString(message.catalog))
                                return "catalog: string expected";
                        }
                        if (message.dbSchema != null && message.hasOwnProperty("dbSchema")) {
                            properties._dbSchema = 1;
                            if (!$util.isString(message.dbSchema))
                                return "dbSchema: string expected";
                        }
                        if (message.table != null && message.hasOwnProperty("table"))
                            if (!$util.isString(message.table))
                                return "table: string expected";
                        return null;
                    };

                    /**
                     * Creates a CommandGetPrimaryKeys message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandGetPrimaryKeys} CommandGetPrimaryKeys
                     */
                    CommandGetPrimaryKeys.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandGetPrimaryKeys)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandGetPrimaryKeys();
                        if (object.catalog != null)
                            message.catalog = String(object.catalog);
                        if (object.dbSchema != null)
                            message.dbSchema = String(object.dbSchema);
                        if (object.table != null)
                            message.table = String(object.table);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandGetPrimaryKeys message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandGetPrimaryKeys} message CommandGetPrimaryKeys
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandGetPrimaryKeys.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.table = "";
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            object.catalog = message.catalog;
                            if (options.oneofs)
                                object._catalog = "catalog";
                        }
                        if (message.dbSchema != null && message.hasOwnProperty("dbSchema")) {
                            object.dbSchema = message.dbSchema;
                            if (options.oneofs)
                                object._dbSchema = "dbSchema";
                        }
                        if (message.table != null && message.hasOwnProperty("table"))
                            object.table = message.table;
                        return object;
                    };

                    /**
                     * Converts this CommandGetPrimaryKeys to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandGetPrimaryKeys.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandGetPrimaryKeys
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandGetPrimaryKeys
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandGetPrimaryKeys.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandGetPrimaryKeys";
                    };

                    return CommandGetPrimaryKeys;
                })();

                /**
                 * UpdateDeleteRules enum.
                 * @name arrow.flight.protocol.sql.UpdateDeleteRules
                 * @enum {number}
                 * @property {number} CASCADE=0 CASCADE value
                 * @property {number} RESTRICT=1 RESTRICT value
                 * @property {number} SET_NULL=2 SET_NULL value
                 * @property {number} NO_ACTION=3 NO_ACTION value
                 * @property {number} SET_DEFAULT=4 SET_DEFAULT value
                 */
                sql.UpdateDeleteRules = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CASCADE"] = 0;
                    values[valuesById[1] = "RESTRICT"] = 1;
                    values[valuesById[2] = "SET_NULL"] = 2;
                    values[valuesById[3] = "NO_ACTION"] = 3;
                    values[valuesById[4] = "SET_DEFAULT"] = 4;
                    return values;
                })();

                sql.CommandGetExportedKeys = (function() {

                    /**
                     * Properties of a CommandGetExportedKeys.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandGetExportedKeys
                     * @property {string|null} [catalog] CommandGetExportedKeys catalog
                     * @property {string|null} [dbSchema] CommandGetExportedKeys dbSchema
                     * @property {string|null} [table] CommandGetExportedKeys table
                     */

                    /**
                     * Constructs a new CommandGetExportedKeys.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandGetExportedKeys.
                     * @implements ICommandGetExportedKeys
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandGetExportedKeys=} [properties] Properties to set
                     */
                    function CommandGetExportedKeys(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandGetExportedKeys catalog.
                     * @member {string|null|undefined} catalog
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @instance
                     */
                    CommandGetExportedKeys.prototype.catalog = null;

                    /**
                     * CommandGetExportedKeys dbSchema.
                     * @member {string|null|undefined} dbSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @instance
                     */
                    CommandGetExportedKeys.prototype.dbSchema = null;

                    /**
                     * CommandGetExportedKeys table.
                     * @member {string} table
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @instance
                     */
                    CommandGetExportedKeys.prototype.table = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandGetExportedKeys _catalog.
                     * @member {"catalog"|undefined} _catalog
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @instance
                     */
                    Object.defineProperty(CommandGetExportedKeys.prototype, "_catalog", {
                        get: $util.oneOfGetter($oneOfFields = ["catalog"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandGetExportedKeys _dbSchema.
                     * @member {"dbSchema"|undefined} _dbSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @instance
                     */
                    Object.defineProperty(CommandGetExportedKeys.prototype, "_dbSchema", {
                        get: $util.oneOfGetter($oneOfFields = ["dbSchema"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandGetExportedKeys instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetExportedKeys=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandGetExportedKeys} CommandGetExportedKeys instance
                     */
                    CommandGetExportedKeys.create = function create(properties) {
                        return new CommandGetExportedKeys(properties);
                    };

                    /**
                     * Encodes the specified CommandGetExportedKeys message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetExportedKeys.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetExportedKeys} message CommandGetExportedKeys message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetExportedKeys.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.catalog != null && Object.hasOwnProperty.call(message, "catalog"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.catalog);
                        if (message.dbSchema != null && Object.hasOwnProperty.call(message, "dbSchema"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.dbSchema);
                        if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.table);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandGetExportedKeys message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetExportedKeys.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetExportedKeys} message CommandGetExportedKeys message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetExportedKeys.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandGetExportedKeys message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetExportedKeys} CommandGetExportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetExportedKeys.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandGetExportedKeys();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.catalog = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.dbSchema = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.table = reader.string();
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
                     * Decodes a CommandGetExportedKeys message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetExportedKeys} CommandGetExportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetExportedKeys.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandGetExportedKeys message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandGetExportedKeys.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            properties._catalog = 1;
                            if (!$util.isString(message.catalog))
                                return "catalog: string expected";
                        }
                        if (message.dbSchema != null && message.hasOwnProperty("dbSchema")) {
                            properties._dbSchema = 1;
                            if (!$util.isString(message.dbSchema))
                                return "dbSchema: string expected";
                        }
                        if (message.table != null && message.hasOwnProperty("table"))
                            if (!$util.isString(message.table))
                                return "table: string expected";
                        return null;
                    };

                    /**
                     * Creates a CommandGetExportedKeys message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandGetExportedKeys} CommandGetExportedKeys
                     */
                    CommandGetExportedKeys.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandGetExportedKeys)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandGetExportedKeys();
                        if (object.catalog != null)
                            message.catalog = String(object.catalog);
                        if (object.dbSchema != null)
                            message.dbSchema = String(object.dbSchema);
                        if (object.table != null)
                            message.table = String(object.table);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandGetExportedKeys message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandGetExportedKeys} message CommandGetExportedKeys
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandGetExportedKeys.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.table = "";
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            object.catalog = message.catalog;
                            if (options.oneofs)
                                object._catalog = "catalog";
                        }
                        if (message.dbSchema != null && message.hasOwnProperty("dbSchema")) {
                            object.dbSchema = message.dbSchema;
                            if (options.oneofs)
                                object._dbSchema = "dbSchema";
                        }
                        if (message.table != null && message.hasOwnProperty("table"))
                            object.table = message.table;
                        return object;
                    };

                    /**
                     * Converts this CommandGetExportedKeys to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandGetExportedKeys.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandGetExportedKeys
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandGetExportedKeys
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandGetExportedKeys.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandGetExportedKeys";
                    };

                    return CommandGetExportedKeys;
                })();

                sql.CommandGetImportedKeys = (function() {

                    /**
                     * Properties of a CommandGetImportedKeys.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandGetImportedKeys
                     * @property {string|null} [catalog] CommandGetImportedKeys catalog
                     * @property {string|null} [dbSchema] CommandGetImportedKeys dbSchema
                     * @property {string|null} [table] CommandGetImportedKeys table
                     */

                    /**
                     * Constructs a new CommandGetImportedKeys.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandGetImportedKeys.
                     * @implements ICommandGetImportedKeys
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandGetImportedKeys=} [properties] Properties to set
                     */
                    function CommandGetImportedKeys(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandGetImportedKeys catalog.
                     * @member {string|null|undefined} catalog
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @instance
                     */
                    CommandGetImportedKeys.prototype.catalog = null;

                    /**
                     * CommandGetImportedKeys dbSchema.
                     * @member {string|null|undefined} dbSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @instance
                     */
                    CommandGetImportedKeys.prototype.dbSchema = null;

                    /**
                     * CommandGetImportedKeys table.
                     * @member {string} table
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @instance
                     */
                    CommandGetImportedKeys.prototype.table = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandGetImportedKeys _catalog.
                     * @member {"catalog"|undefined} _catalog
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @instance
                     */
                    Object.defineProperty(CommandGetImportedKeys.prototype, "_catalog", {
                        get: $util.oneOfGetter($oneOfFields = ["catalog"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandGetImportedKeys _dbSchema.
                     * @member {"dbSchema"|undefined} _dbSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @instance
                     */
                    Object.defineProperty(CommandGetImportedKeys.prototype, "_dbSchema", {
                        get: $util.oneOfGetter($oneOfFields = ["dbSchema"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandGetImportedKeys instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetImportedKeys=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandGetImportedKeys} CommandGetImportedKeys instance
                     */
                    CommandGetImportedKeys.create = function create(properties) {
                        return new CommandGetImportedKeys(properties);
                    };

                    /**
                     * Encodes the specified CommandGetImportedKeys message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetImportedKeys.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetImportedKeys} message CommandGetImportedKeys message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetImportedKeys.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.catalog != null && Object.hasOwnProperty.call(message, "catalog"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.catalog);
                        if (message.dbSchema != null && Object.hasOwnProperty.call(message, "dbSchema"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.dbSchema);
                        if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.table);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandGetImportedKeys message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetImportedKeys.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetImportedKeys} message CommandGetImportedKeys message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetImportedKeys.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandGetImportedKeys message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetImportedKeys} CommandGetImportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetImportedKeys.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandGetImportedKeys();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.catalog = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.dbSchema = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.table = reader.string();
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
                     * Decodes a CommandGetImportedKeys message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetImportedKeys} CommandGetImportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetImportedKeys.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandGetImportedKeys message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandGetImportedKeys.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            properties._catalog = 1;
                            if (!$util.isString(message.catalog))
                                return "catalog: string expected";
                        }
                        if (message.dbSchema != null && message.hasOwnProperty("dbSchema")) {
                            properties._dbSchema = 1;
                            if (!$util.isString(message.dbSchema))
                                return "dbSchema: string expected";
                        }
                        if (message.table != null && message.hasOwnProperty("table"))
                            if (!$util.isString(message.table))
                                return "table: string expected";
                        return null;
                    };

                    /**
                     * Creates a CommandGetImportedKeys message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandGetImportedKeys} CommandGetImportedKeys
                     */
                    CommandGetImportedKeys.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandGetImportedKeys)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandGetImportedKeys();
                        if (object.catalog != null)
                            message.catalog = String(object.catalog);
                        if (object.dbSchema != null)
                            message.dbSchema = String(object.dbSchema);
                        if (object.table != null)
                            message.table = String(object.table);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandGetImportedKeys message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandGetImportedKeys} message CommandGetImportedKeys
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandGetImportedKeys.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.table = "";
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            object.catalog = message.catalog;
                            if (options.oneofs)
                                object._catalog = "catalog";
                        }
                        if (message.dbSchema != null && message.hasOwnProperty("dbSchema")) {
                            object.dbSchema = message.dbSchema;
                            if (options.oneofs)
                                object._dbSchema = "dbSchema";
                        }
                        if (message.table != null && message.hasOwnProperty("table"))
                            object.table = message.table;
                        return object;
                    };

                    /**
                     * Converts this CommandGetImportedKeys to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandGetImportedKeys.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandGetImportedKeys
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandGetImportedKeys
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandGetImportedKeys.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandGetImportedKeys";
                    };

                    return CommandGetImportedKeys;
                })();

                sql.CommandGetCrossReference = (function() {

                    /**
                     * Properties of a CommandGetCrossReference.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandGetCrossReference
                     * @property {string|null} [pkCatalog] The catalog name where the parent table is.
                     * An empty string retrieves those without a catalog.
                     * If omitted the catalog name should not be used to narrow the search.
                     * @property {string|null} [pkDbSchema] The Schema name where the parent table is.
                     * An empty string retrieves those without a schema.
                     * If omitted the schema name should not be used to narrow the search.
                     * @property {string|null} [pkTable] The parent table name. It cannot be null.
                     * @property {string|null} [fkCatalog] The catalog name where the foreign table is.
                     * An empty string retrieves those without a catalog.
                     * If omitted the catalog name should not be used to narrow the search.
                     * @property {string|null} [fkDbSchema] The schema name where the foreign table is.
                     * An empty string retrieves those without a schema.
                     * If omitted the schema name should not be used to narrow the search.
                     * @property {string|null} [fkTable] The foreign table name. It cannot be null.
                     */

                    /**
                     * Constructs a new CommandGetCrossReference.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandGetCrossReference.
                     * @implements ICommandGetCrossReference
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandGetCrossReference=} [properties] Properties to set
                     */
                    function CommandGetCrossReference(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * The catalog name where the parent table is.
                     * An empty string retrieves those without a catalog.
                     * If omitted the catalog name should not be used to narrow the search.
                     * @member {string|null|undefined} pkCatalog
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     */
                    CommandGetCrossReference.prototype.pkCatalog = null;

                    /**
                     * The Schema name where the parent table is.
                     * An empty string retrieves those without a schema.
                     * If omitted the schema name should not be used to narrow the search.
                     * @member {string|null|undefined} pkDbSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     */
                    CommandGetCrossReference.prototype.pkDbSchema = null;

                    /**
                     * The parent table name. It cannot be null.
                     * @member {string} pkTable
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     */
                    CommandGetCrossReference.prototype.pkTable = "";

                    /**
                     * The catalog name where the foreign table is.
                     * An empty string retrieves those without a catalog.
                     * If omitted the catalog name should not be used to narrow the search.
                     * @member {string|null|undefined} fkCatalog
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     */
                    CommandGetCrossReference.prototype.fkCatalog = null;

                    /**
                     * The schema name where the foreign table is.
                     * An empty string retrieves those without a schema.
                     * If omitted the schema name should not be used to narrow the search.
                     * @member {string|null|undefined} fkDbSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     */
                    CommandGetCrossReference.prototype.fkDbSchema = null;

                    /**
                     * The foreign table name. It cannot be null.
                     * @member {string} fkTable
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     */
                    CommandGetCrossReference.prototype.fkTable = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandGetCrossReference _pkCatalog.
                     * @member {"pkCatalog"|undefined} _pkCatalog
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     */
                    Object.defineProperty(CommandGetCrossReference.prototype, "_pkCatalog", {
                        get: $util.oneOfGetter($oneOfFields = ["pkCatalog"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandGetCrossReference _pkDbSchema.
                     * @member {"pkDbSchema"|undefined} _pkDbSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     */
                    Object.defineProperty(CommandGetCrossReference.prototype, "_pkDbSchema", {
                        get: $util.oneOfGetter($oneOfFields = ["pkDbSchema"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandGetCrossReference _fkCatalog.
                     * @member {"fkCatalog"|undefined} _fkCatalog
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     */
                    Object.defineProperty(CommandGetCrossReference.prototype, "_fkCatalog", {
                        get: $util.oneOfGetter($oneOfFields = ["fkCatalog"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandGetCrossReference _fkDbSchema.
                     * @member {"fkDbSchema"|undefined} _fkDbSchema
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     */
                    Object.defineProperty(CommandGetCrossReference.prototype, "_fkDbSchema", {
                        get: $util.oneOfGetter($oneOfFields = ["fkDbSchema"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandGetCrossReference instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetCrossReference=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandGetCrossReference} CommandGetCrossReference instance
                     */
                    CommandGetCrossReference.create = function create(properties) {
                        return new CommandGetCrossReference(properties);
                    };

                    /**
                     * Encodes the specified CommandGetCrossReference message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCrossReference.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetCrossReference} message CommandGetCrossReference message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetCrossReference.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.pkCatalog != null && Object.hasOwnProperty.call(message, "pkCatalog"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.pkCatalog);
                        if (message.pkDbSchema != null && Object.hasOwnProperty.call(message, "pkDbSchema"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.pkDbSchema);
                        if (message.pkTable != null && Object.hasOwnProperty.call(message, "pkTable"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.pkTable);
                        if (message.fkCatalog != null && Object.hasOwnProperty.call(message, "fkCatalog"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.fkCatalog);
                        if (message.fkDbSchema != null && Object.hasOwnProperty.call(message, "fkDbSchema"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.fkDbSchema);
                        if (message.fkTable != null && Object.hasOwnProperty.call(message, "fkTable"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.fkTable);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandGetCrossReference message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCrossReference.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandGetCrossReference} message CommandGetCrossReference message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandGetCrossReference.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandGetCrossReference message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandGetCrossReference} CommandGetCrossReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetCrossReference.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandGetCrossReference();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.pkCatalog = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.pkDbSchema = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.pkTable = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.fkCatalog = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.fkDbSchema = reader.string();
                                    break;
                                }
                            case 6: {
                                    message.fkTable = reader.string();
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
                     * Decodes a CommandGetCrossReference message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandGetCrossReference} CommandGetCrossReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandGetCrossReference.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandGetCrossReference message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandGetCrossReference.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.pkCatalog != null && message.hasOwnProperty("pkCatalog")) {
                            properties._pkCatalog = 1;
                            if (!$util.isString(message.pkCatalog))
                                return "pkCatalog: string expected";
                        }
                        if (message.pkDbSchema != null && message.hasOwnProperty("pkDbSchema")) {
                            properties._pkDbSchema = 1;
                            if (!$util.isString(message.pkDbSchema))
                                return "pkDbSchema: string expected";
                        }
                        if (message.pkTable != null && message.hasOwnProperty("pkTable"))
                            if (!$util.isString(message.pkTable))
                                return "pkTable: string expected";
                        if (message.fkCatalog != null && message.hasOwnProperty("fkCatalog")) {
                            properties._fkCatalog = 1;
                            if (!$util.isString(message.fkCatalog))
                                return "fkCatalog: string expected";
                        }
                        if (message.fkDbSchema != null && message.hasOwnProperty("fkDbSchema")) {
                            properties._fkDbSchema = 1;
                            if (!$util.isString(message.fkDbSchema))
                                return "fkDbSchema: string expected";
                        }
                        if (message.fkTable != null && message.hasOwnProperty("fkTable"))
                            if (!$util.isString(message.fkTable))
                                return "fkTable: string expected";
                        return null;
                    };

                    /**
                     * Creates a CommandGetCrossReference message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandGetCrossReference} CommandGetCrossReference
                     */
                    CommandGetCrossReference.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandGetCrossReference)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandGetCrossReference();
                        if (object.pkCatalog != null)
                            message.pkCatalog = String(object.pkCatalog);
                        if (object.pkDbSchema != null)
                            message.pkDbSchema = String(object.pkDbSchema);
                        if (object.pkTable != null)
                            message.pkTable = String(object.pkTable);
                        if (object.fkCatalog != null)
                            message.fkCatalog = String(object.fkCatalog);
                        if (object.fkDbSchema != null)
                            message.fkDbSchema = String(object.fkDbSchema);
                        if (object.fkTable != null)
                            message.fkTable = String(object.fkTable);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandGetCrossReference message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandGetCrossReference} message CommandGetCrossReference
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandGetCrossReference.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.pkTable = "";
                            object.fkTable = "";
                        }
                        if (message.pkCatalog != null && message.hasOwnProperty("pkCatalog")) {
                            object.pkCatalog = message.pkCatalog;
                            if (options.oneofs)
                                object._pkCatalog = "pkCatalog";
                        }
                        if (message.pkDbSchema != null && message.hasOwnProperty("pkDbSchema")) {
                            object.pkDbSchema = message.pkDbSchema;
                            if (options.oneofs)
                                object._pkDbSchema = "pkDbSchema";
                        }
                        if (message.pkTable != null && message.hasOwnProperty("pkTable"))
                            object.pkTable = message.pkTable;
                        if (message.fkCatalog != null && message.hasOwnProperty("fkCatalog")) {
                            object.fkCatalog = message.fkCatalog;
                            if (options.oneofs)
                                object._fkCatalog = "fkCatalog";
                        }
                        if (message.fkDbSchema != null && message.hasOwnProperty("fkDbSchema")) {
                            object.fkDbSchema = message.fkDbSchema;
                            if (options.oneofs)
                                object._fkDbSchema = "fkDbSchema";
                        }
                        if (message.fkTable != null && message.hasOwnProperty("fkTable"))
                            object.fkTable = message.fkTable;
                        return object;
                    };

                    /**
                     * Converts this CommandGetCrossReference to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandGetCrossReference.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandGetCrossReference
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandGetCrossReference
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandGetCrossReference.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandGetCrossReference";
                    };

                    return CommandGetCrossReference;
                })();

                sql.ActionCreatePreparedStatementRequest = (function() {

                    /**
                     * Properties of an ActionCreatePreparedStatementRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionCreatePreparedStatementRequest
                     * @property {string|null} [query] ActionCreatePreparedStatementRequest query
                     * @property {Uint8Array|null} [transactionId] ActionCreatePreparedStatementRequest transactionId
                     */

                    /**
                     * Constructs a new ActionCreatePreparedStatementRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionCreatePreparedStatementRequest.
                     * @implements IActionCreatePreparedStatementRequest
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedStatementRequest=} [properties] Properties to set
                     */
                    function ActionCreatePreparedStatementRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionCreatePreparedStatementRequest query.
                     * @member {string} query
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @instance
                     */
                    ActionCreatePreparedStatementRequest.prototype.query = "";

                    /**
                     * ActionCreatePreparedStatementRequest transactionId.
                     * @member {Uint8Array|null|undefined} transactionId
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @instance
                     */
                    ActionCreatePreparedStatementRequest.prototype.transactionId = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * ActionCreatePreparedStatementRequest _transactionId.
                     * @member {"transactionId"|undefined} _transactionId
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @instance
                     */
                    Object.defineProperty(ActionCreatePreparedStatementRequest.prototype, "_transactionId", {
                        get: $util.oneOfGetter($oneOfFields = ["transactionId"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new ActionCreatePreparedStatementRequest instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedStatementRequest=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} ActionCreatePreparedStatementRequest instance
                     */
                    ActionCreatePreparedStatementRequest.create = function create(properties) {
                        return new ActionCreatePreparedStatementRequest(properties);
                    };

                    /**
                     * Encodes the specified ActionCreatePreparedStatementRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedStatementRequest} message ActionCreatePreparedStatementRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionCreatePreparedStatementRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
                        if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.transactionId);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionCreatePreparedStatementRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedStatementRequest} message ActionCreatePreparedStatementRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionCreatePreparedStatementRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionCreatePreparedStatementRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} ActionCreatePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionCreatePreparedStatementRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.query = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.transactionId = reader.bytes();
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
                     * Decodes an ActionCreatePreparedStatementRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} ActionCreatePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionCreatePreparedStatementRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionCreatePreparedStatementRequest message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionCreatePreparedStatementRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.query != null && message.hasOwnProperty("query"))
                            if (!$util.isString(message.query))
                                return "query: string expected";
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            properties._transactionId = 1;
                            if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                                return "transactionId: buffer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an ActionCreatePreparedStatementRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} ActionCreatePreparedStatementRequest
                     */
                    ActionCreatePreparedStatementRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest();
                        if (object.query != null)
                            message.query = String(object.query);
                        if (object.transactionId != null)
                            if (typeof object.transactionId === "string")
                                $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
                            else if (object.transactionId.length >= 0)
                                message.transactionId = object.transactionId;
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionCreatePreparedStatementRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest} message ActionCreatePreparedStatementRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionCreatePreparedStatementRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.query = "";
                        if (message.query != null && message.hasOwnProperty("query"))
                            object.query = message.query;
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
                            if (options.oneofs)
                                object._transactionId = "transactionId";
                        }
                        return object;
                    };

                    /**
                     * Converts this ActionCreatePreparedStatementRequest to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionCreatePreparedStatementRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionCreatePreparedStatementRequest
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionCreatePreparedStatementRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest";
                    };

                    return ActionCreatePreparedStatementRequest;
                })();

                sql.SubstraitPlan = (function() {

                    /**
                     * Properties of a SubstraitPlan.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ISubstraitPlan
                     * @property {Uint8Array|null} [plan] SubstraitPlan plan
                     * @property {string|null} [version] SubstraitPlan version
                     */

                    /**
                     * Constructs a new SubstraitPlan.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a SubstraitPlan.
                     * @implements ISubstraitPlan
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ISubstraitPlan=} [properties] Properties to set
                     */
                    function SubstraitPlan(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SubstraitPlan plan.
                     * @member {Uint8Array} plan
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @instance
                     */
                    SubstraitPlan.prototype.plan = $util.newBuffer([]);

                    /**
                     * SubstraitPlan version.
                     * @member {string} version
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @instance
                     */
                    SubstraitPlan.prototype.version = "";

                    /**
                     * Creates a new SubstraitPlan instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @static
                     * @param {arrow.flight.protocol.sql.ISubstraitPlan=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.SubstraitPlan} SubstraitPlan instance
                     */
                    SubstraitPlan.create = function create(properties) {
                        return new SubstraitPlan(properties);
                    };

                    /**
                     * Encodes the specified SubstraitPlan message. Does not implicitly {@link arrow.flight.protocol.sql.SubstraitPlan.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @static
                     * @param {arrow.flight.protocol.sql.ISubstraitPlan} message SubstraitPlan message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubstraitPlan.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.plan != null && Object.hasOwnProperty.call(message, "plan"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.plan);
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                        return writer;
                    };

                    /**
                     * Encodes the specified SubstraitPlan message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.SubstraitPlan.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @static
                     * @param {arrow.flight.protocol.sql.ISubstraitPlan} message SubstraitPlan message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubstraitPlan.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SubstraitPlan message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.SubstraitPlan} SubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubstraitPlan.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.SubstraitPlan();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.plan = reader.bytes();
                                    break;
                                }
                            case 2: {
                                    message.version = reader.string();
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
                     * Decodes a SubstraitPlan message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.SubstraitPlan} SubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubstraitPlan.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SubstraitPlan message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubstraitPlan.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.plan != null && message.hasOwnProperty("plan"))
                            if (!(message.plan && typeof message.plan.length === "number" || $util.isString(message.plan)))
                                return "plan: buffer expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isString(message.version))
                                return "version: string expected";
                        return null;
                    };

                    /**
                     * Creates a SubstraitPlan message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.SubstraitPlan} SubstraitPlan
                     */
                    SubstraitPlan.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.SubstraitPlan)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.SubstraitPlan();
                        if (object.plan != null)
                            if (typeof object.plan === "string")
                                $util.base64.decode(object.plan, message.plan = $util.newBuffer($util.base64.length(object.plan)), 0);
                            else if (object.plan.length >= 0)
                                message.plan = object.plan;
                        if (object.version != null)
                            message.version = String(object.version);
                        return message;
                    };

                    /**
                     * Creates a plain object from a SubstraitPlan message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @static
                     * @param {arrow.flight.protocol.sql.SubstraitPlan} message SubstraitPlan
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubstraitPlan.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.plan = "";
                            else {
                                object.plan = [];
                                if (options.bytes !== Array)
                                    object.plan = $util.newBuffer(object.plan);
                            }
                            object.version = "";
                        }
                        if (message.plan != null && message.hasOwnProperty("plan"))
                            object.plan = options.bytes === String ? $util.base64.encode(message.plan, 0, message.plan.length) : options.bytes === Array ? Array.prototype.slice.call(message.plan) : message.plan;
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        return object;
                    };

                    /**
                     * Converts this SubstraitPlan to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubstraitPlan.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for SubstraitPlan
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.SubstraitPlan
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    SubstraitPlan.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.SubstraitPlan";
                    };

                    return SubstraitPlan;
                })();

                sql.ActionCreatePreparedSubstraitPlanRequest = (function() {

                    /**
                     * Properties of an ActionCreatePreparedSubstraitPlanRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionCreatePreparedSubstraitPlanRequest
                     * @property {arrow.flight.protocol.sql.ISubstraitPlan|null} [plan] ActionCreatePreparedSubstraitPlanRequest plan
                     * @property {Uint8Array|null} [transactionId] ActionCreatePreparedSubstraitPlanRequest transactionId
                     */

                    /**
                     * Constructs a new ActionCreatePreparedSubstraitPlanRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionCreatePreparedSubstraitPlanRequest.
                     * @implements IActionCreatePreparedSubstraitPlanRequest
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedSubstraitPlanRequest=} [properties] Properties to set
                     */
                    function ActionCreatePreparedSubstraitPlanRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionCreatePreparedSubstraitPlanRequest plan.
                     * @member {arrow.flight.protocol.sql.ISubstraitPlan|null|undefined} plan
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @instance
                     */
                    ActionCreatePreparedSubstraitPlanRequest.prototype.plan = null;

                    /**
                     * ActionCreatePreparedSubstraitPlanRequest transactionId.
                     * @member {Uint8Array|null|undefined} transactionId
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @instance
                     */
                    ActionCreatePreparedSubstraitPlanRequest.prototype.transactionId = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * ActionCreatePreparedSubstraitPlanRequest _transactionId.
                     * @member {"transactionId"|undefined} _transactionId
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @instance
                     */
                    Object.defineProperty(ActionCreatePreparedSubstraitPlanRequest.prototype, "_transactionId", {
                        get: $util.oneOfGetter($oneOfFields = ["transactionId"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new ActionCreatePreparedSubstraitPlanRequest instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedSubstraitPlanRequest=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} ActionCreatePreparedSubstraitPlanRequest instance
                     */
                    ActionCreatePreparedSubstraitPlanRequest.create = function create(properties) {
                        return new ActionCreatePreparedSubstraitPlanRequest(properties);
                    };

                    /**
                     * Encodes the specified ActionCreatePreparedSubstraitPlanRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedSubstraitPlanRequest} message ActionCreatePreparedSubstraitPlanRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionCreatePreparedSubstraitPlanRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.plan != null && Object.hasOwnProperty.call(message, "plan"))
                            $root.arrow.flight.protocol.sql.SubstraitPlan.encode(message.plan, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.transactionId);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionCreatePreparedSubstraitPlanRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedSubstraitPlanRequest} message ActionCreatePreparedSubstraitPlanRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionCreatePreparedSubstraitPlanRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionCreatePreparedSubstraitPlanRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} ActionCreatePreparedSubstraitPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionCreatePreparedSubstraitPlanRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.plan = $root.arrow.flight.protocol.sql.SubstraitPlan.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.transactionId = reader.bytes();
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
                     * Decodes an ActionCreatePreparedSubstraitPlanRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} ActionCreatePreparedSubstraitPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionCreatePreparedSubstraitPlanRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionCreatePreparedSubstraitPlanRequest message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionCreatePreparedSubstraitPlanRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.plan != null && message.hasOwnProperty("plan")) {
                            var error = $root.arrow.flight.protocol.sql.SubstraitPlan.verify(message.plan);
                            if (error)
                                return "plan." + error;
                        }
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            properties._transactionId = 1;
                            if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                                return "transactionId: buffer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an ActionCreatePreparedSubstraitPlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} ActionCreatePreparedSubstraitPlanRequest
                     */
                    ActionCreatePreparedSubstraitPlanRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest();
                        if (object.plan != null) {
                            if (typeof object.plan !== "object")
                                throw TypeError(".arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.plan: object expected");
                            message.plan = $root.arrow.flight.protocol.sql.SubstraitPlan.fromObject(object.plan);
                        }
                        if (object.transactionId != null)
                            if (typeof object.transactionId === "string")
                                $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
                            else if (object.transactionId.length >= 0)
                                message.transactionId = object.transactionId;
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionCreatePreparedSubstraitPlanRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest} message ActionCreatePreparedSubstraitPlanRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionCreatePreparedSubstraitPlanRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.plan = null;
                        if (message.plan != null && message.hasOwnProperty("plan"))
                            object.plan = $root.arrow.flight.protocol.sql.SubstraitPlan.toObject(message.plan, options);
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
                            if (options.oneofs)
                                object._transactionId = "transactionId";
                        }
                        return object;
                    };

                    /**
                     * Converts this ActionCreatePreparedSubstraitPlanRequest to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionCreatePreparedSubstraitPlanRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionCreatePreparedSubstraitPlanRequest
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionCreatePreparedSubstraitPlanRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest";
                    };

                    return ActionCreatePreparedSubstraitPlanRequest;
                })();

                sql.ActionCreatePreparedStatementResult = (function() {

                    /**
                     * Properties of an ActionCreatePreparedStatementResult.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionCreatePreparedStatementResult
                     * @property {Uint8Array|null} [preparedStatementHandle] ActionCreatePreparedStatementResult preparedStatementHandle
                     * @property {Uint8Array|null} [datasetSchema] ActionCreatePreparedStatementResult datasetSchema
                     * @property {Uint8Array|null} [parameterSchema] ActionCreatePreparedStatementResult parameterSchema
                     */

                    /**
                     * Constructs a new ActionCreatePreparedStatementResult.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionCreatePreparedStatementResult.
                     * @implements IActionCreatePreparedStatementResult
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedStatementResult=} [properties] Properties to set
                     */
                    function ActionCreatePreparedStatementResult(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionCreatePreparedStatementResult preparedStatementHandle.
                     * @member {Uint8Array} preparedStatementHandle
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @instance
                     */
                    ActionCreatePreparedStatementResult.prototype.preparedStatementHandle = $util.newBuffer([]);

                    /**
                     * ActionCreatePreparedStatementResult datasetSchema.
                     * @member {Uint8Array} datasetSchema
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @instance
                     */
                    ActionCreatePreparedStatementResult.prototype.datasetSchema = $util.newBuffer([]);

                    /**
                     * ActionCreatePreparedStatementResult parameterSchema.
                     * @member {Uint8Array} parameterSchema
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @instance
                     */
                    ActionCreatePreparedStatementResult.prototype.parameterSchema = $util.newBuffer([]);

                    /**
                     * Creates a new ActionCreatePreparedStatementResult instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedStatementResult=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} ActionCreatePreparedStatementResult instance
                     */
                    ActionCreatePreparedStatementResult.create = function create(properties) {
                        return new ActionCreatePreparedStatementResult(properties);
                    };

                    /**
                     * Encodes the specified ActionCreatePreparedStatementResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedStatementResult} message ActionCreatePreparedStatementResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionCreatePreparedStatementResult.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.preparedStatementHandle != null && Object.hasOwnProperty.call(message, "preparedStatementHandle"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.preparedStatementHandle);
                        if (message.datasetSchema != null && Object.hasOwnProperty.call(message, "datasetSchema"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.datasetSchema);
                        if (message.parameterSchema != null && Object.hasOwnProperty.call(message, "parameterSchema"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.parameterSchema);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionCreatePreparedStatementResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCreatePreparedStatementResult} message ActionCreatePreparedStatementResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionCreatePreparedStatementResult.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionCreatePreparedStatementResult message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} ActionCreatePreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionCreatePreparedStatementResult.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.preparedStatementHandle = reader.bytes();
                                    break;
                                }
                            case 2: {
                                    message.datasetSchema = reader.bytes();
                                    break;
                                }
                            case 3: {
                                    message.parameterSchema = reader.bytes();
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
                     * Decodes an ActionCreatePreparedStatementResult message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} ActionCreatePreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionCreatePreparedStatementResult.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionCreatePreparedStatementResult message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionCreatePreparedStatementResult.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.preparedStatementHandle != null && message.hasOwnProperty("preparedStatementHandle"))
                            if (!(message.preparedStatementHandle && typeof message.preparedStatementHandle.length === "number" || $util.isString(message.preparedStatementHandle)))
                                return "preparedStatementHandle: buffer expected";
                        if (message.datasetSchema != null && message.hasOwnProperty("datasetSchema"))
                            if (!(message.datasetSchema && typeof message.datasetSchema.length === "number" || $util.isString(message.datasetSchema)))
                                return "datasetSchema: buffer expected";
                        if (message.parameterSchema != null && message.hasOwnProperty("parameterSchema"))
                            if (!(message.parameterSchema && typeof message.parameterSchema.length === "number" || $util.isString(message.parameterSchema)))
                                return "parameterSchema: buffer expected";
                        return null;
                    };

                    /**
                     * Creates an ActionCreatePreparedStatementResult message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} ActionCreatePreparedStatementResult
                     */
                    ActionCreatePreparedStatementResult.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionCreatePreparedStatementResult();
                        if (object.preparedStatementHandle != null)
                            if (typeof object.preparedStatementHandle === "string")
                                $util.base64.decode(object.preparedStatementHandle, message.preparedStatementHandle = $util.newBuffer($util.base64.length(object.preparedStatementHandle)), 0);
                            else if (object.preparedStatementHandle.length >= 0)
                                message.preparedStatementHandle = object.preparedStatementHandle;
                        if (object.datasetSchema != null)
                            if (typeof object.datasetSchema === "string")
                                $util.base64.decode(object.datasetSchema, message.datasetSchema = $util.newBuffer($util.base64.length(object.datasetSchema)), 0);
                            else if (object.datasetSchema.length >= 0)
                                message.datasetSchema = object.datasetSchema;
                        if (object.parameterSchema != null)
                            if (typeof object.parameterSchema === "string")
                                $util.base64.decode(object.parameterSchema, message.parameterSchema = $util.newBuffer($util.base64.length(object.parameterSchema)), 0);
                            else if (object.parameterSchema.length >= 0)
                                message.parameterSchema = object.parameterSchema;
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionCreatePreparedStatementResult message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionCreatePreparedStatementResult} message ActionCreatePreparedStatementResult
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionCreatePreparedStatementResult.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.preparedStatementHandle = "";
                            else {
                                object.preparedStatementHandle = [];
                                if (options.bytes !== Array)
                                    object.preparedStatementHandle = $util.newBuffer(object.preparedStatementHandle);
                            }
                            if (options.bytes === String)
                                object.datasetSchema = "";
                            else {
                                object.datasetSchema = [];
                                if (options.bytes !== Array)
                                    object.datasetSchema = $util.newBuffer(object.datasetSchema);
                            }
                            if (options.bytes === String)
                                object.parameterSchema = "";
                            else {
                                object.parameterSchema = [];
                                if (options.bytes !== Array)
                                    object.parameterSchema = $util.newBuffer(object.parameterSchema);
                            }
                        }
                        if (message.preparedStatementHandle != null && message.hasOwnProperty("preparedStatementHandle"))
                            object.preparedStatementHandle = options.bytes === String ? $util.base64.encode(message.preparedStatementHandle, 0, message.preparedStatementHandle.length) : options.bytes === Array ? Array.prototype.slice.call(message.preparedStatementHandle) : message.preparedStatementHandle;
                        if (message.datasetSchema != null && message.hasOwnProperty("datasetSchema"))
                            object.datasetSchema = options.bytes === String ? $util.base64.encode(message.datasetSchema, 0, message.datasetSchema.length) : options.bytes === Array ? Array.prototype.slice.call(message.datasetSchema) : message.datasetSchema;
                        if (message.parameterSchema != null && message.hasOwnProperty("parameterSchema"))
                            object.parameterSchema = options.bytes === String ? $util.base64.encode(message.parameterSchema, 0, message.parameterSchema.length) : options.bytes === Array ? Array.prototype.slice.call(message.parameterSchema) : message.parameterSchema;
                        return object;
                    };

                    /**
                     * Converts this ActionCreatePreparedStatementResult to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionCreatePreparedStatementResult.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionCreatePreparedStatementResult
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionCreatePreparedStatementResult
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionCreatePreparedStatementResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionCreatePreparedStatementResult";
                    };

                    return ActionCreatePreparedStatementResult;
                })();

                sql.ActionClosePreparedStatementRequest = (function() {

                    /**
                     * Properties of an ActionClosePreparedStatementRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionClosePreparedStatementRequest
                     * @property {Uint8Array|null} [preparedStatementHandle] ActionClosePreparedStatementRequest preparedStatementHandle
                     */

                    /**
                     * Constructs a new ActionClosePreparedStatementRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionClosePreparedStatementRequest.
                     * @implements IActionClosePreparedStatementRequest
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionClosePreparedStatementRequest=} [properties] Properties to set
                     */
                    function ActionClosePreparedStatementRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionClosePreparedStatementRequest preparedStatementHandle.
                     * @member {Uint8Array} preparedStatementHandle
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @instance
                     */
                    ActionClosePreparedStatementRequest.prototype.preparedStatementHandle = $util.newBuffer([]);

                    /**
                     * Creates a new ActionClosePreparedStatementRequest instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionClosePreparedStatementRequest=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionClosePreparedStatementRequest} ActionClosePreparedStatementRequest instance
                     */
                    ActionClosePreparedStatementRequest.create = function create(properties) {
                        return new ActionClosePreparedStatementRequest(properties);
                    };

                    /**
                     * Encodes the specified ActionClosePreparedStatementRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionClosePreparedStatementRequest} message ActionClosePreparedStatementRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionClosePreparedStatementRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.preparedStatementHandle != null && Object.hasOwnProperty.call(message, "preparedStatementHandle"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.preparedStatementHandle);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionClosePreparedStatementRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionClosePreparedStatementRequest} message ActionClosePreparedStatementRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionClosePreparedStatementRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionClosePreparedStatementRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionClosePreparedStatementRequest} ActionClosePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionClosePreparedStatementRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.preparedStatementHandle = reader.bytes();
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
                     * Decodes an ActionClosePreparedStatementRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionClosePreparedStatementRequest} ActionClosePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionClosePreparedStatementRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionClosePreparedStatementRequest message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionClosePreparedStatementRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.preparedStatementHandle != null && message.hasOwnProperty("preparedStatementHandle"))
                            if (!(message.preparedStatementHandle && typeof message.preparedStatementHandle.length === "number" || $util.isString(message.preparedStatementHandle)))
                                return "preparedStatementHandle: buffer expected";
                        return null;
                    };

                    /**
                     * Creates an ActionClosePreparedStatementRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionClosePreparedStatementRequest} ActionClosePreparedStatementRequest
                     */
                    ActionClosePreparedStatementRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionClosePreparedStatementRequest();
                        if (object.preparedStatementHandle != null)
                            if (typeof object.preparedStatementHandle === "string")
                                $util.base64.decode(object.preparedStatementHandle, message.preparedStatementHandle = $util.newBuffer($util.base64.length(object.preparedStatementHandle)), 0);
                            else if (object.preparedStatementHandle.length >= 0)
                                message.preparedStatementHandle = object.preparedStatementHandle;
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionClosePreparedStatementRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionClosePreparedStatementRequest} message ActionClosePreparedStatementRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionClosePreparedStatementRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.preparedStatementHandle = "";
                            else {
                                object.preparedStatementHandle = [];
                                if (options.bytes !== Array)
                                    object.preparedStatementHandle = $util.newBuffer(object.preparedStatementHandle);
                            }
                        if (message.preparedStatementHandle != null && message.hasOwnProperty("preparedStatementHandle"))
                            object.preparedStatementHandle = options.bytes === String ? $util.base64.encode(message.preparedStatementHandle, 0, message.preparedStatementHandle.length) : options.bytes === Array ? Array.prototype.slice.call(message.preparedStatementHandle) : message.preparedStatementHandle;
                        return object;
                    };

                    /**
                     * Converts this ActionClosePreparedStatementRequest to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionClosePreparedStatementRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionClosePreparedStatementRequest
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionClosePreparedStatementRequest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionClosePreparedStatementRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionClosePreparedStatementRequest";
                    };

                    return ActionClosePreparedStatementRequest;
                })();

                sql.ActionBeginTransactionRequest = (function() {

                    /**
                     * Properties of an ActionBeginTransactionRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionBeginTransactionRequest
                     */

                    /**
                     * Constructs a new ActionBeginTransactionRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionBeginTransactionRequest.
                     * @implements IActionBeginTransactionRequest
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionBeginTransactionRequest=} [properties] Properties to set
                     */
                    function ActionBeginTransactionRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new ActionBeginTransactionRequest instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginTransactionRequest=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionRequest} ActionBeginTransactionRequest instance
                     */
                    ActionBeginTransactionRequest.create = function create(properties) {
                        return new ActionBeginTransactionRequest(properties);
                    };

                    /**
                     * Encodes the specified ActionBeginTransactionRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionRequest.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginTransactionRequest} message ActionBeginTransactionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionBeginTransactionRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionBeginTransactionRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginTransactionRequest} message ActionBeginTransactionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionBeginTransactionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionBeginTransactionRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionRequest} ActionBeginTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionBeginTransactionRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionBeginTransactionRequest();
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
                     * Decodes an ActionBeginTransactionRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionRequest} ActionBeginTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionBeginTransactionRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionBeginTransactionRequest message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionBeginTransactionRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates an ActionBeginTransactionRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionRequest} ActionBeginTransactionRequest
                     */
                    ActionBeginTransactionRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionBeginTransactionRequest)
                            return object;
                        return new $root.arrow.flight.protocol.sql.ActionBeginTransactionRequest();
                    };

                    /**
                     * Creates a plain object from an ActionBeginTransactionRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionBeginTransactionRequest} message ActionBeginTransactionRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionBeginTransactionRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this ActionBeginTransactionRequest to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionBeginTransactionRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionBeginTransactionRequest
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionRequest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionBeginTransactionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionBeginTransactionRequest";
                    };

                    return ActionBeginTransactionRequest;
                })();

                sql.ActionBeginSavepointRequest = (function() {

                    /**
                     * Properties of an ActionBeginSavepointRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionBeginSavepointRequest
                     * @property {Uint8Array|null} [transactionId] ActionBeginSavepointRequest transactionId
                     * @property {string|null} [name] ActionBeginSavepointRequest name
                     */

                    /**
                     * Constructs a new ActionBeginSavepointRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionBeginSavepointRequest.
                     * @implements IActionBeginSavepointRequest
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionBeginSavepointRequest=} [properties] Properties to set
                     */
                    function ActionBeginSavepointRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionBeginSavepointRequest transactionId.
                     * @member {Uint8Array} transactionId
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @instance
                     */
                    ActionBeginSavepointRequest.prototype.transactionId = $util.newBuffer([]);

                    /**
                     * ActionBeginSavepointRequest name.
                     * @member {string} name
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @instance
                     */
                    ActionBeginSavepointRequest.prototype.name = "";

                    /**
                     * Creates a new ActionBeginSavepointRequest instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginSavepointRequest=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointRequest} ActionBeginSavepointRequest instance
                     */
                    ActionBeginSavepointRequest.create = function create(properties) {
                        return new ActionBeginSavepointRequest(properties);
                    };

                    /**
                     * Encodes the specified ActionBeginSavepointRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointRequest.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginSavepointRequest} message ActionBeginSavepointRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionBeginSavepointRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.transactionId);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionBeginSavepointRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginSavepointRequest} message ActionBeginSavepointRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionBeginSavepointRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionBeginSavepointRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointRequest} ActionBeginSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionBeginSavepointRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionBeginSavepointRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.transactionId = reader.bytes();
                                    break;
                                }
                            case 2: {
                                    message.name = reader.string();
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
                     * Decodes an ActionBeginSavepointRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointRequest} ActionBeginSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionBeginSavepointRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionBeginSavepointRequest message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionBeginSavepointRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                                return "transactionId: buffer expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };

                    /**
                     * Creates an ActionBeginSavepointRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointRequest} ActionBeginSavepointRequest
                     */
                    ActionBeginSavepointRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionBeginSavepointRequest)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionBeginSavepointRequest();
                        if (object.transactionId != null)
                            if (typeof object.transactionId === "string")
                                $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
                            else if (object.transactionId.length >= 0)
                                message.transactionId = object.transactionId;
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionBeginSavepointRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionBeginSavepointRequest} message ActionBeginSavepointRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionBeginSavepointRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.transactionId = "";
                            else {
                                object.transactionId = [];
                                if (options.bytes !== Array)
                                    object.transactionId = $util.newBuffer(object.transactionId);
                            }
                            object.name = "";
                        }
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };

                    /**
                     * Converts this ActionBeginSavepointRequest to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionBeginSavepointRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionBeginSavepointRequest
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointRequest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionBeginSavepointRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionBeginSavepointRequest";
                    };

                    return ActionBeginSavepointRequest;
                })();

                sql.ActionBeginTransactionResult = (function() {

                    /**
                     * Properties of an ActionBeginTransactionResult.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionBeginTransactionResult
                     * @property {Uint8Array|null} [transactionId] ActionBeginTransactionResult transactionId
                     */

                    /**
                     * Constructs a new ActionBeginTransactionResult.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionBeginTransactionResult.
                     * @implements IActionBeginTransactionResult
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionBeginTransactionResult=} [properties] Properties to set
                     */
                    function ActionBeginTransactionResult(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionBeginTransactionResult transactionId.
                     * @member {Uint8Array} transactionId
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @instance
                     */
                    ActionBeginTransactionResult.prototype.transactionId = $util.newBuffer([]);

                    /**
                     * Creates a new ActionBeginTransactionResult instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginTransactionResult=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionResult} ActionBeginTransactionResult instance
                     */
                    ActionBeginTransactionResult.create = function create(properties) {
                        return new ActionBeginTransactionResult(properties);
                    };

                    /**
                     * Encodes the specified ActionBeginTransactionResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionResult.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginTransactionResult} message ActionBeginTransactionResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionBeginTransactionResult.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.transactionId);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionBeginTransactionResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionResult.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginTransactionResult} message ActionBeginTransactionResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionBeginTransactionResult.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionBeginTransactionResult message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionResult} ActionBeginTransactionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionBeginTransactionResult.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionBeginTransactionResult();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.transactionId = reader.bytes();
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
                     * Decodes an ActionBeginTransactionResult message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionResult} ActionBeginTransactionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionBeginTransactionResult.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionBeginTransactionResult message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionBeginTransactionResult.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                                return "transactionId: buffer expected";
                        return null;
                    };

                    /**
                     * Creates an ActionBeginTransactionResult message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionBeginTransactionResult} ActionBeginTransactionResult
                     */
                    ActionBeginTransactionResult.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionBeginTransactionResult)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionBeginTransactionResult();
                        if (object.transactionId != null)
                            if (typeof object.transactionId === "string")
                                $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
                            else if (object.transactionId.length >= 0)
                                message.transactionId = object.transactionId;
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionBeginTransactionResult message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionBeginTransactionResult} message ActionBeginTransactionResult
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionBeginTransactionResult.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.transactionId = "";
                            else {
                                object.transactionId = [];
                                if (options.bytes !== Array)
                                    object.transactionId = $util.newBuffer(object.transactionId);
                            }
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
                        return object;
                    };

                    /**
                     * Converts this ActionBeginTransactionResult to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionBeginTransactionResult.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionBeginTransactionResult
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionBeginTransactionResult
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionBeginTransactionResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionBeginTransactionResult";
                    };

                    return ActionBeginTransactionResult;
                })();

                sql.ActionBeginSavepointResult = (function() {

                    /**
                     * Properties of an ActionBeginSavepointResult.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionBeginSavepointResult
                     * @property {Uint8Array|null} [savepointId] ActionBeginSavepointResult savepointId
                     */

                    /**
                     * Constructs a new ActionBeginSavepointResult.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionBeginSavepointResult.
                     * @implements IActionBeginSavepointResult
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionBeginSavepointResult=} [properties] Properties to set
                     */
                    function ActionBeginSavepointResult(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionBeginSavepointResult savepointId.
                     * @member {Uint8Array} savepointId
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @instance
                     */
                    ActionBeginSavepointResult.prototype.savepointId = $util.newBuffer([]);

                    /**
                     * Creates a new ActionBeginSavepointResult instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginSavepointResult=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointResult} ActionBeginSavepointResult instance
                     */
                    ActionBeginSavepointResult.create = function create(properties) {
                        return new ActionBeginSavepointResult(properties);
                    };

                    /**
                     * Encodes the specified ActionBeginSavepointResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointResult.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginSavepointResult} message ActionBeginSavepointResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionBeginSavepointResult.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.savepointId != null && Object.hasOwnProperty.call(message, "savepointId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.savepointId);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionBeginSavepointResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointResult.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionBeginSavepointResult} message ActionBeginSavepointResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionBeginSavepointResult.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionBeginSavepointResult message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointResult} ActionBeginSavepointResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionBeginSavepointResult.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionBeginSavepointResult();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.savepointId = reader.bytes();
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
                     * Decodes an ActionBeginSavepointResult message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointResult} ActionBeginSavepointResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionBeginSavepointResult.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionBeginSavepointResult message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionBeginSavepointResult.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.savepointId != null && message.hasOwnProperty("savepointId"))
                            if (!(message.savepointId && typeof message.savepointId.length === "number" || $util.isString(message.savepointId)))
                                return "savepointId: buffer expected";
                        return null;
                    };

                    /**
                     * Creates an ActionBeginSavepointResult message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionBeginSavepointResult} ActionBeginSavepointResult
                     */
                    ActionBeginSavepointResult.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionBeginSavepointResult)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionBeginSavepointResult();
                        if (object.savepointId != null)
                            if (typeof object.savepointId === "string")
                                $util.base64.decode(object.savepointId, message.savepointId = $util.newBuffer($util.base64.length(object.savepointId)), 0);
                            else if (object.savepointId.length >= 0)
                                message.savepointId = object.savepointId;
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionBeginSavepointResult message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionBeginSavepointResult} message ActionBeginSavepointResult
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionBeginSavepointResult.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.savepointId = "";
                            else {
                                object.savepointId = [];
                                if (options.bytes !== Array)
                                    object.savepointId = $util.newBuffer(object.savepointId);
                            }
                        if (message.savepointId != null && message.hasOwnProperty("savepointId"))
                            object.savepointId = options.bytes === String ? $util.base64.encode(message.savepointId, 0, message.savepointId.length) : options.bytes === Array ? Array.prototype.slice.call(message.savepointId) : message.savepointId;
                        return object;
                    };

                    /**
                     * Converts this ActionBeginSavepointResult to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionBeginSavepointResult.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionBeginSavepointResult
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionBeginSavepointResult
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionBeginSavepointResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionBeginSavepointResult";
                    };

                    return ActionBeginSavepointResult;
                })();

                sql.ActionEndTransactionRequest = (function() {

                    /**
                     * Properties of an ActionEndTransactionRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionEndTransactionRequest
                     * @property {Uint8Array|null} [transactionId] ActionEndTransactionRequest transactionId
                     * @property {arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction|null} [action] ActionEndTransactionRequest action
                     */

                    /**
                     * Constructs a new ActionEndTransactionRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionEndTransactionRequest.
                     * @implements IActionEndTransactionRequest
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionEndTransactionRequest=} [properties] Properties to set
                     */
                    function ActionEndTransactionRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionEndTransactionRequest transactionId.
                     * @member {Uint8Array} transactionId
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @instance
                     */
                    ActionEndTransactionRequest.prototype.transactionId = $util.newBuffer([]);

                    /**
                     * ActionEndTransactionRequest action.
                     * @member {arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction} action
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @instance
                     */
                    ActionEndTransactionRequest.prototype.action = 0;

                    /**
                     * Creates a new ActionEndTransactionRequest instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionEndTransactionRequest=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionEndTransactionRequest} ActionEndTransactionRequest instance
                     */
                    ActionEndTransactionRequest.create = function create(properties) {
                        return new ActionEndTransactionRequest(properties);
                    };

                    /**
                     * Encodes the specified ActionEndTransactionRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndTransactionRequest.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionEndTransactionRequest} message ActionEndTransactionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionEndTransactionRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.transactionId);
                        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionEndTransactionRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndTransactionRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionEndTransactionRequest} message ActionEndTransactionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionEndTransactionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionEndTransactionRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionEndTransactionRequest} ActionEndTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionEndTransactionRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionEndTransactionRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.transactionId = reader.bytes();
                                    break;
                                }
                            case 2: {
                                    message.action = reader.int32();
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
                     * Decodes an ActionEndTransactionRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionEndTransactionRequest} ActionEndTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionEndTransactionRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionEndTransactionRequest message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionEndTransactionRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                                return "transactionId: buffer expected";
                        if (message.action != null && message.hasOwnProperty("action"))
                            switch (message.action) {
                            default:
                                return "action: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates an ActionEndTransactionRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionEndTransactionRequest} ActionEndTransactionRequest
                     */
                    ActionEndTransactionRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionEndTransactionRequest)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionEndTransactionRequest();
                        if (object.transactionId != null)
                            if (typeof object.transactionId === "string")
                                $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
                            else if (object.transactionId.length >= 0)
                                message.transactionId = object.transactionId;
                        switch (object.action) {
                        default:
                            if (typeof object.action === "number") {
                                message.action = object.action;
                                break;
                            }
                            break;
                        case "END_TRANSACTION_UNSPECIFIED":
                        case 0:
                            message.action = 0;
                            break;
                        case "END_TRANSACTION_COMMIT":
                        case 1:
                            message.action = 1;
                            break;
                        case "END_TRANSACTION_ROLLBACK":
                        case 2:
                            message.action = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionEndTransactionRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionEndTransactionRequest} message ActionEndTransactionRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionEndTransactionRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.transactionId = "";
                            else {
                                object.transactionId = [];
                                if (options.bytes !== Array)
                                    object.transactionId = $util.newBuffer(object.transactionId);
                            }
                            object.action = options.enums === String ? "END_TRANSACTION_UNSPECIFIED" : 0;
                        }
                        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                            object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
                        if (message.action != null && message.hasOwnProperty("action"))
                            object.action = options.enums === String ? $root.arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction[message.action] === undefined ? message.action : $root.arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction[message.action] : message.action;
                        return object;
                    };

                    /**
                     * Converts this ActionEndTransactionRequest to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionEndTransactionRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionEndTransactionRequest
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionEndTransactionRequest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionEndTransactionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionEndTransactionRequest";
                    };

                    /**
                     * EndTransaction enum.
                     * @name arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction
                     * @enum {number}
                     * @property {number} END_TRANSACTION_UNSPECIFIED=0 END_TRANSACTION_UNSPECIFIED value
                     * @property {number} END_TRANSACTION_COMMIT=1 END_TRANSACTION_COMMIT value
                     * @property {number} END_TRANSACTION_ROLLBACK=2 END_TRANSACTION_ROLLBACK value
                     */
                    ActionEndTransactionRequest.EndTransaction = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "END_TRANSACTION_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "END_TRANSACTION_COMMIT"] = 1;
                        values[valuesById[2] = "END_TRANSACTION_ROLLBACK"] = 2;
                        return values;
                    })();

                    return ActionEndTransactionRequest;
                })();

                sql.ActionEndSavepointRequest = (function() {

                    /**
                     * Properties of an ActionEndSavepointRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionEndSavepointRequest
                     * @property {Uint8Array|null} [savepointId] ActionEndSavepointRequest savepointId
                     * @property {arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint|null} [action] ActionEndSavepointRequest action
                     */

                    /**
                     * Constructs a new ActionEndSavepointRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionEndSavepointRequest.
                     * @implements IActionEndSavepointRequest
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionEndSavepointRequest=} [properties] Properties to set
                     */
                    function ActionEndSavepointRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionEndSavepointRequest savepointId.
                     * @member {Uint8Array} savepointId
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @instance
                     */
                    ActionEndSavepointRequest.prototype.savepointId = $util.newBuffer([]);

                    /**
                     * ActionEndSavepointRequest action.
                     * @member {arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint} action
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @instance
                     */
                    ActionEndSavepointRequest.prototype.action = 0;

                    /**
                     * Creates a new ActionEndSavepointRequest instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionEndSavepointRequest=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionEndSavepointRequest} ActionEndSavepointRequest instance
                     */
                    ActionEndSavepointRequest.create = function create(properties) {
                        return new ActionEndSavepointRequest(properties);
                    };

                    /**
                     * Encodes the specified ActionEndSavepointRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndSavepointRequest.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionEndSavepointRequest} message ActionEndSavepointRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionEndSavepointRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.savepointId != null && Object.hasOwnProperty.call(message, "savepointId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.savepointId);
                        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionEndSavepointRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndSavepointRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionEndSavepointRequest} message ActionEndSavepointRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionEndSavepointRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionEndSavepointRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionEndSavepointRequest} ActionEndSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionEndSavepointRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionEndSavepointRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.savepointId = reader.bytes();
                                    break;
                                }
                            case 2: {
                                    message.action = reader.int32();
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
                     * Decodes an ActionEndSavepointRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionEndSavepointRequest} ActionEndSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionEndSavepointRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionEndSavepointRequest message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionEndSavepointRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.savepointId != null && message.hasOwnProperty("savepointId"))
                            if (!(message.savepointId && typeof message.savepointId.length === "number" || $util.isString(message.savepointId)))
                                return "savepointId: buffer expected";
                        if (message.action != null && message.hasOwnProperty("action"))
                            switch (message.action) {
                            default:
                                return "action: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates an ActionEndSavepointRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionEndSavepointRequest} ActionEndSavepointRequest
                     */
                    ActionEndSavepointRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionEndSavepointRequest)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionEndSavepointRequest();
                        if (object.savepointId != null)
                            if (typeof object.savepointId === "string")
                                $util.base64.decode(object.savepointId, message.savepointId = $util.newBuffer($util.base64.length(object.savepointId)), 0);
                            else if (object.savepointId.length >= 0)
                                message.savepointId = object.savepointId;
                        switch (object.action) {
                        default:
                            if (typeof object.action === "number") {
                                message.action = object.action;
                                break;
                            }
                            break;
                        case "END_SAVEPOINT_UNSPECIFIED":
                        case 0:
                            message.action = 0;
                            break;
                        case "END_SAVEPOINT_RELEASE":
                        case 1:
                            message.action = 1;
                            break;
                        case "END_SAVEPOINT_ROLLBACK":
                        case 2:
                            message.action = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionEndSavepointRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionEndSavepointRequest} message ActionEndSavepointRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionEndSavepointRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.savepointId = "";
                            else {
                                object.savepointId = [];
                                if (options.bytes !== Array)
                                    object.savepointId = $util.newBuffer(object.savepointId);
                            }
                            object.action = options.enums === String ? "END_SAVEPOINT_UNSPECIFIED" : 0;
                        }
                        if (message.savepointId != null && message.hasOwnProperty("savepointId"))
                            object.savepointId = options.bytes === String ? $util.base64.encode(message.savepointId, 0, message.savepointId.length) : options.bytes === Array ? Array.prototype.slice.call(message.savepointId) : message.savepointId;
                        if (message.action != null && message.hasOwnProperty("action"))
                            object.action = options.enums === String ? $root.arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint[message.action] === undefined ? message.action : $root.arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint[message.action] : message.action;
                        return object;
                    };

                    /**
                     * Converts this ActionEndSavepointRequest to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionEndSavepointRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionEndSavepointRequest
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionEndSavepointRequest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionEndSavepointRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionEndSavepointRequest";
                    };

                    /**
                     * EndSavepoint enum.
                     * @name arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint
                     * @enum {number}
                     * @property {number} END_SAVEPOINT_UNSPECIFIED=0 END_SAVEPOINT_UNSPECIFIED value
                     * @property {number} END_SAVEPOINT_RELEASE=1 END_SAVEPOINT_RELEASE value
                     * @property {number} END_SAVEPOINT_ROLLBACK=2 END_SAVEPOINT_ROLLBACK value
                     */
                    ActionEndSavepointRequest.EndSavepoint = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "END_SAVEPOINT_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "END_SAVEPOINT_RELEASE"] = 1;
                        values[valuesById[2] = "END_SAVEPOINT_ROLLBACK"] = 2;
                        return values;
                    })();

                    return ActionEndSavepointRequest;
                })();

                sql.CommandStatementQuery = (function() {

                    /**
                     * Properties of a CommandStatementQuery.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandStatementQuery
                     * @property {string|null} [query] CommandStatementQuery query
                     * @property {Uint8Array|null} [transactionId] CommandStatementQuery transactionId
                     */

                    /**
                     * Constructs a new CommandStatementQuery.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandStatementQuery.
                     * @implements ICommandStatementQuery
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandStatementQuery=} [properties] Properties to set
                     */
                    function CommandStatementQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandStatementQuery query.
                     * @member {string} query
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @instance
                     */
                    CommandStatementQuery.prototype.query = "";

                    /**
                     * CommandStatementQuery transactionId.
                     * @member {Uint8Array|null|undefined} transactionId
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @instance
                     */
                    CommandStatementQuery.prototype.transactionId = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandStatementQuery _transactionId.
                     * @member {"transactionId"|undefined} _transactionId
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @instance
                     */
                    Object.defineProperty(CommandStatementQuery.prototype, "_transactionId", {
                        get: $util.oneOfGetter($oneOfFields = ["transactionId"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandStatementQuery instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementQuery=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandStatementQuery} CommandStatementQuery instance
                     */
                    CommandStatementQuery.create = function create(properties) {
                        return new CommandStatementQuery(properties);
                    };

                    /**
                     * Encodes the specified CommandStatementQuery message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementQuery.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementQuery} message CommandStatementQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandStatementQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
                        if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.transactionId);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandStatementQuery message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementQuery} message CommandStatementQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandStatementQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandStatementQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandStatementQuery} CommandStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandStatementQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandStatementQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.query = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.transactionId = reader.bytes();
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
                     * Decodes a CommandStatementQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandStatementQuery} CommandStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandStatementQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandStatementQuery message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandStatementQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.query != null && message.hasOwnProperty("query"))
                            if (!$util.isString(message.query))
                                return "query: string expected";
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            properties._transactionId = 1;
                            if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                                return "transactionId: buffer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a CommandStatementQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandStatementQuery} CommandStatementQuery
                     */
                    CommandStatementQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandStatementQuery)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandStatementQuery();
                        if (object.query != null)
                            message.query = String(object.query);
                        if (object.transactionId != null)
                            if (typeof object.transactionId === "string")
                                $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
                            else if (object.transactionId.length >= 0)
                                message.transactionId = object.transactionId;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandStatementQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandStatementQuery} message CommandStatementQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandStatementQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.query = "";
                        if (message.query != null && message.hasOwnProperty("query"))
                            object.query = message.query;
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
                            if (options.oneofs)
                                object._transactionId = "transactionId";
                        }
                        return object;
                    };

                    /**
                     * Converts this CommandStatementQuery to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandStatementQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandStatementQuery
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandStatementQuery
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandStatementQuery.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandStatementQuery";
                    };

                    return CommandStatementQuery;
                })();

                sql.CommandStatementSubstraitPlan = (function() {

                    /**
                     * Properties of a CommandStatementSubstraitPlan.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandStatementSubstraitPlan
                     * @property {arrow.flight.protocol.sql.ISubstraitPlan|null} [plan] CommandStatementSubstraitPlan plan
                     * @property {Uint8Array|null} [transactionId] CommandStatementSubstraitPlan transactionId
                     */

                    /**
                     * Constructs a new CommandStatementSubstraitPlan.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandStatementSubstraitPlan.
                     * @implements ICommandStatementSubstraitPlan
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandStatementSubstraitPlan=} [properties] Properties to set
                     */
                    function CommandStatementSubstraitPlan(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandStatementSubstraitPlan plan.
                     * @member {arrow.flight.protocol.sql.ISubstraitPlan|null|undefined} plan
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @instance
                     */
                    CommandStatementSubstraitPlan.prototype.plan = null;

                    /**
                     * CommandStatementSubstraitPlan transactionId.
                     * @member {Uint8Array|null|undefined} transactionId
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @instance
                     */
                    CommandStatementSubstraitPlan.prototype.transactionId = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandStatementSubstraitPlan _transactionId.
                     * @member {"transactionId"|undefined} _transactionId
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @instance
                     */
                    Object.defineProperty(CommandStatementSubstraitPlan.prototype, "_transactionId", {
                        get: $util.oneOfGetter($oneOfFields = ["transactionId"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandStatementSubstraitPlan instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementSubstraitPlan=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandStatementSubstraitPlan} CommandStatementSubstraitPlan instance
                     */
                    CommandStatementSubstraitPlan.create = function create(properties) {
                        return new CommandStatementSubstraitPlan(properties);
                    };

                    /**
                     * Encodes the specified CommandStatementSubstraitPlan message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementSubstraitPlan.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementSubstraitPlan} message CommandStatementSubstraitPlan message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandStatementSubstraitPlan.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.plan != null && Object.hasOwnProperty.call(message, "plan"))
                            $root.arrow.flight.protocol.sql.SubstraitPlan.encode(message.plan, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.transactionId);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandStatementSubstraitPlan message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementSubstraitPlan.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementSubstraitPlan} message CommandStatementSubstraitPlan message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandStatementSubstraitPlan.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandStatementSubstraitPlan message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandStatementSubstraitPlan} CommandStatementSubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandStatementSubstraitPlan.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandStatementSubstraitPlan();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.plan = $root.arrow.flight.protocol.sql.SubstraitPlan.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.transactionId = reader.bytes();
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
                     * Decodes a CommandStatementSubstraitPlan message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandStatementSubstraitPlan} CommandStatementSubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandStatementSubstraitPlan.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandStatementSubstraitPlan message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandStatementSubstraitPlan.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.plan != null && message.hasOwnProperty("plan")) {
                            var error = $root.arrow.flight.protocol.sql.SubstraitPlan.verify(message.plan);
                            if (error)
                                return "plan." + error;
                        }
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            properties._transactionId = 1;
                            if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                                return "transactionId: buffer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a CommandStatementSubstraitPlan message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandStatementSubstraitPlan} CommandStatementSubstraitPlan
                     */
                    CommandStatementSubstraitPlan.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandStatementSubstraitPlan)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandStatementSubstraitPlan();
                        if (object.plan != null) {
                            if (typeof object.plan !== "object")
                                throw TypeError(".arrow.flight.protocol.sql.CommandStatementSubstraitPlan.plan: object expected");
                            message.plan = $root.arrow.flight.protocol.sql.SubstraitPlan.fromObject(object.plan);
                        }
                        if (object.transactionId != null)
                            if (typeof object.transactionId === "string")
                                $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
                            else if (object.transactionId.length >= 0)
                                message.transactionId = object.transactionId;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandStatementSubstraitPlan message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandStatementSubstraitPlan} message CommandStatementSubstraitPlan
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandStatementSubstraitPlan.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.plan = null;
                        if (message.plan != null && message.hasOwnProperty("plan"))
                            object.plan = $root.arrow.flight.protocol.sql.SubstraitPlan.toObject(message.plan, options);
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
                            if (options.oneofs)
                                object._transactionId = "transactionId";
                        }
                        return object;
                    };

                    /**
                     * Converts this CommandStatementSubstraitPlan to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandStatementSubstraitPlan.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandStatementSubstraitPlan
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandStatementSubstraitPlan
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandStatementSubstraitPlan.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandStatementSubstraitPlan";
                    };

                    return CommandStatementSubstraitPlan;
                })();

                sql.TicketStatementQuery = (function() {

                    /**
                     * Properties of a TicketStatementQuery.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ITicketStatementQuery
                     * @property {Uint8Array|null} [statementHandle] TicketStatementQuery statementHandle
                     */

                    /**
                     * Constructs a new TicketStatementQuery.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a ticket resulting from GetFlightInfo with a CommandStatementQuery.
                     * This should be used only once and treated as an opaque value, that is, clients should not attempt to parse this.
                     * @implements ITicketStatementQuery
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ITicketStatementQuery=} [properties] Properties to set
                     */
                    function TicketStatementQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TicketStatementQuery statementHandle.
                     * @member {Uint8Array} statementHandle
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @instance
                     */
                    TicketStatementQuery.prototype.statementHandle = $util.newBuffer([]);

                    /**
                     * Creates a new TicketStatementQuery instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.ITicketStatementQuery=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.TicketStatementQuery} TicketStatementQuery instance
                     */
                    TicketStatementQuery.create = function create(properties) {
                        return new TicketStatementQuery(properties);
                    };

                    /**
                     * Encodes the specified TicketStatementQuery message. Does not implicitly {@link arrow.flight.protocol.sql.TicketStatementQuery.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.ITicketStatementQuery} message TicketStatementQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TicketStatementQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.statementHandle != null && Object.hasOwnProperty.call(message, "statementHandle"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.statementHandle);
                        return writer;
                    };

                    /**
                     * Encodes the specified TicketStatementQuery message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.TicketStatementQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.ITicketStatementQuery} message TicketStatementQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TicketStatementQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TicketStatementQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.TicketStatementQuery} TicketStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TicketStatementQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.TicketStatementQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.statementHandle = reader.bytes();
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
                     * Decodes a TicketStatementQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.TicketStatementQuery} TicketStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TicketStatementQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TicketStatementQuery message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TicketStatementQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.statementHandle != null && message.hasOwnProperty("statementHandle"))
                            if (!(message.statementHandle && typeof message.statementHandle.length === "number" || $util.isString(message.statementHandle)))
                                return "statementHandle: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a TicketStatementQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.TicketStatementQuery} TicketStatementQuery
                     */
                    TicketStatementQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.TicketStatementQuery)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.TicketStatementQuery();
                        if (object.statementHandle != null)
                            if (typeof object.statementHandle === "string")
                                $util.base64.decode(object.statementHandle, message.statementHandle = $util.newBuffer($util.base64.length(object.statementHandle)), 0);
                            else if (object.statementHandle.length >= 0)
                                message.statementHandle = object.statementHandle;
                        return message;
                    };

                    /**
                     * Creates a plain object from a TicketStatementQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.TicketStatementQuery} message TicketStatementQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TicketStatementQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.statementHandle = "";
                            else {
                                object.statementHandle = [];
                                if (options.bytes !== Array)
                                    object.statementHandle = $util.newBuffer(object.statementHandle);
                            }
                        if (message.statementHandle != null && message.hasOwnProperty("statementHandle"))
                            object.statementHandle = options.bytes === String ? $util.base64.encode(message.statementHandle, 0, message.statementHandle.length) : options.bytes === Array ? Array.prototype.slice.call(message.statementHandle) : message.statementHandle;
                        return object;
                    };

                    /**
                     * Converts this TicketStatementQuery to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TicketStatementQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for TicketStatementQuery
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.TicketStatementQuery
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    TicketStatementQuery.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.TicketStatementQuery";
                    };

                    return TicketStatementQuery;
                })();

                sql.CommandPreparedStatementQuery = (function() {

                    /**
                     * Properties of a CommandPreparedStatementQuery.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandPreparedStatementQuery
                     * @property {Uint8Array|null} [preparedStatementHandle] CommandPreparedStatementQuery preparedStatementHandle
                     */

                    /**
                     * Constructs a new CommandPreparedStatementQuery.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandPreparedStatementQuery.
                     * @implements ICommandPreparedStatementQuery
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandPreparedStatementQuery=} [properties] Properties to set
                     */
                    function CommandPreparedStatementQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandPreparedStatementQuery preparedStatementHandle.
                     * @member {Uint8Array} preparedStatementHandle
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @instance
                     */
                    CommandPreparedStatementQuery.prototype.preparedStatementHandle = $util.newBuffer([]);

                    /**
                     * Creates a new CommandPreparedStatementQuery instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandPreparedStatementQuery=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementQuery} CommandPreparedStatementQuery instance
                     */
                    CommandPreparedStatementQuery.create = function create(properties) {
                        return new CommandPreparedStatementQuery(properties);
                    };

                    /**
                     * Encodes the specified CommandPreparedStatementQuery message. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementQuery.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandPreparedStatementQuery} message CommandPreparedStatementQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandPreparedStatementQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.preparedStatementHandle != null && Object.hasOwnProperty.call(message, "preparedStatementHandle"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.preparedStatementHandle);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandPreparedStatementQuery message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandPreparedStatementQuery} message CommandPreparedStatementQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandPreparedStatementQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandPreparedStatementQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementQuery} CommandPreparedStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandPreparedStatementQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandPreparedStatementQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.preparedStatementHandle = reader.bytes();
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
                     * Decodes a CommandPreparedStatementQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementQuery} CommandPreparedStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandPreparedStatementQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandPreparedStatementQuery message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandPreparedStatementQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.preparedStatementHandle != null && message.hasOwnProperty("preparedStatementHandle"))
                            if (!(message.preparedStatementHandle && typeof message.preparedStatementHandle.length === "number" || $util.isString(message.preparedStatementHandle)))
                                return "preparedStatementHandle: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a CommandPreparedStatementQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementQuery} CommandPreparedStatementQuery
                     */
                    CommandPreparedStatementQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandPreparedStatementQuery)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandPreparedStatementQuery();
                        if (object.preparedStatementHandle != null)
                            if (typeof object.preparedStatementHandle === "string")
                                $util.base64.decode(object.preparedStatementHandle, message.preparedStatementHandle = $util.newBuffer($util.base64.length(object.preparedStatementHandle)), 0);
                            else if (object.preparedStatementHandle.length >= 0)
                                message.preparedStatementHandle = object.preparedStatementHandle;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandPreparedStatementQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandPreparedStatementQuery} message CommandPreparedStatementQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandPreparedStatementQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.preparedStatementHandle = "";
                            else {
                                object.preparedStatementHandle = [];
                                if (options.bytes !== Array)
                                    object.preparedStatementHandle = $util.newBuffer(object.preparedStatementHandle);
                            }
                        if (message.preparedStatementHandle != null && message.hasOwnProperty("preparedStatementHandle"))
                            object.preparedStatementHandle = options.bytes === String ? $util.base64.encode(message.preparedStatementHandle, 0, message.preparedStatementHandle.length) : options.bytes === Array ? Array.prototype.slice.call(message.preparedStatementHandle) : message.preparedStatementHandle;
                        return object;
                    };

                    /**
                     * Converts this CommandPreparedStatementQuery to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandPreparedStatementQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandPreparedStatementQuery
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementQuery
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandPreparedStatementQuery.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandPreparedStatementQuery";
                    };

                    return CommandPreparedStatementQuery;
                })();

                sql.CommandStatementUpdate = (function() {

                    /**
                     * Properties of a CommandStatementUpdate.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandStatementUpdate
                     * @property {string|null} [query] CommandStatementUpdate query
                     * @property {Uint8Array|null} [transactionId] CommandStatementUpdate transactionId
                     */

                    /**
                     * Constructs a new CommandStatementUpdate.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandStatementUpdate.
                     * @implements ICommandStatementUpdate
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandStatementUpdate=} [properties] Properties to set
                     */
                    function CommandStatementUpdate(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandStatementUpdate query.
                     * @member {string} query
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @instance
                     */
                    CommandStatementUpdate.prototype.query = "";

                    /**
                     * CommandStatementUpdate transactionId.
                     * @member {Uint8Array|null|undefined} transactionId
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @instance
                     */
                    CommandStatementUpdate.prototype.transactionId = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandStatementUpdate _transactionId.
                     * @member {"transactionId"|undefined} _transactionId
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @instance
                     */
                    Object.defineProperty(CommandStatementUpdate.prototype, "_transactionId", {
                        get: $util.oneOfGetter($oneOfFields = ["transactionId"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandStatementUpdate instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementUpdate=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandStatementUpdate} CommandStatementUpdate instance
                     */
                    CommandStatementUpdate.create = function create(properties) {
                        return new CommandStatementUpdate(properties);
                    };

                    /**
                     * Encodes the specified CommandStatementUpdate message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementUpdate.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementUpdate} message CommandStatementUpdate message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandStatementUpdate.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
                        if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.transactionId);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandStatementUpdate message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementUpdate.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementUpdate} message CommandStatementUpdate message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandStatementUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandStatementUpdate message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandStatementUpdate} CommandStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandStatementUpdate.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandStatementUpdate();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.query = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.transactionId = reader.bytes();
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
                     * Decodes a CommandStatementUpdate message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandStatementUpdate} CommandStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandStatementUpdate.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandStatementUpdate message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandStatementUpdate.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.query != null && message.hasOwnProperty("query"))
                            if (!$util.isString(message.query))
                                return "query: string expected";
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            properties._transactionId = 1;
                            if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                                return "transactionId: buffer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a CommandStatementUpdate message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandStatementUpdate} CommandStatementUpdate
                     */
                    CommandStatementUpdate.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandStatementUpdate)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandStatementUpdate();
                        if (object.query != null)
                            message.query = String(object.query);
                        if (object.transactionId != null)
                            if (typeof object.transactionId === "string")
                                $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
                            else if (object.transactionId.length >= 0)
                                message.transactionId = object.transactionId;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandStatementUpdate message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandStatementUpdate} message CommandStatementUpdate
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandStatementUpdate.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.query = "";
                        if (message.query != null && message.hasOwnProperty("query"))
                            object.query = message.query;
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
                            if (options.oneofs)
                                object._transactionId = "transactionId";
                        }
                        return object;
                    };

                    /**
                     * Converts this CommandStatementUpdate to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandStatementUpdate.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandStatementUpdate
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandStatementUpdate
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandStatementUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandStatementUpdate";
                    };

                    return CommandStatementUpdate;
                })();

                sql.CommandPreparedStatementUpdate = (function() {

                    /**
                     * Properties of a CommandPreparedStatementUpdate.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandPreparedStatementUpdate
                     * @property {Uint8Array|null} [preparedStatementHandle] CommandPreparedStatementUpdate preparedStatementHandle
                     */

                    /**
                     * Constructs a new CommandPreparedStatementUpdate.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandPreparedStatementUpdate.
                     * @implements ICommandPreparedStatementUpdate
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandPreparedStatementUpdate=} [properties] Properties to set
                     */
                    function CommandPreparedStatementUpdate(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandPreparedStatementUpdate preparedStatementHandle.
                     * @member {Uint8Array} preparedStatementHandle
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @instance
                     */
                    CommandPreparedStatementUpdate.prototype.preparedStatementHandle = $util.newBuffer([]);

                    /**
                     * Creates a new CommandPreparedStatementUpdate instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandPreparedStatementUpdate=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementUpdate} CommandPreparedStatementUpdate instance
                     */
                    CommandPreparedStatementUpdate.create = function create(properties) {
                        return new CommandPreparedStatementUpdate(properties);
                    };

                    /**
                     * Encodes the specified CommandPreparedStatementUpdate message. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementUpdate.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandPreparedStatementUpdate} message CommandPreparedStatementUpdate message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandPreparedStatementUpdate.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.preparedStatementHandle != null && Object.hasOwnProperty.call(message, "preparedStatementHandle"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.preparedStatementHandle);
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandPreparedStatementUpdate message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementUpdate.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandPreparedStatementUpdate} message CommandPreparedStatementUpdate message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandPreparedStatementUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandPreparedStatementUpdate message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementUpdate} CommandPreparedStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandPreparedStatementUpdate.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandPreparedStatementUpdate();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.preparedStatementHandle = reader.bytes();
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
                     * Decodes a CommandPreparedStatementUpdate message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementUpdate} CommandPreparedStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandPreparedStatementUpdate.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandPreparedStatementUpdate message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandPreparedStatementUpdate.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.preparedStatementHandle != null && message.hasOwnProperty("preparedStatementHandle"))
                            if (!(message.preparedStatementHandle && typeof message.preparedStatementHandle.length === "number" || $util.isString(message.preparedStatementHandle)))
                                return "preparedStatementHandle: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a CommandPreparedStatementUpdate message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandPreparedStatementUpdate} CommandPreparedStatementUpdate
                     */
                    CommandPreparedStatementUpdate.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandPreparedStatementUpdate)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandPreparedStatementUpdate();
                        if (object.preparedStatementHandle != null)
                            if (typeof object.preparedStatementHandle === "string")
                                $util.base64.decode(object.preparedStatementHandle, message.preparedStatementHandle = $util.newBuffer($util.base64.length(object.preparedStatementHandle)), 0);
                            else if (object.preparedStatementHandle.length >= 0)
                                message.preparedStatementHandle = object.preparedStatementHandle;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandPreparedStatementUpdate message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandPreparedStatementUpdate} message CommandPreparedStatementUpdate
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandPreparedStatementUpdate.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.preparedStatementHandle = "";
                            else {
                                object.preparedStatementHandle = [];
                                if (options.bytes !== Array)
                                    object.preparedStatementHandle = $util.newBuffer(object.preparedStatementHandle);
                            }
                        if (message.preparedStatementHandle != null && message.hasOwnProperty("preparedStatementHandle"))
                            object.preparedStatementHandle = options.bytes === String ? $util.base64.encode(message.preparedStatementHandle, 0, message.preparedStatementHandle.length) : options.bytes === Array ? Array.prototype.slice.call(message.preparedStatementHandle) : message.preparedStatementHandle;
                        return object;
                    };

                    /**
                     * Converts this CommandPreparedStatementUpdate to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandPreparedStatementUpdate.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandPreparedStatementUpdate
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandPreparedStatementUpdate
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandPreparedStatementUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandPreparedStatementUpdate";
                    };

                    return CommandPreparedStatementUpdate;
                })();

                sql.CommandStatementIngest = (function() {

                    /**
                     * Properties of a CommandStatementIngest.
                     * @memberof arrow.flight.protocol.sql
                     * @interface ICommandStatementIngest
                     * @property {arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions|null} [tableDefinitionOptions] CommandStatementIngest tableDefinitionOptions
                     * @property {string|null} [table] CommandStatementIngest table
                     * @property {string|null} [schema] CommandStatementIngest schema
                     * @property {string|null} [catalog] CommandStatementIngest catalog
                     * @property {boolean|null} [temporary] CommandStatementIngest temporary
                     * @property {Uint8Array|null} [transactionId] CommandStatementIngest transactionId
                     * @property {Object.<string,string>|null} [options] CommandStatementIngest options
                     */

                    /**
                     * Constructs a new CommandStatementIngest.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a CommandStatementIngest.
                     * @implements ICommandStatementIngest
                     * @constructor
                     * @param {arrow.flight.protocol.sql.ICommandStatementIngest=} [properties] Properties to set
                     */
                    function CommandStatementIngest(properties) {
                        this.options = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CommandStatementIngest tableDefinitionOptions.
                     * @member {arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions|null|undefined} tableDefinitionOptions
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     */
                    CommandStatementIngest.prototype.tableDefinitionOptions = null;

                    /**
                     * CommandStatementIngest table.
                     * @member {string} table
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     */
                    CommandStatementIngest.prototype.table = "";

                    /**
                     * CommandStatementIngest schema.
                     * @member {string|null|undefined} schema
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     */
                    CommandStatementIngest.prototype.schema = null;

                    /**
                     * CommandStatementIngest catalog.
                     * @member {string|null|undefined} catalog
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     */
                    CommandStatementIngest.prototype.catalog = null;

                    /**
                     * CommandStatementIngest temporary.
                     * @member {boolean} temporary
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     */
                    CommandStatementIngest.prototype.temporary = false;

                    /**
                     * CommandStatementIngest transactionId.
                     * @member {Uint8Array|null|undefined} transactionId
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     */
                    CommandStatementIngest.prototype.transactionId = null;

                    /**
                     * CommandStatementIngest options.
                     * @member {Object.<string,string>} options
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     */
                    CommandStatementIngest.prototype.options = $util.emptyObject;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * CommandStatementIngest _schema.
                     * @member {"schema"|undefined} _schema
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     */
                    Object.defineProperty(CommandStatementIngest.prototype, "_schema", {
                        get: $util.oneOfGetter($oneOfFields = ["schema"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandStatementIngest _catalog.
                     * @member {"catalog"|undefined} _catalog
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     */
                    Object.defineProperty(CommandStatementIngest.prototype, "_catalog", {
                        get: $util.oneOfGetter($oneOfFields = ["catalog"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * CommandStatementIngest _transactionId.
                     * @member {"transactionId"|undefined} _transactionId
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     */
                    Object.defineProperty(CommandStatementIngest.prototype, "_transactionId", {
                        get: $util.oneOfGetter($oneOfFields = ["transactionId"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new CommandStatementIngest instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementIngest=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.CommandStatementIngest} CommandStatementIngest instance
                     */
                    CommandStatementIngest.create = function create(properties) {
                        return new CommandStatementIngest(properties);
                    };

                    /**
                     * Encodes the specified CommandStatementIngest message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementIngest} message CommandStatementIngest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandStatementIngest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.tableDefinitionOptions != null && Object.hasOwnProperty.call(message, "tableDefinitionOptions"))
                            $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.encode(message.tableDefinitionOptions, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.table);
                        if (message.schema != null && Object.hasOwnProperty.call(message, "schema"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.schema);
                        if (message.catalog != null && Object.hasOwnProperty.call(message, "catalog"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.catalog);
                        if (message.temporary != null && Object.hasOwnProperty.call(message, "temporary"))
                            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.temporary);
                        if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.transactionId);
                        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                            for (var keys = Object.keys(message.options), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 1000, wireType 2 =*/8002).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.options[keys[i]]).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified CommandStatementIngest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @static
                     * @param {arrow.flight.protocol.sql.ICommandStatementIngest} message CommandStatementIngest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CommandStatementIngest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CommandStatementIngest message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.CommandStatementIngest} CommandStatementIngest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandStatementIngest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandStatementIngest(), key, value;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.tableDefinitionOptions = $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.table = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.schema = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.catalog = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.temporary = reader.bool();
                                    break;
                                }
                            case 6: {
                                    message.transactionId = reader.bytes();
                                    break;
                                }
                            case 1000: {
                                    if (message.options === $util.emptyObject)
                                        message.options = {};
                                    var end2 = reader.uint32() + reader.pos;
                                    key = "";
                                    value = "";
                                    while (reader.pos < end2) {
                                        var tag2 = reader.uint32();
                                        switch (tag2 >>> 3) {
                                        case 1:
                                            key = reader.string();
                                            break;
                                        case 2:
                                            value = reader.string();
                                            break;
                                        default:
                                            reader.skipType(tag2 & 7);
                                            break;
                                        }
                                    }
                                    message.options[key] = value;
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
                     * Decodes a CommandStatementIngest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.CommandStatementIngest} CommandStatementIngest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CommandStatementIngest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CommandStatementIngest message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CommandStatementIngest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.tableDefinitionOptions != null && message.hasOwnProperty("tableDefinitionOptions")) {
                            var error = $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.verify(message.tableDefinitionOptions);
                            if (error)
                                return "tableDefinitionOptions." + error;
                        }
                        if (message.table != null && message.hasOwnProperty("table"))
                            if (!$util.isString(message.table))
                                return "table: string expected";
                        if (message.schema != null && message.hasOwnProperty("schema")) {
                            properties._schema = 1;
                            if (!$util.isString(message.schema))
                                return "schema: string expected";
                        }
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            properties._catalog = 1;
                            if (!$util.isString(message.catalog))
                                return "catalog: string expected";
                        }
                        if (message.temporary != null && message.hasOwnProperty("temporary"))
                            if (typeof message.temporary !== "boolean")
                                return "temporary: boolean expected";
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            properties._transactionId = 1;
                            if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                                return "transactionId: buffer expected";
                        }
                        if (message.options != null && message.hasOwnProperty("options")) {
                            if (!$util.isObject(message.options))
                                return "options: object expected";
                            var key = Object.keys(message.options);
                            for (var i = 0; i < key.length; ++i)
                                if (!$util.isString(message.options[key[i]]))
                                    return "options: string{k:string} expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a CommandStatementIngest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.CommandStatementIngest} CommandStatementIngest
                     */
                    CommandStatementIngest.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.CommandStatementIngest)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.CommandStatementIngest();
                        if (object.tableDefinitionOptions != null) {
                            if (typeof object.tableDefinitionOptions !== "object")
                                throw TypeError(".arrow.flight.protocol.sql.CommandStatementIngest.tableDefinitionOptions: object expected");
                            message.tableDefinitionOptions = $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.fromObject(object.tableDefinitionOptions);
                        }
                        if (object.table != null)
                            message.table = String(object.table);
                        if (object.schema != null)
                            message.schema = String(object.schema);
                        if (object.catalog != null)
                            message.catalog = String(object.catalog);
                        if (object.temporary != null)
                            message.temporary = Boolean(object.temporary);
                        if (object.transactionId != null)
                            if (typeof object.transactionId === "string")
                                $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
                            else if (object.transactionId.length >= 0)
                                message.transactionId = object.transactionId;
                        if (object.options) {
                            if (typeof object.options !== "object")
                                throw TypeError(".arrow.flight.protocol.sql.CommandStatementIngest.options: object expected");
                            message.options = {};
                            for (var keys = Object.keys(object.options), i = 0; i < keys.length; ++i)
                                message.options[keys[i]] = String(object.options[keys[i]]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CommandStatementIngest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @static
                     * @param {arrow.flight.protocol.sql.CommandStatementIngest} message CommandStatementIngest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CommandStatementIngest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.options = {};
                        if (options.defaults) {
                            object.tableDefinitionOptions = null;
                            object.table = "";
                            object.temporary = false;
                        }
                        if (message.tableDefinitionOptions != null && message.hasOwnProperty("tableDefinitionOptions"))
                            object.tableDefinitionOptions = $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.toObject(message.tableDefinitionOptions, options);
                        if (message.table != null && message.hasOwnProperty("table"))
                            object.table = message.table;
                        if (message.schema != null && message.hasOwnProperty("schema")) {
                            object.schema = message.schema;
                            if (options.oneofs)
                                object._schema = "schema";
                        }
                        if (message.catalog != null && message.hasOwnProperty("catalog")) {
                            object.catalog = message.catalog;
                            if (options.oneofs)
                                object._catalog = "catalog";
                        }
                        if (message.temporary != null && message.hasOwnProperty("temporary"))
                            object.temporary = message.temporary;
                        if (message.transactionId != null && message.hasOwnProperty("transactionId")) {
                            object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
                            if (options.oneofs)
                                object._transactionId = "transactionId";
                        }
                        var keys2;
                        if (message.options && (keys2 = Object.keys(message.options)).length) {
                            object.options = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.options[keys2[j]] = message.options[keys2[j]];
                        }
                        return object;
                    };

                    /**
                     * Converts this CommandStatementIngest to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CommandStatementIngest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CommandStatementIngest
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CommandStatementIngest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandStatementIngest";
                    };

                    CommandStatementIngest.TableDefinitionOptions = (function() {

                        /**
                         * Properties of a TableDefinitionOptions.
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                         * @interface ITableDefinitionOptions
                         * @property {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption|null} [ifNotExist] TableDefinitionOptions ifNotExist
                         * @property {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption|null} [ifExists] TableDefinitionOptions ifExists
                         */

                        /**
                         * Constructs a new TableDefinitionOptions.
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest
                         * @classdesc Represents a TableDefinitionOptions.
                         * @implements ITableDefinitionOptions
                         * @constructor
                         * @param {arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions=} [properties] Properties to set
                         */
                        function TableDefinitionOptions(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * TableDefinitionOptions ifNotExist.
                         * @member {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption} ifNotExist
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @instance
                         */
                        TableDefinitionOptions.prototype.ifNotExist = 0;

                        /**
                         * TableDefinitionOptions ifExists.
                         * @member {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption} ifExists
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @instance
                         */
                        TableDefinitionOptions.prototype.ifExists = 0;

                        /**
                         * Creates a new TableDefinitionOptions instance using the specified properties.
                         * @function create
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @static
                         * @param {arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions=} [properties] Properties to set
                         * @returns {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} TableDefinitionOptions instance
                         */
                        TableDefinitionOptions.create = function create(properties) {
                            return new TableDefinitionOptions(properties);
                        };

                        /**
                         * Encodes the specified TableDefinitionOptions message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.verify|verify} messages.
                         * @function encode
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @static
                         * @param {arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions} message TableDefinitionOptions message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TableDefinitionOptions.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.ifNotExist != null && Object.hasOwnProperty.call(message, "ifNotExist"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ifNotExist);
                            if (message.ifExists != null && Object.hasOwnProperty.call(message, "ifExists"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ifExists);
                            return writer;
                        };

                        /**
                         * Encodes the specified TableDefinitionOptions message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @static
                         * @param {arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions} message TableDefinitionOptions message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TableDefinitionOptions.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a TableDefinitionOptions message from the specified reader or buffer.
                         * @function decode
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} TableDefinitionOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TableDefinitionOptions.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.ifNotExist = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.ifExists = reader.int32();
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
                         * Decodes a TableDefinitionOptions message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} TableDefinitionOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TableDefinitionOptions.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a TableDefinitionOptions message.
                         * @function verify
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        TableDefinitionOptions.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.ifNotExist != null && message.hasOwnProperty("ifNotExist"))
                                switch (message.ifNotExist) {
                                default:
                                    return "ifNotExist: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            if (message.ifExists != null && message.hasOwnProperty("ifExists"))
                                switch (message.ifExists) {
                                default:
                                    return "ifExists: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    break;
                                }
                            return null;
                        };

                        /**
                         * Creates a TableDefinitionOptions message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} TableDefinitionOptions
                         */
                        TableDefinitionOptions.fromObject = function fromObject(object) {
                            if (object instanceof $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions)
                                return object;
                            var message = new $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions();
                            switch (object.ifNotExist) {
                            default:
                                if (typeof object.ifNotExist === "number") {
                                    message.ifNotExist = object.ifNotExist;
                                    break;
                                }
                                break;
                            case "TABLE_NOT_EXIST_OPTION_UNSPECIFIED":
                            case 0:
                                message.ifNotExist = 0;
                                break;
                            case "TABLE_NOT_EXIST_OPTION_CREATE":
                            case 1:
                                message.ifNotExist = 1;
                                break;
                            case "TABLE_NOT_EXIST_OPTION_FAIL":
                            case 2:
                                message.ifNotExist = 2;
                                break;
                            }
                            switch (object.ifExists) {
                            default:
                                if (typeof object.ifExists === "number") {
                                    message.ifExists = object.ifExists;
                                    break;
                                }
                                break;
                            case "TABLE_EXISTS_OPTION_UNSPECIFIED":
                            case 0:
                                message.ifExists = 0;
                                break;
                            case "TABLE_EXISTS_OPTION_FAIL":
                            case 1:
                                message.ifExists = 1;
                                break;
                            case "TABLE_EXISTS_OPTION_APPEND":
                            case 2:
                                message.ifExists = 2;
                                break;
                            case "TABLE_EXISTS_OPTION_REPLACE":
                            case 3:
                                message.ifExists = 3;
                                break;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a TableDefinitionOptions message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @static
                         * @param {arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions} message TableDefinitionOptions
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        TableDefinitionOptions.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.ifNotExist = options.enums === String ? "TABLE_NOT_EXIST_OPTION_UNSPECIFIED" : 0;
                                object.ifExists = options.enums === String ? "TABLE_EXISTS_OPTION_UNSPECIFIED" : 0;
                            }
                            if (message.ifNotExist != null && message.hasOwnProperty("ifNotExist"))
                                object.ifNotExist = options.enums === String ? $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption[message.ifNotExist] === undefined ? message.ifNotExist : $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption[message.ifNotExist] : message.ifNotExist;
                            if (message.ifExists != null && message.hasOwnProperty("ifExists"))
                                object.ifExists = options.enums === String ? $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption[message.ifExists] === undefined ? message.ifExists : $root.arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption[message.ifExists] : message.ifExists;
                            return object;
                        };

                        /**
                         * Converts this TableDefinitionOptions to JSON.
                         * @function toJSON
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        TableDefinitionOptions.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for TableDefinitionOptions
                         * @function getTypeUrl
                         * @memberof arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        TableDefinitionOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions";
                        };

                        /**
                         * TableNotExistOption enum.
                         * @name arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption
                         * @enum {number}
                         * @property {number} TABLE_NOT_EXIST_OPTION_UNSPECIFIED=0 TABLE_NOT_EXIST_OPTION_UNSPECIFIED value
                         * @property {number} TABLE_NOT_EXIST_OPTION_CREATE=1 TABLE_NOT_EXIST_OPTION_CREATE value
                         * @property {number} TABLE_NOT_EXIST_OPTION_FAIL=2 TABLE_NOT_EXIST_OPTION_FAIL value
                         */
                        TableDefinitionOptions.TableNotExistOption = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "TABLE_NOT_EXIST_OPTION_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "TABLE_NOT_EXIST_OPTION_CREATE"] = 1;
                            values[valuesById[2] = "TABLE_NOT_EXIST_OPTION_FAIL"] = 2;
                            return values;
                        })();

                        /**
                         * TableExistsOption enum.
                         * @name arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption
                         * @enum {number}
                         * @property {number} TABLE_EXISTS_OPTION_UNSPECIFIED=0 TABLE_EXISTS_OPTION_UNSPECIFIED value
                         * @property {number} TABLE_EXISTS_OPTION_FAIL=1 TABLE_EXISTS_OPTION_FAIL value
                         * @property {number} TABLE_EXISTS_OPTION_APPEND=2 TABLE_EXISTS_OPTION_APPEND value
                         * @property {number} TABLE_EXISTS_OPTION_REPLACE=3 TABLE_EXISTS_OPTION_REPLACE value
                         */
                        TableDefinitionOptions.TableExistsOption = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "TABLE_EXISTS_OPTION_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "TABLE_EXISTS_OPTION_FAIL"] = 1;
                            values[valuesById[2] = "TABLE_EXISTS_OPTION_APPEND"] = 2;
                            values[valuesById[3] = "TABLE_EXISTS_OPTION_REPLACE"] = 3;
                            return values;
                        })();

                        return TableDefinitionOptions;
                    })();

                    return CommandStatementIngest;
                })();

                sql.DoPutUpdateResult = (function() {

                    /**
                     * Properties of a DoPutUpdateResult.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IDoPutUpdateResult
                     * @property {number|Long|null} [recordCount] DoPutUpdateResult recordCount
                     */

                    /**
                     * Constructs a new DoPutUpdateResult.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a DoPutUpdateResult.
                     * @implements IDoPutUpdateResult
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IDoPutUpdateResult=} [properties] Properties to set
                     */
                    function DoPutUpdateResult(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DoPutUpdateResult recordCount.
                     * @member {number|Long} recordCount
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @instance
                     */
                    DoPutUpdateResult.prototype.recordCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new DoPutUpdateResult instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IDoPutUpdateResult=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.DoPutUpdateResult} DoPutUpdateResult instance
                     */
                    DoPutUpdateResult.create = function create(properties) {
                        return new DoPutUpdateResult(properties);
                    };

                    /**
                     * Encodes the specified DoPutUpdateResult message. Does not implicitly {@link arrow.flight.protocol.sql.DoPutUpdateResult.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IDoPutUpdateResult} message DoPutUpdateResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DoPutUpdateResult.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.recordCount != null && Object.hasOwnProperty.call(message, "recordCount"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.recordCount);
                        return writer;
                    };

                    /**
                     * Encodes the specified DoPutUpdateResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.DoPutUpdateResult.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IDoPutUpdateResult} message DoPutUpdateResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DoPutUpdateResult.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DoPutUpdateResult message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.DoPutUpdateResult} DoPutUpdateResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DoPutUpdateResult.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.DoPutUpdateResult();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.recordCount = reader.int64();
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
                     * Decodes a DoPutUpdateResult message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.DoPutUpdateResult} DoPutUpdateResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DoPutUpdateResult.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DoPutUpdateResult message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DoPutUpdateResult.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.recordCount != null && message.hasOwnProperty("recordCount"))
                            if (!$util.isInteger(message.recordCount) && !(message.recordCount && $util.isInteger(message.recordCount.low) && $util.isInteger(message.recordCount.high)))
                                return "recordCount: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a DoPutUpdateResult message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.DoPutUpdateResult} DoPutUpdateResult
                     */
                    DoPutUpdateResult.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.DoPutUpdateResult)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.DoPutUpdateResult();
                        if (object.recordCount != null)
                            if ($util.Long)
                                (message.recordCount = $util.Long.fromValue(object.recordCount)).unsigned = false;
                            else if (typeof object.recordCount === "string")
                                message.recordCount = parseInt(object.recordCount, 10);
                            else if (typeof object.recordCount === "number")
                                message.recordCount = object.recordCount;
                            else if (typeof object.recordCount === "object")
                                message.recordCount = new $util.LongBits(object.recordCount.low >>> 0, object.recordCount.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a DoPutUpdateResult message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @static
                     * @param {arrow.flight.protocol.sql.DoPutUpdateResult} message DoPutUpdateResult
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DoPutUpdateResult.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.recordCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.recordCount = options.longs === String ? "0" : 0;
                        if (message.recordCount != null && message.hasOwnProperty("recordCount"))
                            if (typeof message.recordCount === "number")
                                object.recordCount = options.longs === String ? String(message.recordCount) : message.recordCount;
                            else
                                object.recordCount = options.longs === String ? $util.Long.prototype.toString.call(message.recordCount) : options.longs === Number ? new $util.LongBits(message.recordCount.low >>> 0, message.recordCount.high >>> 0).toNumber() : message.recordCount;
                        return object;
                    };

                    /**
                     * Converts this DoPutUpdateResult to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DoPutUpdateResult.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for DoPutUpdateResult
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.DoPutUpdateResult
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    DoPutUpdateResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.DoPutUpdateResult";
                    };

                    return DoPutUpdateResult;
                })();

                sql.DoPutPreparedStatementResult = (function() {

                    /**
                     * Properties of a DoPutPreparedStatementResult.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IDoPutPreparedStatementResult
                     * @property {Uint8Array|null} [preparedStatementHandle] DoPutPreparedStatementResult preparedStatementHandle
                     */

                    /**
                     * Constructs a new DoPutPreparedStatementResult.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents a DoPutPreparedStatementResult.
                     * @implements IDoPutPreparedStatementResult
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IDoPutPreparedStatementResult=} [properties] Properties to set
                     */
                    function DoPutPreparedStatementResult(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DoPutPreparedStatementResult preparedStatementHandle.
                     * @member {Uint8Array|null|undefined} preparedStatementHandle
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @instance
                     */
                    DoPutPreparedStatementResult.prototype.preparedStatementHandle = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * DoPutPreparedStatementResult _preparedStatementHandle.
                     * @member {"preparedStatementHandle"|undefined} _preparedStatementHandle
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @instance
                     */
                    Object.defineProperty(DoPutPreparedStatementResult.prototype, "_preparedStatementHandle", {
                        get: $util.oneOfGetter($oneOfFields = ["preparedStatementHandle"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new DoPutPreparedStatementResult instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IDoPutPreparedStatementResult=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.DoPutPreparedStatementResult} DoPutPreparedStatementResult instance
                     */
                    DoPutPreparedStatementResult.create = function create(properties) {
                        return new DoPutPreparedStatementResult(properties);
                    };

                    /**
                     * Encodes the specified DoPutPreparedStatementResult message. Does not implicitly {@link arrow.flight.protocol.sql.DoPutPreparedStatementResult.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IDoPutPreparedStatementResult} message DoPutPreparedStatementResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DoPutPreparedStatementResult.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.preparedStatementHandle != null && Object.hasOwnProperty.call(message, "preparedStatementHandle"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.preparedStatementHandle);
                        return writer;
                    };

                    /**
                     * Encodes the specified DoPutPreparedStatementResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.DoPutPreparedStatementResult.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IDoPutPreparedStatementResult} message DoPutPreparedStatementResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DoPutPreparedStatementResult.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DoPutPreparedStatementResult message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.DoPutPreparedStatementResult} DoPutPreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DoPutPreparedStatementResult.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.DoPutPreparedStatementResult();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.preparedStatementHandle = reader.bytes();
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
                     * Decodes a DoPutPreparedStatementResult message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.DoPutPreparedStatementResult} DoPutPreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DoPutPreparedStatementResult.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DoPutPreparedStatementResult message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DoPutPreparedStatementResult.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.preparedStatementHandle != null && message.hasOwnProperty("preparedStatementHandle")) {
                            properties._preparedStatementHandle = 1;
                            if (!(message.preparedStatementHandle && typeof message.preparedStatementHandle.length === "number" || $util.isString(message.preparedStatementHandle)))
                                return "preparedStatementHandle: buffer expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a DoPutPreparedStatementResult message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.DoPutPreparedStatementResult} DoPutPreparedStatementResult
                     */
                    DoPutPreparedStatementResult.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.DoPutPreparedStatementResult)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.DoPutPreparedStatementResult();
                        if (object.preparedStatementHandle != null)
                            if (typeof object.preparedStatementHandle === "string")
                                $util.base64.decode(object.preparedStatementHandle, message.preparedStatementHandle = $util.newBuffer($util.base64.length(object.preparedStatementHandle)), 0);
                            else if (object.preparedStatementHandle.length >= 0)
                                message.preparedStatementHandle = object.preparedStatementHandle;
                        return message;
                    };

                    /**
                     * Creates a plain object from a DoPutPreparedStatementResult message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @static
                     * @param {arrow.flight.protocol.sql.DoPutPreparedStatementResult} message DoPutPreparedStatementResult
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DoPutPreparedStatementResult.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.preparedStatementHandle != null && message.hasOwnProperty("preparedStatementHandle")) {
                            object.preparedStatementHandle = options.bytes === String ? $util.base64.encode(message.preparedStatementHandle, 0, message.preparedStatementHandle.length) : options.bytes === Array ? Array.prototype.slice.call(message.preparedStatementHandle) : message.preparedStatementHandle;
                            if (options.oneofs)
                                object._preparedStatementHandle = "preparedStatementHandle";
                        }
                        return object;
                    };

                    /**
                     * Converts this DoPutPreparedStatementResult to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DoPutPreparedStatementResult.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for DoPutPreparedStatementResult
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.DoPutPreparedStatementResult
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    DoPutPreparedStatementResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.DoPutPreparedStatementResult";
                    };

                    return DoPutPreparedStatementResult;
                })();

                sql.ActionCancelQueryRequest = (function() {

                    /**
                     * Properties of an ActionCancelQueryRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionCancelQueryRequest
                     * @property {Uint8Array|null} [info] ActionCancelQueryRequest info
                     */

                    /**
                     * Constructs a new ActionCancelQueryRequest.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionCancelQueryRequest.
                     * @implements IActionCancelQueryRequest
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionCancelQueryRequest=} [properties] Properties to set
                     */
                    function ActionCancelQueryRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionCancelQueryRequest info.
                     * @member {Uint8Array} info
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @instance
                     */
                    ActionCancelQueryRequest.prototype.info = $util.newBuffer([]);

                    /**
                     * Creates a new ActionCancelQueryRequest instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCancelQueryRequest=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryRequest} ActionCancelQueryRequest instance
                     */
                    ActionCancelQueryRequest.create = function create(properties) {
                        return new ActionCancelQueryRequest(properties);
                    };

                    /**
                     * Encodes the specified ActionCancelQueryRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryRequest.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCancelQueryRequest} message ActionCancelQueryRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionCancelQueryRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.info);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionCancelQueryRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCancelQueryRequest} message ActionCancelQueryRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionCancelQueryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionCancelQueryRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryRequest} ActionCancelQueryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionCancelQueryRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionCancelQueryRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.info = reader.bytes();
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
                     * Decodes an ActionCancelQueryRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryRequest} ActionCancelQueryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionCancelQueryRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionCancelQueryRequest message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionCancelQueryRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.info != null && message.hasOwnProperty("info"))
                            if (!(message.info && typeof message.info.length === "number" || $util.isString(message.info)))
                                return "info: buffer expected";
                        return null;
                    };

                    /**
                     * Creates an ActionCancelQueryRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryRequest} ActionCancelQueryRequest
                     */
                    ActionCancelQueryRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionCancelQueryRequest)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionCancelQueryRequest();
                        if (object.info != null)
                            if (typeof object.info === "string")
                                $util.base64.decode(object.info, message.info = $util.newBuffer($util.base64.length(object.info)), 0);
                            else if (object.info.length >= 0)
                                message.info = object.info;
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionCancelQueryRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionCancelQueryRequest} message ActionCancelQueryRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionCancelQueryRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.info = "";
                            else {
                                object.info = [];
                                if (options.bytes !== Array)
                                    object.info = $util.newBuffer(object.info);
                            }
                        if (message.info != null && message.hasOwnProperty("info"))
                            object.info = options.bytes === String ? $util.base64.encode(message.info, 0, message.info.length) : options.bytes === Array ? Array.prototype.slice.call(message.info) : message.info;
                        return object;
                    };

                    /**
                     * Converts this ActionCancelQueryRequest to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionCancelQueryRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionCancelQueryRequest
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryRequest
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionCancelQueryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionCancelQueryRequest";
                    };

                    return ActionCancelQueryRequest;
                })();

                sql.ActionCancelQueryResult = (function() {

                    /**
                     * Properties of an ActionCancelQueryResult.
                     * @memberof arrow.flight.protocol.sql
                     * @interface IActionCancelQueryResult
                     * @property {arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult|null} [result] ActionCancelQueryResult result
                     */

                    /**
                     * Constructs a new ActionCancelQueryResult.
                     * @memberof arrow.flight.protocol.sql
                     * @classdesc Represents an ActionCancelQueryResult.
                     * @implements IActionCancelQueryResult
                     * @constructor
                     * @param {arrow.flight.protocol.sql.IActionCancelQueryResult=} [properties] Properties to set
                     */
                    function ActionCancelQueryResult(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ActionCancelQueryResult result.
                     * @member {arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult} result
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @instance
                     */
                    ActionCancelQueryResult.prototype.result = 0;

                    /**
                     * Creates a new ActionCancelQueryResult instance using the specified properties.
                     * @function create
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCancelQueryResult=} [properties] Properties to set
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryResult} ActionCancelQueryResult instance
                     */
                    ActionCancelQueryResult.create = function create(properties) {
                        return new ActionCancelQueryResult(properties);
                    };

                    /**
                     * Encodes the specified ActionCancelQueryResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryResult.verify|verify} messages.
                     * @function encode
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCancelQueryResult} message ActionCancelQueryResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionCancelQueryResult.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                        return writer;
                    };

                    /**
                     * Encodes the specified ActionCancelQueryResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryResult.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @static
                     * @param {arrow.flight.protocol.sql.IActionCancelQueryResult} message ActionCancelQueryResult message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ActionCancelQueryResult.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an ActionCancelQueryResult message from the specified reader or buffer.
                     * @function decode
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryResult} ActionCancelQueryResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionCancelQueryResult.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.arrow.flight.protocol.sql.ActionCancelQueryResult();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.result = reader.int32();
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
                     * Decodes an ActionCancelQueryResult message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryResult} ActionCancelQueryResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ActionCancelQueryResult.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an ActionCancelQueryResult message.
                     * @function verify
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ActionCancelQueryResult.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.result != null && message.hasOwnProperty("result"))
                            switch (message.result) {
                            default:
                                return "result: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates an ActionCancelQueryResult message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {arrow.flight.protocol.sql.ActionCancelQueryResult} ActionCancelQueryResult
                     */
                    ActionCancelQueryResult.fromObject = function fromObject(object) {
                        if (object instanceof $root.arrow.flight.protocol.sql.ActionCancelQueryResult)
                            return object;
                        var message = new $root.arrow.flight.protocol.sql.ActionCancelQueryResult();
                        switch (object.result) {
                        default:
                            if (typeof object.result === "number") {
                                message.result = object.result;
                                break;
                            }
                            break;
                        case "CANCEL_RESULT_UNSPECIFIED":
                        case 0:
                            message.result = 0;
                            break;
                        case "CANCEL_RESULT_CANCELLED":
                        case 1:
                            message.result = 1;
                            break;
                        case "CANCEL_RESULT_CANCELLING":
                        case 2:
                            message.result = 2;
                            break;
                        case "CANCEL_RESULT_NOT_CANCELLABLE":
                        case 3:
                            message.result = 3;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an ActionCancelQueryResult message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @static
                     * @param {arrow.flight.protocol.sql.ActionCancelQueryResult} message ActionCancelQueryResult
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ActionCancelQueryResult.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.result = options.enums === String ? "CANCEL_RESULT_UNSPECIFIED" : 0;
                        if (message.result != null && message.hasOwnProperty("result"))
                            object.result = options.enums === String ? $root.arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult[message.result] === undefined ? message.result : $root.arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult[message.result] : message.result;
                        return object;
                    };

                    /**
                     * Converts this ActionCancelQueryResult to JSON.
                     * @function toJSON
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ActionCancelQueryResult.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ActionCancelQueryResult
                     * @function getTypeUrl
                     * @memberof arrow.flight.protocol.sql.ActionCancelQueryResult
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ActionCancelQueryResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/arrow.flight.protocol.sql.ActionCancelQueryResult";
                    };

                    /**
                     * CancelResult enum.
                     * @name arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult
                     * @enum {number}
                     * @property {number} CANCEL_RESULT_UNSPECIFIED=0 CANCEL_RESULT_UNSPECIFIED value
                     * @property {number} CANCEL_RESULT_CANCELLED=1 CANCEL_RESULT_CANCELLED value
                     * @property {number} CANCEL_RESULT_CANCELLING=2 CANCEL_RESULT_CANCELLING value
                     * @property {number} CANCEL_RESULT_NOT_CANCELLABLE=3 CANCEL_RESULT_NOT_CANCELLABLE value
                     */
                    ActionCancelQueryResult.CancelResult = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "CANCEL_RESULT_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "CANCEL_RESULT_CANCELLED"] = 1;
                        values[valuesById[2] = "CANCEL_RESULT_CANCELLING"] = 2;
                        values[valuesById[3] = "CANCEL_RESULT_NOT_CANCELLABLE"] = 3;
                        return values;
                    })();

                    return ActionCancelQueryResult;
                })();

                return sql;
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

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (var i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
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
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (var i = 0; i < message.file.length; ++i) {
                        var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (var i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (var j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDescriptorSet
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDescriptorSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileDescriptorSet";
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
             * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
             * @property {string|null} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @member {Array.<number>} publicDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @member {Array.<number>} weakDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @member {Array.<google.protobuf.IDescriptorProto>} messageType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (var i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (var i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (var i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (var i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (var i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (var i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message["package"] = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        }
                    case 10: {
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        }
                    case 11: {
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        }
                    case 4: {
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.syntax = reader.string();
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
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (var i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                    if (!Array.isArray(message.publicDependency))
                        return "publicDependency: array expected";
                    for (var i = 0; i < message.publicDependency.length; ++i)
                        if (!$util.isInteger(message.publicDependency[i]))
                            return "publicDependency: integer[] expected";
                }
                if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                    if (!Array.isArray(message.weakDependency))
                        return "weakDependency: array expected";
                    for (var i = 0; i < message.weakDependency.length; ++i)
                        if (!$util.isInteger(message.weakDependency[i]))
                            return "weakDependency: integer[] expected";
                }
                if (message.messageType != null && message.hasOwnProperty("messageType")) {
                    if (!Array.isArray(message.messageType))
                        return "messageType: array expected";
                    for (var i = 0; i < message.messageType.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                        if (error)
                            return "messageType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (var i = 0; i < message.enumType.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (var i = 0; i < message.service.length; ++i) {
                        var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                    var error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                    if (error)
                        return "sourceCodeInfo." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (var i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.publicDependency) {
                    if (!Array.isArray(object.publicDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                    message.publicDependency = [];
                    for (var i = 0; i < object.publicDependency.length; ++i)
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                }
                if (object.weakDependency) {
                    if (!Array.isArray(object.weakDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                    message.weakDependency = [];
                    for (var i = 0; i < object.weakDependency.length; ++i)
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                }
                if (object.messageType) {
                    if (!Array.isArray(object.messageType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                    message.messageType = [];
                    for (var i = 0; i < object.messageType.length; ++i) {
                        if (typeof object.messageType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                        message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (var i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.sourceCodeInfo != null) {
                    if (typeof object.sourceCodeInfo !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                    message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                    object.syntax = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (var j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.messageType && message.messageType.length) {
                    object.messageType = [];
                    for (var j = 0; j < message.messageType.length; ++j)
                        object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (var j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (var j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                if (message.publicDependency && message.publicDependency.length) {
                    object.publicDependency = [];
                    for (var j = 0; j < message.publicDependency.length; ++j)
                        object.publicDependency[j] = message.publicDependency[j];
                }
                if (message.weakDependency && message.weakDependency.length) {
                    object.weakDependency = [];
                    for (var j = 0; j < message.weakDependency.length; ++j)
                        object.weakDependency[j] = message.weakDependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileDescriptorProto";
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
             * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
             * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @member {Array.<string>} reservedName
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (var i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (var i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (var i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (var i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (var i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (var i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (var i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            if (!(message.oneofDecl && message.oneofDecl.length))
                                message.oneofDecl = [];
                            message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 10: {
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
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
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (var i = 0; i < message.field.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (var i = 0; i < message.extension.length; ++i) {
                        var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                    if (!Array.isArray(message.nestedType))
                        return "nestedType: array expected";
                    for (var i = 0; i < message.nestedType.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                        if (error)
                            return "nestedType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (var i = 0; i < message.enumType.length; ++i) {
                        var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                    if (!Array.isArray(message.extensionRange))
                        return "extensionRange: array expected";
                    for (var i = 0; i < message.extensionRange.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                        if (error)
                            return "extensionRange." + error;
                    }
                }
                if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                    if (!Array.isArray(message.oneofDecl))
                        return "oneofDecl: array expected";
                    for (var i = 0; i < message.oneofDecl.length; ++i) {
                        var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                        if (error)
                            return "oneofDecl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (var i = 0; i < message.reservedRange.length; ++i) {
                        var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (var i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                var message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (var i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    if (!Array.isArray(object.nestedType))
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                    message.nestedType = [];
                    for (var i = 0; i < object.nestedType.length; ++i) {
                        if (typeof object.nestedType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                        message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    if (!Array.isArray(object.extensionRange))
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                    message.extensionRange = [];
                    for (var i = 0; i < object.extensionRange.length; ++i) {
                        if (typeof object.extensionRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                        message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                    }
                }
                if (object.oneofDecl) {
                    if (!Array.isArray(object.oneofDecl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                    message.oneofDecl = [];
                    for (var i = 0; i < object.oneofDecl.length; ++i) {
                        if (typeof object.oneofDecl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                        message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (var i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (var i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.extension = [];
                    object.oneofDecl = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (var j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nestedType && message.nestedType.length) {
                    object.nestedType = [];
                    for (var j = 0; j < message.nestedType.length; ++j)
                        object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (var j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.extensionRange && message.extensionRange.length) {
                    object.extensionRange = [];
                    for (var j = 0; j < message.extensionRange.length; ++j)
                        object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneofDecl && message.oneofDecl.length) {
                    object.oneofDecl = [];
                    for (var j = 0; j < message.oneofDecl.length; ++j)
                        object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                }
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (var j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (var j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.DescriptorProto";
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.start = reader.int32();
                                break;
                            }
                        case 2: {
                                message.end = reader.int32();
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
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ExtensionRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ExtensionRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.start = reader.int32();
                                break;
                            }
                        case 2: {
                                message.end = reader.int32();
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
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ReservedRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ReservedRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto.ReservedRange";
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [typeName] FieldDescriptorProto typeName
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
             * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
             * @property {string|null} [jsonName] FieldDescriptorProto jsonName
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @member {string} typeName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @member {string} defaultValue
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @member {number} oneofIndex
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @member {string} jsonName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.number = reader.int32();
                            break;
                        }
                    case 4: {
                            message.label = reader.int32();
                            break;
                        }
                    case 5: {
                            message.type = reader.int32();
                            break;
                        }
                    case 6: {
                            message.typeName = reader.string();
                            break;
                        }
                    case 2: {
                            message.extendee = reader.string();
                            break;
                        }
                    case 7: {
                            message.defaultValue = reader.string();
                            break;
                        }
                    case 9: {
                            message.oneofIndex = reader.int32();
                            break;
                        }
                    case 10: {
                            message.jsonName = reader.string();
                            break;
                        }
                    case 8: {
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
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
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    if (!$util.isString(message.typeName))
                        return "typeName: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    if (!$util.isInteger(message.oneofIndex))
                        return "oneofIndex: integer expected";
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    if (!$util.isString(message.jsonName))
                        return "jsonName: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                default:
                    if (typeof object.label === "number") {
                        message.label = object.label;
                        break;
                    }
                    break;
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName != null)
                    message.typeName = String(object.typeName);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
                if (object.oneofIndex != null)
                    message.oneofIndex = object.oneofIndex | 0;
                if (object.jsonName != null)
                    message.jsonName = String(object.jsonName);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.defaultValue = "";
                    object.options = null;
                    object.oneofIndex = 0;
                    object.jsonName = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    object.typeName = message.typeName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    object.oneofIndex = message.oneofIndex;
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    object.jsonName = message.jsonName;
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldDescriptorProto";
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.IOneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
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
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OneofDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.OneofDescriptorProto";
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
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
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i) {
                        var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto";
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.number = reader.int32();
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
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
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumValueDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumValueDescriptorProto";
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (var i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
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
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (var i = 0; i < message.method.length; ++i) {
                        var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (var i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (var j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ServiceDescriptorProto";
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [inputType] MethodDescriptorProto inputType
             * @property {string|null} [outputType] MethodDescriptorProto outputType
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
             * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @member {string} inputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @member {string} outputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @member {boolean} clientStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @member {boolean} serverStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.inputType = reader.string();
                            break;
                        }
                    case 3: {
                            message.outputType = reader.string();
                            break;
                        }
                    case 4: {
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.clientStreaming = reader.bool();
                            break;
                        }
                    case 6: {
                            message.serverStreaming = reader.bool();
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
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    if (!$util.isString(message.inputType))
                        return "inputType: string expected";
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    if (!$util.isString(message.outputType))
                        return "outputType: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    var error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    if (typeof message.clientStreaming !== "boolean")
                        return "clientStreaming: boolean expected";
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    if (typeof message.serverStreaming !== "boolean")
                        return "serverStreaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputType != null)
                    message.inputType = String(object.inputType);
                if (object.outputType != null)
                    message.outputType = String(object.outputType);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.clientStreaming != null)
                    message.clientStreaming = Boolean(object.clientStreaming);
                if (object.serverStreaming != null)
                    message.serverStreaming = Boolean(object.serverStreaming);
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                    object.clientStreaming = false;
                    object.serverStreaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    object.inputType = message.inputType;
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    object.outputType = message.outputType;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    object.clientStreaming = message.clientStreaming;
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    object.serverStreaming = message.serverStreaming;
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MethodDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MethodDescriptorProto";
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [javaPackage] FileOptions javaPackage
             * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
             * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
             * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
             * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
             * @property {string|null} [goPackage] FileOptions goPackage
             * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
             * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
             * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
             * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
             * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @member {string} javaPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @member {string} javaOuterClassname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @member {boolean} javaMultipleFiles
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @member {boolean} javaGenerateEqualsAndHash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @member {boolean} javaStringCheckUtf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @member {string} goPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @member {boolean} ccGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @member {boolean} javaGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @member {boolean} pyGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @member {boolean} ccEnableArenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccEnableArenas = false;

            /**
             * FileOptions objcClassPrefix.
             * @member {string} objcClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @member {string} csharpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.javaPackage = reader.string();
                            break;
                        }
                    case 8: {
                            message.javaOuterClassname = reader.string();
                            break;
                        }
                    case 10: {
                            message.javaMultipleFiles = reader.bool();
                            break;
                        }
                    case 20: {
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        }
                    case 27: {
                            message.javaStringCheckUtf8 = reader.bool();
                            break;
                        }
                    case 9: {
                            message.optimizeFor = reader.int32();
                            break;
                        }
                    case 11: {
                            message.goPackage = reader.string();
                            break;
                        }
                    case 16: {
                            message.ccGenericServices = reader.bool();
                            break;
                        }
                    case 17: {
                            message.javaGenericServices = reader.bool();
                            break;
                        }
                    case 18: {
                            message.pyGenericServices = reader.bool();
                            break;
                        }
                    case 23: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 31: {
                            message.ccEnableArenas = reader.bool();
                            break;
                        }
                    case 36: {
                            message.objcClassPrefix = reader.string();
                            break;
                        }
                    case 37: {
                            message.csharpNamespace = reader.string();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    if (!$util.isString(message.javaPackage))
                        return "javaPackage: string expected";
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    if (!$util.isString(message.javaOuterClassname))
                        return "javaOuterClassname: string expected";
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    if (typeof message.javaMultipleFiles !== "boolean")
                        return "javaMultipleFiles: boolean expected";
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                        return "javaGenerateEqualsAndHash: boolean expected";
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    if (typeof message.javaStringCheckUtf8 !== "boolean")
                        return "javaStringCheckUtf8: boolean expected";
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    switch (message.optimizeFor) {
                    default:
                        return "optimizeFor: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    if (!$util.isString(message.goPackage))
                        return "goPackage: string expected";
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    if (typeof message.ccGenericServices !== "boolean")
                        return "ccGenericServices: boolean expected";
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    if (typeof message.javaGenericServices !== "boolean")
                        return "javaGenericServices: boolean expected";
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    if (typeof message.pyGenericServices !== "boolean")
                        return "pyGenericServices: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    if (typeof message.ccEnableArenas !== "boolean")
                        return "ccEnableArenas: boolean expected";
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    if (!$util.isString(message.objcClassPrefix))
                        return "objcClassPrefix: string expected";
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    if (!$util.isString(message.csharpNamespace))
                        return "csharpNamespace: string expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                var message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage != null)
                    message.javaPackage = String(object.javaPackage);
                if (object.javaOuterClassname != null)
                    message.javaOuterClassname = String(object.javaOuterClassname);
                if (object.javaMultipleFiles != null)
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                if (object.javaGenerateEqualsAndHash != null)
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                if (object.javaStringCheckUtf8 != null)
                    message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                switch (object.optimizeFor) {
                default:
                    if (typeof object.optimizeFor === "number") {
                        message.optimizeFor = object.optimizeFor;
                        break;
                    }
                    break;
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage != null)
                    message.goPackage = String(object.goPackage);
                if (object.ccGenericServices != null)
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                if (object.javaGenericServices != null)
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                if (object.pyGenericServices != null)
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.ccEnableArenas != null)
                    message.ccEnableArenas = Boolean(object.ccEnableArenas);
                if (object.objcClassPrefix != null)
                    message.objcClassPrefix = String(object.objcClassPrefix);
                if (object.csharpNamespace != null)
                    message.csharpNamespace = String(object.csharpNamespace);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.optimizeFor = options.enums === String ? "SPEED" : 1;
                    object.javaMultipleFiles = false;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.javaGenerateEqualsAndHash = false;
                    object.deprecated = false;
                    object.javaStringCheckUtf8 = false;
                    object.ccEnableArenas = false;
                    object.objcClassPrefix = "";
                    object.csharpNamespace = "";
                }
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    object.javaPackage = message.javaPackage;
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    object.javaOuterClassname = message.javaOuterClassname;
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] === undefined ? message.optimizeFor : $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    object.javaMultipleFiles = message.javaMultipleFiles;
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    object.goPackage = message.goPackage;
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    object.ccGenericServices = message.ccGenericServices;
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    object.javaGenericServices = message.javaGenericServices;
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    object.pyGenericServices = message.pyGenericServices;
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    object.ccEnableArenas = message.ccEnableArenas;
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    object.objcClassPrefix = message.objcClassPrefix;
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    object.csharpNamespace = message.csharpNamespace;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileOptions";
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
             * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [mapEntry] MessageOptions mapEntry
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
             * @property {boolean|null} [".arrow.flight.protocol.sql.experimental"] MessageOptions .arrow.flight.protocol.sql.experimental
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @member {boolean} messageSetWireFormat
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @member {boolean} noStandardDescriptorAccessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @member {boolean} mapEntry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * MessageOptions .arrow.flight.protocol.sql.experimental.
             * @member {boolean} .arrow.flight.protocol.sql.experimental
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".arrow.flight.protocol.sql.experimental"] = false;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".arrow.flight.protocol.sql.experimental"] != null && Object.hasOwnProperty.call(message, ".arrow.flight.protocol.sql.experimental"))
                    writer.uint32(/* id 1000, wireType 0 =*/8000).bool(message[".arrow.flight.protocol.sql.experimental"]);
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.messageSetWireFormat = reader.bool();
                            break;
                        }
                    case 2: {
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 7: {
                            message.mapEntry = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 1000: {
                            message[".arrow.flight.protocol.sql.experimental"] = reader.bool();
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
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    if (typeof message.messageSetWireFormat !== "boolean")
                        return "messageSetWireFormat: boolean expected";
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    if (typeof message.noStandardDescriptorAccessor !== "boolean")
                        return "noStandardDescriptorAccessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    if (typeof message.mapEntry !== "boolean")
                        return "mapEntry: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".arrow.flight.protocol.sql.experimental"] != null && message.hasOwnProperty(".arrow.flight.protocol.sql.experimental"))
                    if (typeof message[".arrow.flight.protocol.sql.experimental"] !== "boolean")
                        return ".arrow.flight.protocol.sql.experimental: boolean expected";
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                var message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat != null)
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                if (object.noStandardDescriptorAccessor != null)
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.mapEntry != null)
                    message.mapEntry = Boolean(object.mapEntry);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".arrow.flight.protocol.sql.experimental"] != null)
                    message[".arrow.flight.protocol.sql.experimental"] = Boolean(object[".arrow.flight.protocol.sql.experimental"]);
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object.deprecated = false;
                    object.mapEntry = false;
                    object[".arrow.flight.protocol.sql.experimental"] = false;
                }
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    object.messageSetWireFormat = message.messageSetWireFormat;
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    object.mapEntry = message.mapEntry;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".arrow.flight.protocol.sql.experimental"] != null && message.hasOwnProperty(".arrow.flight.protocol.sql.experimental"))
                    object[".arrow.flight.protocol.sql.experimental"] = message[".arrow.flight.protocol.sql.experimental"];
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MessageOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MessageOptions";
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.ctype = reader.int32();
                            break;
                        }
                    case 2: {
                            message.packed = reader.bool();
                            break;
                        }
                    case 6: {
                            message.jstype = reader.int32();
                            break;
                        }
                    case 5: {
                            message.lazy = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 10: {
                            message.weak = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                var message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                default:
                    if (typeof object.ctype === "number") {
                        message.ctype = object.ctype;
                        break;
                    }
                    break;
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                default:
                    if (typeof object.jstype === "number") {
                        message.jstype = object.jstype;
                        break;
                    }
                    break;
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] === undefined ? message.jstype : $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldOptions";
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                var message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this OneofOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OneofOptions
             * @function getTypeUrl
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OneofOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.OneofOptions";
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allowAlias] EnumOptions allowAlias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @member {boolean} allowAlias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            message.allowAlias = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    if (typeof message.allowAlias !== "boolean")
                        return "allowAlias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                var message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias != null)
                    message.allowAlias = Boolean(object.allowAlias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.allowAlias = false;
                    object.deprecated = false;
                }
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    object.allowAlias = message.allowAlias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumOptions";
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                var message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumValueOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumValueOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumValueOptions";
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                var message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceOptions
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ServiceOptions";
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
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
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                var message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MethodOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MethodOptions";
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifierValue] UninterpretedOption identifierValue
             * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
             * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
             * @property {number|null} [doubleValue] UninterpretedOption doubleValue
             * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
             * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @member {string} identifierValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @member {number|Long} positiveIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @member {number|Long} negativeIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @member {number} doubleValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @member {Uint8Array} stringValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @member {string} aggregateValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (var i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.identifierValue = reader.string();
                            break;
                        }
                    case 4: {
                            message.positiveIntValue = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.negativeIntValue = reader.int64();
                            break;
                        }
                    case 6: {
                            message.doubleValue = reader.double();
                            break;
                        }
                    case 7: {
                            message.stringValue = reader.bytes();
                            break;
                        }
                    case 8: {
                            message.aggregateValue = reader.string();
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
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (var i = 0; i < message.name.length; ++i) {
                        var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    if (!$util.isString(message.identifierValue))
                        return "identifierValue: string expected";
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                        return "positiveIntValue: integer|Long expected";
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                        return "negativeIntValue: integer|Long expected";
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                        return "stringValue: buffer expected";
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    if (!$util.isString(message.aggregateValue))
                        return "aggregateValue: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                var message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (var i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue != null)
                    message.identifierValue = String(object.identifierValue);
                if (object.positiveIntValue != null)
                    if ($util.Long)
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    else if (typeof object.positiveIntValue === "string")
                        message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                    else if (typeof object.positiveIntValue === "number")
                        message.positiveIntValue = object.positiveIntValue;
                    else if (typeof object.positiveIntValue === "object")
                        message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                if (object.negativeIntValue != null)
                    if ($util.Long)
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    else if (typeof object.negativeIntValue === "string")
                        message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                    else if (typeof object.negativeIntValue === "number")
                        message.negativeIntValue = object.negativeIntValue;
                    else if (typeof object.negativeIntValue === "object")
                        message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    if (typeof object.stringValue === "string")
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    else if (object.stringValue.length >= 0)
                        message.stringValue = object.stringValue;
                if (object.aggregateValue != null)
                    message.aggregateValue = String(object.aggregateValue);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    object.doubleValue = 0;
                    if (options.bytes === String)
                        object.stringValue = "";
                    else {
                        object.stringValue = [];
                        if (options.bytes !== Array)
                            object.stringValue = $util.newBuffer(object.stringValue);
                    }
                    object.aggregateValue = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (var j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    object.identifierValue = message.identifierValue;
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (typeof message.positiveIntValue === "number")
                        object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                    else
                        object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (typeof message.negativeIntValue === "number")
                        object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                    else
                        object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    object.aggregateValue = message.aggregateValue;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UninterpretedOption
             * @function getTypeUrl
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UninterpretedOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UninterpretedOption";
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} namePart NamePart namePart
                 * @property {boolean} isExtension NamePart isExtension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @member {string} namePart
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @member {boolean} isExtension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.namePart = reader.string();
                                break;
                            }
                        case 2: {
                                message.isExtension = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.namePart))
                        return "namePart: string expected";
                    if (typeof message.isExtension !== "boolean")
                        return "isExtension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart != null)
                        message.namePart = String(object.namePart);
                    if (object.isExtension != null)
                        message.isExtension = Boolean(object.isExtension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    if (message.namePart != null && message.hasOwnProperty("namePart"))
                        object.namePart = message.namePart;
                    if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                        object.isExtension = message.isExtension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for NamePart
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                NamePart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UninterpretedOption.NamePart";
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (var i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
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
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (var i = 0; i < message.location.length; ++i) {
                        var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                var message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (var i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (var j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SourceCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SourceCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.SourceCodeInfo";
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leadingComments] Location leadingComments
                 * @property {string|null} [trailingComments] Location trailingComments
                 * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @member {string} leadingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @member {string} trailingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @member {Array.<string>} leadingDetachedComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                    if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            }
                        case 2: {
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            }
                        case 3: {
                                message.leadingComments = reader.string();
                                break;
                            }
                        case 4: {
                                message.trailingComments = reader.string();
                                break;
                            }
                        case 6: {
                                if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                    message.leadingDetachedComments = [];
                                message.leadingDetachedComments.push(reader.string());
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
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
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
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (var i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        if (!$util.isString(message.leadingComments))
                            return "leadingComments: string expected";
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        if (!$util.isString(message.trailingComments))
                            return "trailingComments: string expected";
                    if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                        if (!Array.isArray(message.leadingDetachedComments))
                            return "leadingDetachedComments: array expected";
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                            if (!$util.isString(message.leadingDetachedComments[i]))
                                return "leadingDetachedComments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (var i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leadingComments != null)
                        message.leadingComments = String(object.leadingComments);
                    if (object.trailingComments != null)
                        message.trailingComments = String(object.trailingComments);
                    if (object.leadingDetachedComments) {
                        if (!Array.isArray(object.leadingDetachedComments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                        message.leadingDetachedComments = [];
                        for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                            message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leadingDetachedComments = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (var j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        object.leadingComments = message.leadingComments;
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        object.trailingComments = message.trailingComments;
                    if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                        object.leadingDetachedComments = [];
                        for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                            object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                    }
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Location
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.SourceCodeInfo.Location";
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (var i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
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
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (var i = 0; i < message.annotation.length; ++i) {
                        var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                var message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (var i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (var j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GeneratedCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo";
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [sourceFile] Annotation sourceFile
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @member {string} sourceFile
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                    if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            }
                        case 2: {
                                message.sourceFile = reader.string();
                                break;
                            }
                        case 3: {
                                message.begin = reader.int32();
                                break;
                            }
                        case 4: {
                                message.end = reader.int32();
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
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (var i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        if (!$util.isString(message.sourceFile))
                            return "sourceFile: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.sourceFile != null)
                        message.sourceFile = String(object.sourceFile);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.sourceFile = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        object.sourceFile = message.sourceFile;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this Annotation to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Annotation
                 * @function getTypeUrl
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Annotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.GeneratedCodeInfo.Annotation";
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;

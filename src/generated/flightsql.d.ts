import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace arrow. */
export namespace arrow {

    /** Namespace flight. */
    namespace flight {

        /** Namespace protocol. */
        namespace protocol {

            /** Namespace sql. */
            namespace sql {

                /** Properties of a CommandGetSqlInfo. */
                interface ICommandGetSqlInfo {

                    /** CommandGetSqlInfo info */
                    info?: (number[]|null);
                }

                /** Represents a CommandGetSqlInfo. */
                class CommandGetSqlInfo implements ICommandGetSqlInfo {

                    /**
                     * Constructs a new CommandGetSqlInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandGetSqlInfo);

                    /** CommandGetSqlInfo info. */
                    public info: number[];

                    /**
                     * Creates a new CommandGetSqlInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetSqlInfo instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandGetSqlInfo): arrow.flight.protocol.sql.CommandGetSqlInfo;

                    /**
                     * Encodes the specified CommandGetSqlInfo message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetSqlInfo.verify|verify} messages.
                     * @param message CommandGetSqlInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandGetSqlInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetSqlInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetSqlInfo.verify|verify} messages.
                     * @param message CommandGetSqlInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandGetSqlInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetSqlInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandGetSqlInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetSqlInfo;

                    /**
                     * Decodes a CommandGetSqlInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandGetSqlInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetSqlInfo;

                    /**
                     * Verifies a CommandGetSqlInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetSqlInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetSqlInfo
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetSqlInfo;

                    /**
                     * Creates a plain object from a CommandGetSqlInfo message. Also converts values to other types if specified.
                     * @param message CommandGetSqlInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandGetSqlInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetSqlInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandGetSqlInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** SqlInfo enum. */
                enum SqlInfo {
                    FLIGHT_SQL_SERVER_NAME = 0,
                    FLIGHT_SQL_SERVER_VERSION = 1,
                    FLIGHT_SQL_SERVER_ARROW_VERSION = 2,
                    FLIGHT_SQL_SERVER_READ_ONLY = 3,
                    FLIGHT_SQL_SERVER_SQL = 4,
                    FLIGHT_SQL_SERVER_SUBSTRAIT = 5,
                    FLIGHT_SQL_SERVER_SUBSTRAIT_MIN_VERSION = 6,
                    FLIGHT_SQL_SERVER_SUBSTRAIT_MAX_VERSION = 7,
                    FLIGHT_SQL_SERVER_TRANSACTION = 8,
                    FLIGHT_SQL_SERVER_CANCEL = 9,
                    FLIGHT_SQL_SERVER_BULK_INGESTION = 10,
                    FLIGHT_SQL_SERVER_INGEST_TRANSACTIONS_SUPPORTED = 11,
                    FLIGHT_SQL_SERVER_STATEMENT_TIMEOUT = 100,
                    FLIGHT_SQL_SERVER_TRANSACTION_TIMEOUT = 101,
                    SQL_DDL_CATALOG = 500,
                    SQL_DDL_SCHEMA = 501,
                    SQL_DDL_TABLE = 502,
                    SQL_IDENTIFIER_CASE = 503,
                    SQL_IDENTIFIER_QUOTE_CHAR = 504,
                    SQL_QUOTED_IDENTIFIER_CASE = 505,
                    SQL_ALL_TABLES_ARE_SELECTABLE = 506,
                    SQL_NULL_ORDERING = 507,
                    SQL_KEYWORDS = 508,
                    SQL_NUMERIC_FUNCTIONS = 509,
                    SQL_STRING_FUNCTIONS = 510,
                    SQL_SYSTEM_FUNCTIONS = 511,
                    SQL_DATETIME_FUNCTIONS = 512,
                    SQL_SEARCH_STRING_ESCAPE = 513,
                    SQL_EXTRA_NAME_CHARACTERS = 514,
                    SQL_SUPPORTS_COLUMN_ALIASING = 515,
                    SQL_NULL_PLUS_NULL_IS_NULL = 516,
                    SQL_SUPPORTS_CONVERT = 517,
                    SQL_SUPPORTS_TABLE_CORRELATION_NAMES = 518,
                    SQL_SUPPORTS_DIFFERENT_TABLE_CORRELATION_NAMES = 519,
                    SQL_SUPPORTS_EXPRESSIONS_IN_ORDER_BY = 520,
                    SQL_SUPPORTS_ORDER_BY_UNRELATED = 521,
                    SQL_SUPPORTED_GROUP_BY = 522,
                    SQL_SUPPORTS_LIKE_ESCAPE_CLAUSE = 523,
                    SQL_SUPPORTS_NON_NULLABLE_COLUMNS = 524,
                    SQL_SUPPORTED_GRAMMAR = 525,
                    SQL_ANSI92_SUPPORTED_LEVEL = 526,
                    SQL_SUPPORTS_INTEGRITY_ENHANCEMENT_FACILITY = 527,
                    SQL_OUTER_JOINS_SUPPORT_LEVEL = 528,
                    SQL_SCHEMA_TERM = 529,
                    SQL_PROCEDURE_TERM = 530,
                    SQL_CATALOG_TERM = 531,
                    SQL_CATALOG_AT_START = 532,
                    SQL_SCHEMAS_SUPPORTED_ACTIONS = 533,
                    SQL_CATALOGS_SUPPORTED_ACTIONS = 534,
                    SQL_SUPPORTED_POSITIONED_COMMANDS = 535,
                    SQL_SELECT_FOR_UPDATE_SUPPORTED = 536,
                    SQL_STORED_PROCEDURES_SUPPORTED = 537,
                    SQL_SUPPORTED_SUBQUERIES = 538,
                    SQL_CORRELATED_SUBQUERIES_SUPPORTED = 539,
                    SQL_SUPPORTED_UNIONS = 540,
                    SQL_MAX_BINARY_LITERAL_LENGTH = 541,
                    SQL_MAX_CHAR_LITERAL_LENGTH = 542,
                    SQL_MAX_COLUMN_NAME_LENGTH = 543,
                    SQL_MAX_COLUMNS_IN_GROUP_BY = 544,
                    SQL_MAX_COLUMNS_IN_INDEX = 545,
                    SQL_MAX_COLUMNS_IN_ORDER_BY = 546,
                    SQL_MAX_COLUMNS_IN_SELECT = 547,
                    SQL_MAX_COLUMNS_IN_TABLE = 548,
                    SQL_MAX_CONNECTIONS = 549,
                    SQL_MAX_CURSOR_NAME_LENGTH = 550,
                    SQL_MAX_INDEX_LENGTH = 551,
                    SQL_DB_SCHEMA_NAME_LENGTH = 552,
                    SQL_MAX_PROCEDURE_NAME_LENGTH = 553,
                    SQL_MAX_CATALOG_NAME_LENGTH = 554,
                    SQL_MAX_ROW_SIZE = 555,
                    SQL_MAX_ROW_SIZE_INCLUDES_BLOBS = 556,
                    SQL_MAX_STATEMENT_LENGTH = 557,
                    SQL_MAX_STATEMENTS = 558,
                    SQL_MAX_TABLE_NAME_LENGTH = 559,
                    SQL_MAX_TABLES_IN_SELECT = 560,
                    SQL_MAX_USERNAME_LENGTH = 561,
                    SQL_DEFAULT_TRANSACTION_ISOLATION = 562,
                    SQL_TRANSACTIONS_SUPPORTED = 563,
                    SQL_SUPPORTED_TRANSACTIONS_ISOLATION_LEVELS = 564,
                    SQL_DATA_DEFINITION_CAUSES_TRANSACTION_COMMIT = 565,
                    SQL_DATA_DEFINITIONS_IN_TRANSACTIONS_IGNORED = 566,
                    SQL_SUPPORTED_RESULT_SET_TYPES = 567,
                    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_UNSPECIFIED = 568,
                    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_FORWARD_ONLY = 569,
                    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_SENSITIVE = 570,
                    SQL_SUPPORTED_CONCURRENCIES_FOR_RESULT_SET_SCROLL_INSENSITIVE = 571,
                    SQL_BATCH_UPDATES_SUPPORTED = 572,
                    SQL_SAVEPOINTS_SUPPORTED = 573,
                    SQL_NAMED_PARAMETERS_SUPPORTED = 574,
                    SQL_LOCATORS_UPDATE_COPY = 575,
                    SQL_STORED_FUNCTIONS_USING_CALL_SYNTAX_SUPPORTED = 576
                }

                /** SqlSupportedTransaction enum. */
                enum SqlSupportedTransaction {
                    SQL_SUPPORTED_TRANSACTION_NONE = 0,
                    SQL_SUPPORTED_TRANSACTION_TRANSACTION = 1,
                    SQL_SUPPORTED_TRANSACTION_SAVEPOINT = 2
                }

                /** SqlSupportedCaseSensitivity enum. */
                enum SqlSupportedCaseSensitivity {
                    SQL_CASE_SENSITIVITY_UNKNOWN = 0,
                    SQL_CASE_SENSITIVITY_CASE_INSENSITIVE = 1,
                    SQL_CASE_SENSITIVITY_UPPERCASE = 2,
                    SQL_CASE_SENSITIVITY_LOWERCASE = 3
                }

                /** SqlNullOrdering enum. */
                enum SqlNullOrdering {
                    SQL_NULLS_SORTED_HIGH = 0,
                    SQL_NULLS_SORTED_LOW = 1,
                    SQL_NULLS_SORTED_AT_START = 2,
                    SQL_NULLS_SORTED_AT_END = 3
                }

                /** SupportedSqlGrammar enum. */
                enum SupportedSqlGrammar {
                    SQL_MINIMUM_GRAMMAR = 0,
                    SQL_CORE_GRAMMAR = 1,
                    SQL_EXTENDED_GRAMMAR = 2
                }

                /** SupportedAnsi92SqlGrammarLevel enum. */
                enum SupportedAnsi92SqlGrammarLevel {
                    ANSI92_ENTRY_SQL = 0,
                    ANSI92_INTERMEDIATE_SQL = 1,
                    ANSI92_FULL_SQL = 2
                }

                /** SqlOuterJoinsSupportLevel enum. */
                enum SqlOuterJoinsSupportLevel {
                    SQL_JOINS_UNSUPPORTED = 0,
                    SQL_LIMITED_OUTER_JOINS = 1,
                    SQL_FULL_OUTER_JOINS = 2
                }

                /** SqlSupportedGroupBy enum. */
                enum SqlSupportedGroupBy {
                    SQL_GROUP_BY_UNRELATED = 0,
                    SQL_GROUP_BY_BEYOND_SELECT = 1
                }

                /** SqlSupportedElementActions enum. */
                enum SqlSupportedElementActions {
                    SQL_ELEMENT_IN_PROCEDURE_CALLS = 0,
                    SQL_ELEMENT_IN_INDEX_DEFINITIONS = 1,
                    SQL_ELEMENT_IN_PRIVILEGE_DEFINITIONS = 2
                }

                /** SqlSupportedPositionedCommands enum. */
                enum SqlSupportedPositionedCommands {
                    SQL_POSITIONED_DELETE = 0,
                    SQL_POSITIONED_UPDATE = 1
                }

                /** SqlSupportedSubqueries enum. */
                enum SqlSupportedSubqueries {
                    SQL_SUBQUERIES_IN_COMPARISONS = 0,
                    SQL_SUBQUERIES_IN_EXISTS = 1,
                    SQL_SUBQUERIES_IN_INS = 2,
                    SQL_SUBQUERIES_IN_QUANTIFIEDS = 3
                }

                /** SqlSupportedUnions enum. */
                enum SqlSupportedUnions {
                    SQL_UNION = 0,
                    SQL_UNION_ALL = 1
                }

                /** SqlTransactionIsolationLevel enum. */
                enum SqlTransactionIsolationLevel {
                    SQL_TRANSACTION_NONE = 0,
                    SQL_TRANSACTION_READ_UNCOMMITTED = 1,
                    SQL_TRANSACTION_READ_COMMITTED = 2,
                    SQL_TRANSACTION_REPEATABLE_READ = 3,
                    SQL_TRANSACTION_SERIALIZABLE = 4
                }

                /** SqlSupportedTransactions enum. */
                enum SqlSupportedTransactions {
                    SQL_TRANSACTION_UNSPECIFIED = 0,
                    SQL_DATA_DEFINITION_TRANSACTIONS = 1,
                    SQL_DATA_MANIPULATION_TRANSACTIONS = 2
                }

                /** SqlSupportedResultSetType enum. */
                enum SqlSupportedResultSetType {
                    SQL_RESULT_SET_TYPE_UNSPECIFIED = 0,
                    SQL_RESULT_SET_TYPE_FORWARD_ONLY = 1,
                    SQL_RESULT_SET_TYPE_SCROLL_INSENSITIVE = 2,
                    SQL_RESULT_SET_TYPE_SCROLL_SENSITIVE = 3
                }

                /** SqlSupportedResultSetConcurrency enum. */
                enum SqlSupportedResultSetConcurrency {
                    SQL_RESULT_SET_CONCURRENCY_UNSPECIFIED = 0,
                    SQL_RESULT_SET_CONCURRENCY_READ_ONLY = 1,
                    SQL_RESULT_SET_CONCURRENCY_UPDATABLE = 2
                }

                /** SqlSupportsConvert enum. */
                enum SqlSupportsConvert {
                    SQL_CONVERT_BIGINT = 0,
                    SQL_CONVERT_BINARY = 1,
                    SQL_CONVERT_BIT = 2,
                    SQL_CONVERT_CHAR = 3,
                    SQL_CONVERT_DATE = 4,
                    SQL_CONVERT_DECIMAL = 5,
                    SQL_CONVERT_FLOAT = 6,
                    SQL_CONVERT_INTEGER = 7,
                    SQL_CONVERT_INTERVAL_DAY_TIME = 8,
                    SQL_CONVERT_INTERVAL_YEAR_MONTH = 9,
                    SQL_CONVERT_LONGVARBINARY = 10,
                    SQL_CONVERT_LONGVARCHAR = 11,
                    SQL_CONVERT_NUMERIC = 12,
                    SQL_CONVERT_REAL = 13,
                    SQL_CONVERT_SMALLINT = 14,
                    SQL_CONVERT_TIME = 15,
                    SQL_CONVERT_TIMESTAMP = 16,
                    SQL_CONVERT_TINYINT = 17,
                    SQL_CONVERT_VARBINARY = 18,
                    SQL_CONVERT_VARCHAR = 19
                }

                /**
                 * The JDBC/ODBC-defined type of any object.
                 * All the values here are the same as in the JDBC and ODBC specs.
                 */
                enum XdbcDataType {
                    XDBC_UNKNOWN_TYPE = 0,
                    XDBC_CHAR = 1,
                    XDBC_NUMERIC = 2,
                    XDBC_DECIMAL = 3,
                    XDBC_INTEGER = 4,
                    XDBC_SMALLINT = 5,
                    XDBC_FLOAT = 6,
                    XDBC_REAL = 7,
                    XDBC_DOUBLE = 8,
                    XDBC_DATETIME = 9,
                    XDBC_INTERVAL = 10,
                    XDBC_VARCHAR = 12,
                    XDBC_DATE = 91,
                    XDBC_TIME = 92,
                    XDBC_TIMESTAMP = 93,
                    XDBC_LONGVARCHAR = -1,
                    XDBC_BINARY = -2,
                    XDBC_VARBINARY = -3,
                    XDBC_LONGVARBINARY = -4,
                    XDBC_BIGINT = -5,
                    XDBC_TINYINT = -6,
                    XDBC_BIT = -7,
                    XDBC_WCHAR = -8,
                    XDBC_WVARCHAR = -9
                }

                /** Detailed subtype information for XDBC_TYPE_DATETIME and XDBC_TYPE_INTERVAL. */
                enum XdbcDatetimeSubcode {
                    XDBC_SUBCODE_UNKNOWN = 0,
                    XDBC_SUBCODE_YEAR = 1,
                    XDBC_SUBCODE_DATE = 1,
                    XDBC_SUBCODE_TIME = 2,
                    XDBC_SUBCODE_MONTH = 2,
                    XDBC_SUBCODE_TIMESTAMP = 3,
                    XDBC_SUBCODE_DAY = 3,
                    XDBC_SUBCODE_TIME_WITH_TIMEZONE = 4,
                    XDBC_SUBCODE_HOUR = 4,
                    XDBC_SUBCODE_TIMESTAMP_WITH_TIMEZONE = 5,
                    XDBC_SUBCODE_MINUTE = 5,
                    XDBC_SUBCODE_SECOND = 6,
                    XDBC_SUBCODE_YEAR_TO_MONTH = 7,
                    XDBC_SUBCODE_DAY_TO_HOUR = 8,
                    XDBC_SUBCODE_DAY_TO_MINUTE = 9,
                    XDBC_SUBCODE_DAY_TO_SECOND = 10,
                    XDBC_SUBCODE_HOUR_TO_MINUTE = 11,
                    XDBC_SUBCODE_HOUR_TO_SECOND = 12,
                    XDBC_SUBCODE_MINUTE_TO_SECOND = 13,
                    XDBC_SUBCODE_INTERVAL_YEAR = 101,
                    XDBC_SUBCODE_INTERVAL_MONTH = 102,
                    XDBC_SUBCODE_INTERVAL_DAY = 103,
                    XDBC_SUBCODE_INTERVAL_HOUR = 104,
                    XDBC_SUBCODE_INTERVAL_MINUTE = 105,
                    XDBC_SUBCODE_INTERVAL_SECOND = 106,
                    XDBC_SUBCODE_INTERVAL_YEAR_TO_MONTH = 107,
                    XDBC_SUBCODE_INTERVAL_DAY_TO_HOUR = 108,
                    XDBC_SUBCODE_INTERVAL_DAY_TO_MINUTE = 109,
                    XDBC_SUBCODE_INTERVAL_DAY_TO_SECOND = 110,
                    XDBC_SUBCODE_INTERVAL_HOUR_TO_MINUTE = 111,
                    XDBC_SUBCODE_INTERVAL_HOUR_TO_SECOND = 112,
                    XDBC_SUBCODE_INTERVAL_MINUTE_TO_SECOND = 113
                }

                /** Nullable enum. */
                enum Nullable {
                    NULLABILITY_NO_NULLS = 0,
                    NULLABILITY_NULLABLE = 1,
                    NULLABILITY_UNKNOWN = 2
                }

                /** Searchable enum. */
                enum Searchable {
                    SEARCHABLE_NONE = 0,
                    SEARCHABLE_CHAR = 1,
                    SEARCHABLE_BASIC = 2,
                    SEARCHABLE_FULL = 3
                }

                /** Properties of a CommandGetXdbcTypeInfo. */
                interface ICommandGetXdbcTypeInfo {

                    /** CommandGetXdbcTypeInfo dataType */
                    dataType?: (number|null);
                }

                /** Represents a CommandGetXdbcTypeInfo. */
                class CommandGetXdbcTypeInfo implements ICommandGetXdbcTypeInfo {

                    /**
                     * Constructs a new CommandGetXdbcTypeInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandGetXdbcTypeInfo);

                    /** CommandGetXdbcTypeInfo dataType. */
                    public dataType?: (number|null);

                    /** CommandGetXdbcTypeInfo _dataType. */
                    public _dataType?: "dataType";

                    /**
                     * Creates a new CommandGetXdbcTypeInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetXdbcTypeInfo instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandGetXdbcTypeInfo): arrow.flight.protocol.sql.CommandGetXdbcTypeInfo;

                    /**
                     * Encodes the specified CommandGetXdbcTypeInfo message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.verify|verify} messages.
                     * @param message CommandGetXdbcTypeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandGetXdbcTypeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetXdbcTypeInfo message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetXdbcTypeInfo.verify|verify} messages.
                     * @param message CommandGetXdbcTypeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandGetXdbcTypeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetXdbcTypeInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandGetXdbcTypeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetXdbcTypeInfo;

                    /**
                     * Decodes a CommandGetXdbcTypeInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandGetXdbcTypeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetXdbcTypeInfo;

                    /**
                     * Verifies a CommandGetXdbcTypeInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetXdbcTypeInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetXdbcTypeInfo
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetXdbcTypeInfo;

                    /**
                     * Creates a plain object from a CommandGetXdbcTypeInfo message. Also converts values to other types if specified.
                     * @param message CommandGetXdbcTypeInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandGetXdbcTypeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetXdbcTypeInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandGetXdbcTypeInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandGetCatalogs. */
                interface ICommandGetCatalogs {
                }

                /** Represents a CommandGetCatalogs. */
                class CommandGetCatalogs implements ICommandGetCatalogs {

                    /**
                     * Constructs a new CommandGetCatalogs.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandGetCatalogs);

                    /**
                     * Creates a new CommandGetCatalogs instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetCatalogs instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandGetCatalogs): arrow.flight.protocol.sql.CommandGetCatalogs;

                    /**
                     * Encodes the specified CommandGetCatalogs message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCatalogs.verify|verify} messages.
                     * @param message CommandGetCatalogs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandGetCatalogs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetCatalogs message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCatalogs.verify|verify} messages.
                     * @param message CommandGetCatalogs message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandGetCatalogs, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetCatalogs message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandGetCatalogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetCatalogs;

                    /**
                     * Decodes a CommandGetCatalogs message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandGetCatalogs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetCatalogs;

                    /**
                     * Verifies a CommandGetCatalogs message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetCatalogs message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetCatalogs
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetCatalogs;

                    /**
                     * Creates a plain object from a CommandGetCatalogs message. Also converts values to other types if specified.
                     * @param message CommandGetCatalogs
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandGetCatalogs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetCatalogs to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandGetCatalogs
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandGetDbSchemas. */
                interface ICommandGetDbSchemas {

                    /** CommandGetDbSchemas catalog */
                    catalog?: (string|null);

                    /** CommandGetDbSchemas dbSchemaFilterPattern */
                    dbSchemaFilterPattern?: (string|null);
                }

                /** Represents a CommandGetDbSchemas. */
                class CommandGetDbSchemas implements ICommandGetDbSchemas {

                    /**
                     * Constructs a new CommandGetDbSchemas.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandGetDbSchemas);

                    /** CommandGetDbSchemas catalog. */
                    public catalog?: (string|null);

                    /** CommandGetDbSchemas dbSchemaFilterPattern. */
                    public dbSchemaFilterPattern?: (string|null);

                    /** CommandGetDbSchemas _catalog. */
                    public _catalog?: "catalog";

                    /** CommandGetDbSchemas _dbSchemaFilterPattern. */
                    public _dbSchemaFilterPattern?: "dbSchemaFilterPattern";

                    /**
                     * Creates a new CommandGetDbSchemas instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetDbSchemas instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandGetDbSchemas): arrow.flight.protocol.sql.CommandGetDbSchemas;

                    /**
                     * Encodes the specified CommandGetDbSchemas message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetDbSchemas.verify|verify} messages.
                     * @param message CommandGetDbSchemas message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandGetDbSchemas, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetDbSchemas message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetDbSchemas.verify|verify} messages.
                     * @param message CommandGetDbSchemas message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandGetDbSchemas, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetDbSchemas message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandGetDbSchemas
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetDbSchemas;

                    /**
                     * Decodes a CommandGetDbSchemas message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandGetDbSchemas
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetDbSchemas;

                    /**
                     * Verifies a CommandGetDbSchemas message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetDbSchemas message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetDbSchemas
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetDbSchemas;

                    /**
                     * Creates a plain object from a CommandGetDbSchemas message. Also converts values to other types if specified.
                     * @param message CommandGetDbSchemas
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandGetDbSchemas, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetDbSchemas to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandGetDbSchemas
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandGetTables. */
                interface ICommandGetTables {

                    /** CommandGetTables catalog */
                    catalog?: (string|null);

                    /** CommandGetTables dbSchemaFilterPattern */
                    dbSchemaFilterPattern?: (string|null);

                    /** CommandGetTables tableNameFilterPattern */
                    tableNameFilterPattern?: (string|null);

                    /** CommandGetTables tableTypes */
                    tableTypes?: (string[]|null);

                    /** CommandGetTables includeSchema */
                    includeSchema?: (boolean|null);
                }

                /** Represents a CommandGetTables. */
                class CommandGetTables implements ICommandGetTables {

                    /**
                     * Constructs a new CommandGetTables.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandGetTables);

                    /** CommandGetTables catalog. */
                    public catalog?: (string|null);

                    /** CommandGetTables dbSchemaFilterPattern. */
                    public dbSchemaFilterPattern?: (string|null);

                    /** CommandGetTables tableNameFilterPattern. */
                    public tableNameFilterPattern?: (string|null);

                    /** CommandGetTables tableTypes. */
                    public tableTypes: string[];

                    /** CommandGetTables includeSchema. */
                    public includeSchema: boolean;

                    /** CommandGetTables _catalog. */
                    public _catalog?: "catalog";

                    /** CommandGetTables _dbSchemaFilterPattern. */
                    public _dbSchemaFilterPattern?: "dbSchemaFilterPattern";

                    /** CommandGetTables _tableNameFilterPattern. */
                    public _tableNameFilterPattern?: "tableNameFilterPattern";

                    /**
                     * Creates a new CommandGetTables instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetTables instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandGetTables): arrow.flight.protocol.sql.CommandGetTables;

                    /**
                     * Encodes the specified CommandGetTables message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTables.verify|verify} messages.
                     * @param message CommandGetTables message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandGetTables, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetTables message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTables.verify|verify} messages.
                     * @param message CommandGetTables message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandGetTables, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetTables message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandGetTables
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetTables;

                    /**
                     * Decodes a CommandGetTables message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandGetTables
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetTables;

                    /**
                     * Verifies a CommandGetTables message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetTables message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetTables
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetTables;

                    /**
                     * Creates a plain object from a CommandGetTables message. Also converts values to other types if specified.
                     * @param message CommandGetTables
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandGetTables, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetTables to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandGetTables
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandGetTableTypes. */
                interface ICommandGetTableTypes {
                }

                /** Represents a CommandGetTableTypes. */
                class CommandGetTableTypes implements ICommandGetTableTypes {

                    /**
                     * Constructs a new CommandGetTableTypes.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandGetTableTypes);

                    /**
                     * Creates a new CommandGetTableTypes instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetTableTypes instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandGetTableTypes): arrow.flight.protocol.sql.CommandGetTableTypes;

                    /**
                     * Encodes the specified CommandGetTableTypes message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTableTypes.verify|verify} messages.
                     * @param message CommandGetTableTypes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandGetTableTypes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetTableTypes message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetTableTypes.verify|verify} messages.
                     * @param message CommandGetTableTypes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandGetTableTypes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetTableTypes message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandGetTableTypes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetTableTypes;

                    /**
                     * Decodes a CommandGetTableTypes message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandGetTableTypes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetTableTypes;

                    /**
                     * Verifies a CommandGetTableTypes message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetTableTypes message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetTableTypes
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetTableTypes;

                    /**
                     * Creates a plain object from a CommandGetTableTypes message. Also converts values to other types if specified.
                     * @param message CommandGetTableTypes
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandGetTableTypes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetTableTypes to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandGetTableTypes
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandGetPrimaryKeys. */
                interface ICommandGetPrimaryKeys {

                    /** CommandGetPrimaryKeys catalog */
                    catalog?: (string|null);

                    /** CommandGetPrimaryKeys dbSchema */
                    dbSchema?: (string|null);

                    /** CommandGetPrimaryKeys table */
                    table?: (string|null);
                }

                /** Represents a CommandGetPrimaryKeys. */
                class CommandGetPrimaryKeys implements ICommandGetPrimaryKeys {

                    /**
                     * Constructs a new CommandGetPrimaryKeys.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandGetPrimaryKeys);

                    /** CommandGetPrimaryKeys catalog. */
                    public catalog?: (string|null);

                    /** CommandGetPrimaryKeys dbSchema. */
                    public dbSchema?: (string|null);

                    /** CommandGetPrimaryKeys table. */
                    public table: string;

                    /** CommandGetPrimaryKeys _catalog. */
                    public _catalog?: "catalog";

                    /** CommandGetPrimaryKeys _dbSchema. */
                    public _dbSchema?: "dbSchema";

                    /**
                     * Creates a new CommandGetPrimaryKeys instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetPrimaryKeys instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandGetPrimaryKeys): arrow.flight.protocol.sql.CommandGetPrimaryKeys;

                    /**
                     * Encodes the specified CommandGetPrimaryKeys message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetPrimaryKeys.verify|verify} messages.
                     * @param message CommandGetPrimaryKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandGetPrimaryKeys, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetPrimaryKeys message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetPrimaryKeys.verify|verify} messages.
                     * @param message CommandGetPrimaryKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandGetPrimaryKeys, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetPrimaryKeys message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandGetPrimaryKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetPrimaryKeys;

                    /**
                     * Decodes a CommandGetPrimaryKeys message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandGetPrimaryKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetPrimaryKeys;

                    /**
                     * Verifies a CommandGetPrimaryKeys message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetPrimaryKeys message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetPrimaryKeys
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetPrimaryKeys;

                    /**
                     * Creates a plain object from a CommandGetPrimaryKeys message. Also converts values to other types if specified.
                     * @param message CommandGetPrimaryKeys
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandGetPrimaryKeys, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetPrimaryKeys to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandGetPrimaryKeys
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** UpdateDeleteRules enum. */
                enum UpdateDeleteRules {
                    CASCADE = 0,
                    RESTRICT = 1,
                    SET_NULL = 2,
                    NO_ACTION = 3,
                    SET_DEFAULT = 4
                }

                /** Properties of a CommandGetExportedKeys. */
                interface ICommandGetExportedKeys {

                    /** CommandGetExportedKeys catalog */
                    catalog?: (string|null);

                    /** CommandGetExportedKeys dbSchema */
                    dbSchema?: (string|null);

                    /** CommandGetExportedKeys table */
                    table?: (string|null);
                }

                /** Represents a CommandGetExportedKeys. */
                class CommandGetExportedKeys implements ICommandGetExportedKeys {

                    /**
                     * Constructs a new CommandGetExportedKeys.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandGetExportedKeys);

                    /** CommandGetExportedKeys catalog. */
                    public catalog?: (string|null);

                    /** CommandGetExportedKeys dbSchema. */
                    public dbSchema?: (string|null);

                    /** CommandGetExportedKeys table. */
                    public table: string;

                    /** CommandGetExportedKeys _catalog. */
                    public _catalog?: "catalog";

                    /** CommandGetExportedKeys _dbSchema. */
                    public _dbSchema?: "dbSchema";

                    /**
                     * Creates a new CommandGetExportedKeys instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetExportedKeys instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandGetExportedKeys): arrow.flight.protocol.sql.CommandGetExportedKeys;

                    /**
                     * Encodes the specified CommandGetExportedKeys message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetExportedKeys.verify|verify} messages.
                     * @param message CommandGetExportedKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandGetExportedKeys, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetExportedKeys message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetExportedKeys.verify|verify} messages.
                     * @param message CommandGetExportedKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandGetExportedKeys, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetExportedKeys message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandGetExportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetExportedKeys;

                    /**
                     * Decodes a CommandGetExportedKeys message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandGetExportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetExportedKeys;

                    /**
                     * Verifies a CommandGetExportedKeys message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetExportedKeys message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetExportedKeys
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetExportedKeys;

                    /**
                     * Creates a plain object from a CommandGetExportedKeys message. Also converts values to other types if specified.
                     * @param message CommandGetExportedKeys
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandGetExportedKeys, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetExportedKeys to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandGetExportedKeys
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandGetImportedKeys. */
                interface ICommandGetImportedKeys {

                    /** CommandGetImportedKeys catalog */
                    catalog?: (string|null);

                    /** CommandGetImportedKeys dbSchema */
                    dbSchema?: (string|null);

                    /** CommandGetImportedKeys table */
                    table?: (string|null);
                }

                /** Represents a CommandGetImportedKeys. */
                class CommandGetImportedKeys implements ICommandGetImportedKeys {

                    /**
                     * Constructs a new CommandGetImportedKeys.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandGetImportedKeys);

                    /** CommandGetImportedKeys catalog. */
                    public catalog?: (string|null);

                    /** CommandGetImportedKeys dbSchema. */
                    public dbSchema?: (string|null);

                    /** CommandGetImportedKeys table. */
                    public table: string;

                    /** CommandGetImportedKeys _catalog. */
                    public _catalog?: "catalog";

                    /** CommandGetImportedKeys _dbSchema. */
                    public _dbSchema?: "dbSchema";

                    /**
                     * Creates a new CommandGetImportedKeys instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetImportedKeys instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandGetImportedKeys): arrow.flight.protocol.sql.CommandGetImportedKeys;

                    /**
                     * Encodes the specified CommandGetImportedKeys message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetImportedKeys.verify|verify} messages.
                     * @param message CommandGetImportedKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandGetImportedKeys, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetImportedKeys message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetImportedKeys.verify|verify} messages.
                     * @param message CommandGetImportedKeys message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandGetImportedKeys, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetImportedKeys message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandGetImportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetImportedKeys;

                    /**
                     * Decodes a CommandGetImportedKeys message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandGetImportedKeys
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetImportedKeys;

                    /**
                     * Verifies a CommandGetImportedKeys message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetImportedKeys message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetImportedKeys
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetImportedKeys;

                    /**
                     * Creates a plain object from a CommandGetImportedKeys message. Also converts values to other types if specified.
                     * @param message CommandGetImportedKeys
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandGetImportedKeys, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetImportedKeys to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandGetImportedKeys
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandGetCrossReference. */
                interface ICommandGetCrossReference {

                    /**
                     * The catalog name where the parent table is.
                     * An empty string retrieves those without a catalog.
                     * If omitted the catalog name should not be used to narrow the search.
                     */
                    pkCatalog?: (string|null);

                    /**
                     * The Schema name where the parent table is.
                     * An empty string retrieves those without a schema.
                     * If omitted the schema name should not be used to narrow the search.
                     */
                    pkDbSchema?: (string|null);

                    /** The parent table name. It cannot be null. */
                    pkTable?: (string|null);

                    /**
                     * The catalog name where the foreign table is.
                     * An empty string retrieves those without a catalog.
                     * If omitted the catalog name should not be used to narrow the search.
                     */
                    fkCatalog?: (string|null);

                    /**
                     * The schema name where the foreign table is.
                     * An empty string retrieves those without a schema.
                     * If omitted the schema name should not be used to narrow the search.
                     */
                    fkDbSchema?: (string|null);

                    /** The foreign table name. It cannot be null. */
                    fkTable?: (string|null);
                }

                /** Represents a CommandGetCrossReference. */
                class CommandGetCrossReference implements ICommandGetCrossReference {

                    /**
                     * Constructs a new CommandGetCrossReference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandGetCrossReference);

                    /**
                     * The catalog name where the parent table is.
                     * An empty string retrieves those without a catalog.
                     * If omitted the catalog name should not be used to narrow the search.
                     */
                    public pkCatalog?: (string|null);

                    /**
                     * The Schema name where the parent table is.
                     * An empty string retrieves those without a schema.
                     * If omitted the schema name should not be used to narrow the search.
                     */
                    public pkDbSchema?: (string|null);

                    /** The parent table name. It cannot be null. */
                    public pkTable: string;

                    /**
                     * The catalog name where the foreign table is.
                     * An empty string retrieves those without a catalog.
                     * If omitted the catalog name should not be used to narrow the search.
                     */
                    public fkCatalog?: (string|null);

                    /**
                     * The schema name where the foreign table is.
                     * An empty string retrieves those without a schema.
                     * If omitted the schema name should not be used to narrow the search.
                     */
                    public fkDbSchema?: (string|null);

                    /** The foreign table name. It cannot be null. */
                    public fkTable: string;

                    /** CommandGetCrossReference _pkCatalog. */
                    public _pkCatalog?: "pkCatalog";

                    /** CommandGetCrossReference _pkDbSchema. */
                    public _pkDbSchema?: "pkDbSchema";

                    /** CommandGetCrossReference _fkCatalog. */
                    public _fkCatalog?: "fkCatalog";

                    /** CommandGetCrossReference _fkDbSchema. */
                    public _fkDbSchema?: "fkDbSchema";

                    /**
                     * Creates a new CommandGetCrossReference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandGetCrossReference instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandGetCrossReference): arrow.flight.protocol.sql.CommandGetCrossReference;

                    /**
                     * Encodes the specified CommandGetCrossReference message. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCrossReference.verify|verify} messages.
                     * @param message CommandGetCrossReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandGetCrossReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandGetCrossReference message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandGetCrossReference.verify|verify} messages.
                     * @param message CommandGetCrossReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandGetCrossReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandGetCrossReference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandGetCrossReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandGetCrossReference;

                    /**
                     * Decodes a CommandGetCrossReference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandGetCrossReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandGetCrossReference;

                    /**
                     * Verifies a CommandGetCrossReference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandGetCrossReference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandGetCrossReference
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandGetCrossReference;

                    /**
                     * Creates a plain object from a CommandGetCrossReference message. Also converts values to other types if specified.
                     * @param message CommandGetCrossReference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandGetCrossReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandGetCrossReference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandGetCrossReference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionCreatePreparedStatementRequest. */
                interface IActionCreatePreparedStatementRequest {

                    /** ActionCreatePreparedStatementRequest query */
                    query?: (string|null);

                    /** ActionCreatePreparedStatementRequest transactionId */
                    transactionId?: (Uint8Array|null);
                }

                /** Represents an ActionCreatePreparedStatementRequest. */
                class ActionCreatePreparedStatementRequest implements IActionCreatePreparedStatementRequest {

                    /**
                     * Constructs a new ActionCreatePreparedStatementRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionCreatePreparedStatementRequest);

                    /** ActionCreatePreparedStatementRequest query. */
                    public query: string;

                    /** ActionCreatePreparedStatementRequest transactionId. */
                    public transactionId?: (Uint8Array|null);

                    /** ActionCreatePreparedStatementRequest _transactionId. */
                    public _transactionId?: "transactionId";

                    /**
                     * Creates a new ActionCreatePreparedStatementRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionCreatePreparedStatementRequest instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionCreatePreparedStatementRequest): arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest;

                    /**
                     * Encodes the specified ActionCreatePreparedStatementRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.verify|verify} messages.
                     * @param message ActionCreatePreparedStatementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionCreatePreparedStatementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionCreatePreparedStatementRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest.verify|verify} messages.
                     * @param message ActionCreatePreparedStatementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionCreatePreparedStatementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionCreatePreparedStatementRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionCreatePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest;

                    /**
                     * Decodes an ActionCreatePreparedStatementRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionCreatePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest;

                    /**
                     * Verifies an ActionCreatePreparedStatementRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionCreatePreparedStatementRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionCreatePreparedStatementRequest
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest;

                    /**
                     * Creates a plain object from an ActionCreatePreparedStatementRequest message. Also converts values to other types if specified.
                     * @param message ActionCreatePreparedStatementRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionCreatePreparedStatementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionCreatePreparedStatementRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionCreatePreparedStatementRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SubstraitPlan. */
                interface ISubstraitPlan {

                    /** SubstraitPlan plan */
                    plan?: (Uint8Array|null);

                    /** SubstraitPlan version */
                    version?: (string|null);
                }

                /** Represents a SubstraitPlan. */
                class SubstraitPlan implements ISubstraitPlan {

                    /**
                     * Constructs a new SubstraitPlan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ISubstraitPlan);

                    /** SubstraitPlan plan. */
                    public plan: Uint8Array;

                    /** SubstraitPlan version. */
                    public version: string;

                    /**
                     * Creates a new SubstraitPlan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubstraitPlan instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ISubstraitPlan): arrow.flight.protocol.sql.SubstraitPlan;

                    /**
                     * Encodes the specified SubstraitPlan message. Does not implicitly {@link arrow.flight.protocol.sql.SubstraitPlan.verify|verify} messages.
                     * @param message SubstraitPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ISubstraitPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubstraitPlan message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.SubstraitPlan.verify|verify} messages.
                     * @param message SubstraitPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ISubstraitPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubstraitPlan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.SubstraitPlan;

                    /**
                     * Decodes a SubstraitPlan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.SubstraitPlan;

                    /**
                     * Verifies a SubstraitPlan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubstraitPlan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubstraitPlan
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.SubstraitPlan;

                    /**
                     * Creates a plain object from a SubstraitPlan message. Also converts values to other types if specified.
                     * @param message SubstraitPlan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.SubstraitPlan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubstraitPlan to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SubstraitPlan
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionCreatePreparedSubstraitPlanRequest. */
                interface IActionCreatePreparedSubstraitPlanRequest {

                    /** ActionCreatePreparedSubstraitPlanRequest plan */
                    plan?: (arrow.flight.protocol.sql.ISubstraitPlan|null);

                    /** ActionCreatePreparedSubstraitPlanRequest transactionId */
                    transactionId?: (Uint8Array|null);
                }

                /** Represents an ActionCreatePreparedSubstraitPlanRequest. */
                class ActionCreatePreparedSubstraitPlanRequest implements IActionCreatePreparedSubstraitPlanRequest {

                    /**
                     * Constructs a new ActionCreatePreparedSubstraitPlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionCreatePreparedSubstraitPlanRequest);

                    /** ActionCreatePreparedSubstraitPlanRequest plan. */
                    public plan?: (arrow.flight.protocol.sql.ISubstraitPlan|null);

                    /** ActionCreatePreparedSubstraitPlanRequest transactionId. */
                    public transactionId?: (Uint8Array|null);

                    /** ActionCreatePreparedSubstraitPlanRequest _transactionId. */
                    public _transactionId?: "transactionId";

                    /**
                     * Creates a new ActionCreatePreparedSubstraitPlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionCreatePreparedSubstraitPlanRequest instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionCreatePreparedSubstraitPlanRequest): arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest;

                    /**
                     * Encodes the specified ActionCreatePreparedSubstraitPlanRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.verify|verify} messages.
                     * @param message ActionCreatePreparedSubstraitPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionCreatePreparedSubstraitPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionCreatePreparedSubstraitPlanRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest.verify|verify} messages.
                     * @param message ActionCreatePreparedSubstraitPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionCreatePreparedSubstraitPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionCreatePreparedSubstraitPlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionCreatePreparedSubstraitPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest;

                    /**
                     * Decodes an ActionCreatePreparedSubstraitPlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionCreatePreparedSubstraitPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest;

                    /**
                     * Verifies an ActionCreatePreparedSubstraitPlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionCreatePreparedSubstraitPlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionCreatePreparedSubstraitPlanRequest
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest;

                    /**
                     * Creates a plain object from an ActionCreatePreparedSubstraitPlanRequest message. Also converts values to other types if specified.
                     * @param message ActionCreatePreparedSubstraitPlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionCreatePreparedSubstraitPlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionCreatePreparedSubstraitPlanRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionCreatePreparedSubstraitPlanRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionCreatePreparedStatementResult. */
                interface IActionCreatePreparedStatementResult {

                    /** ActionCreatePreparedStatementResult preparedStatementHandle */
                    preparedStatementHandle?: (Uint8Array|null);

                    /** ActionCreatePreparedStatementResult datasetSchema */
                    datasetSchema?: (Uint8Array|null);

                    /** ActionCreatePreparedStatementResult parameterSchema */
                    parameterSchema?: (Uint8Array|null);
                }

                /** Represents an ActionCreatePreparedStatementResult. */
                class ActionCreatePreparedStatementResult implements IActionCreatePreparedStatementResult {

                    /**
                     * Constructs a new ActionCreatePreparedStatementResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionCreatePreparedStatementResult);

                    /** ActionCreatePreparedStatementResult preparedStatementHandle. */
                    public preparedStatementHandle: Uint8Array;

                    /** ActionCreatePreparedStatementResult datasetSchema. */
                    public datasetSchema: Uint8Array;

                    /** ActionCreatePreparedStatementResult parameterSchema. */
                    public parameterSchema: Uint8Array;

                    /**
                     * Creates a new ActionCreatePreparedStatementResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionCreatePreparedStatementResult instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionCreatePreparedStatementResult): arrow.flight.protocol.sql.ActionCreatePreparedStatementResult;

                    /**
                     * Encodes the specified ActionCreatePreparedStatementResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.verify|verify} messages.
                     * @param message ActionCreatePreparedStatementResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionCreatePreparedStatementResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionCreatePreparedStatementResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCreatePreparedStatementResult.verify|verify} messages.
                     * @param message ActionCreatePreparedStatementResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionCreatePreparedStatementResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionCreatePreparedStatementResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionCreatePreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionCreatePreparedStatementResult;

                    /**
                     * Decodes an ActionCreatePreparedStatementResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionCreatePreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionCreatePreparedStatementResult;

                    /**
                     * Verifies an ActionCreatePreparedStatementResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionCreatePreparedStatementResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionCreatePreparedStatementResult
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionCreatePreparedStatementResult;

                    /**
                     * Creates a plain object from an ActionCreatePreparedStatementResult message. Also converts values to other types if specified.
                     * @param message ActionCreatePreparedStatementResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionCreatePreparedStatementResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionCreatePreparedStatementResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionCreatePreparedStatementResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionClosePreparedStatementRequest. */
                interface IActionClosePreparedStatementRequest {

                    /** ActionClosePreparedStatementRequest preparedStatementHandle */
                    preparedStatementHandle?: (Uint8Array|null);
                }

                /** Represents an ActionClosePreparedStatementRequest. */
                class ActionClosePreparedStatementRequest implements IActionClosePreparedStatementRequest {

                    /**
                     * Constructs a new ActionClosePreparedStatementRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionClosePreparedStatementRequest);

                    /** ActionClosePreparedStatementRequest preparedStatementHandle. */
                    public preparedStatementHandle: Uint8Array;

                    /**
                     * Creates a new ActionClosePreparedStatementRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionClosePreparedStatementRequest instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionClosePreparedStatementRequest): arrow.flight.protocol.sql.ActionClosePreparedStatementRequest;

                    /**
                     * Encodes the specified ActionClosePreparedStatementRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.verify|verify} messages.
                     * @param message ActionClosePreparedStatementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionClosePreparedStatementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionClosePreparedStatementRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionClosePreparedStatementRequest.verify|verify} messages.
                     * @param message ActionClosePreparedStatementRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionClosePreparedStatementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionClosePreparedStatementRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionClosePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionClosePreparedStatementRequest;

                    /**
                     * Decodes an ActionClosePreparedStatementRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionClosePreparedStatementRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionClosePreparedStatementRequest;

                    /**
                     * Verifies an ActionClosePreparedStatementRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionClosePreparedStatementRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionClosePreparedStatementRequest
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionClosePreparedStatementRequest;

                    /**
                     * Creates a plain object from an ActionClosePreparedStatementRequest message. Also converts values to other types if specified.
                     * @param message ActionClosePreparedStatementRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionClosePreparedStatementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionClosePreparedStatementRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionClosePreparedStatementRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionBeginTransactionRequest. */
                interface IActionBeginTransactionRequest {
                }

                /** Represents an ActionBeginTransactionRequest. */
                class ActionBeginTransactionRequest implements IActionBeginTransactionRequest {

                    /**
                     * Constructs a new ActionBeginTransactionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionBeginTransactionRequest);

                    /**
                     * Creates a new ActionBeginTransactionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionBeginTransactionRequest instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionBeginTransactionRequest): arrow.flight.protocol.sql.ActionBeginTransactionRequest;

                    /**
                     * Encodes the specified ActionBeginTransactionRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionRequest.verify|verify} messages.
                     * @param message ActionBeginTransactionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionBeginTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionBeginTransactionRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionRequest.verify|verify} messages.
                     * @param message ActionBeginTransactionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionBeginTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionBeginTransactionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionBeginTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionBeginTransactionRequest;

                    /**
                     * Decodes an ActionBeginTransactionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionBeginTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionBeginTransactionRequest;

                    /**
                     * Verifies an ActionBeginTransactionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionBeginTransactionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionBeginTransactionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionBeginTransactionRequest;

                    /**
                     * Creates a plain object from an ActionBeginTransactionRequest message. Also converts values to other types if specified.
                     * @param message ActionBeginTransactionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionBeginTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionBeginTransactionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionBeginTransactionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionBeginSavepointRequest. */
                interface IActionBeginSavepointRequest {

                    /** ActionBeginSavepointRequest transactionId */
                    transactionId?: (Uint8Array|null);

                    /** ActionBeginSavepointRequest name */
                    name?: (string|null);
                }

                /** Represents an ActionBeginSavepointRequest. */
                class ActionBeginSavepointRequest implements IActionBeginSavepointRequest {

                    /**
                     * Constructs a new ActionBeginSavepointRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionBeginSavepointRequest);

                    /** ActionBeginSavepointRequest transactionId. */
                    public transactionId: Uint8Array;

                    /** ActionBeginSavepointRequest name. */
                    public name: string;

                    /**
                     * Creates a new ActionBeginSavepointRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionBeginSavepointRequest instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionBeginSavepointRequest): arrow.flight.protocol.sql.ActionBeginSavepointRequest;

                    /**
                     * Encodes the specified ActionBeginSavepointRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointRequest.verify|verify} messages.
                     * @param message ActionBeginSavepointRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionBeginSavepointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionBeginSavepointRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointRequest.verify|verify} messages.
                     * @param message ActionBeginSavepointRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionBeginSavepointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionBeginSavepointRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionBeginSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionBeginSavepointRequest;

                    /**
                     * Decodes an ActionBeginSavepointRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionBeginSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionBeginSavepointRequest;

                    /**
                     * Verifies an ActionBeginSavepointRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionBeginSavepointRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionBeginSavepointRequest
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionBeginSavepointRequest;

                    /**
                     * Creates a plain object from an ActionBeginSavepointRequest message. Also converts values to other types if specified.
                     * @param message ActionBeginSavepointRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionBeginSavepointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionBeginSavepointRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionBeginSavepointRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionBeginTransactionResult. */
                interface IActionBeginTransactionResult {

                    /** ActionBeginTransactionResult transactionId */
                    transactionId?: (Uint8Array|null);
                }

                /** Represents an ActionBeginTransactionResult. */
                class ActionBeginTransactionResult implements IActionBeginTransactionResult {

                    /**
                     * Constructs a new ActionBeginTransactionResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionBeginTransactionResult);

                    /** ActionBeginTransactionResult transactionId. */
                    public transactionId: Uint8Array;

                    /**
                     * Creates a new ActionBeginTransactionResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionBeginTransactionResult instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionBeginTransactionResult): arrow.flight.protocol.sql.ActionBeginTransactionResult;

                    /**
                     * Encodes the specified ActionBeginTransactionResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionResult.verify|verify} messages.
                     * @param message ActionBeginTransactionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionBeginTransactionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionBeginTransactionResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginTransactionResult.verify|verify} messages.
                     * @param message ActionBeginTransactionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionBeginTransactionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionBeginTransactionResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionBeginTransactionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionBeginTransactionResult;

                    /**
                     * Decodes an ActionBeginTransactionResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionBeginTransactionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionBeginTransactionResult;

                    /**
                     * Verifies an ActionBeginTransactionResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionBeginTransactionResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionBeginTransactionResult
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionBeginTransactionResult;

                    /**
                     * Creates a plain object from an ActionBeginTransactionResult message. Also converts values to other types if specified.
                     * @param message ActionBeginTransactionResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionBeginTransactionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionBeginTransactionResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionBeginTransactionResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionBeginSavepointResult. */
                interface IActionBeginSavepointResult {

                    /** ActionBeginSavepointResult savepointId */
                    savepointId?: (Uint8Array|null);
                }

                /** Represents an ActionBeginSavepointResult. */
                class ActionBeginSavepointResult implements IActionBeginSavepointResult {

                    /**
                     * Constructs a new ActionBeginSavepointResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionBeginSavepointResult);

                    /** ActionBeginSavepointResult savepointId. */
                    public savepointId: Uint8Array;

                    /**
                     * Creates a new ActionBeginSavepointResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionBeginSavepointResult instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionBeginSavepointResult): arrow.flight.protocol.sql.ActionBeginSavepointResult;

                    /**
                     * Encodes the specified ActionBeginSavepointResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointResult.verify|verify} messages.
                     * @param message ActionBeginSavepointResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionBeginSavepointResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionBeginSavepointResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionBeginSavepointResult.verify|verify} messages.
                     * @param message ActionBeginSavepointResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionBeginSavepointResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionBeginSavepointResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionBeginSavepointResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionBeginSavepointResult;

                    /**
                     * Decodes an ActionBeginSavepointResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionBeginSavepointResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionBeginSavepointResult;

                    /**
                     * Verifies an ActionBeginSavepointResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionBeginSavepointResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionBeginSavepointResult
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionBeginSavepointResult;

                    /**
                     * Creates a plain object from an ActionBeginSavepointResult message. Also converts values to other types if specified.
                     * @param message ActionBeginSavepointResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionBeginSavepointResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionBeginSavepointResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionBeginSavepointResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionEndTransactionRequest. */
                interface IActionEndTransactionRequest {

                    /** ActionEndTransactionRequest transactionId */
                    transactionId?: (Uint8Array|null);

                    /** ActionEndTransactionRequest action */
                    action?: (arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction|null);
                }

                /** Represents an ActionEndTransactionRequest. */
                class ActionEndTransactionRequest implements IActionEndTransactionRequest {

                    /**
                     * Constructs a new ActionEndTransactionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionEndTransactionRequest);

                    /** ActionEndTransactionRequest transactionId. */
                    public transactionId: Uint8Array;

                    /** ActionEndTransactionRequest action. */
                    public action: arrow.flight.protocol.sql.ActionEndTransactionRequest.EndTransaction;

                    /**
                     * Creates a new ActionEndTransactionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionEndTransactionRequest instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionEndTransactionRequest): arrow.flight.protocol.sql.ActionEndTransactionRequest;

                    /**
                     * Encodes the specified ActionEndTransactionRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndTransactionRequest.verify|verify} messages.
                     * @param message ActionEndTransactionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionEndTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionEndTransactionRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndTransactionRequest.verify|verify} messages.
                     * @param message ActionEndTransactionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionEndTransactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionEndTransactionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionEndTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionEndTransactionRequest;

                    /**
                     * Decodes an ActionEndTransactionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionEndTransactionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionEndTransactionRequest;

                    /**
                     * Verifies an ActionEndTransactionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionEndTransactionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionEndTransactionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionEndTransactionRequest;

                    /**
                     * Creates a plain object from an ActionEndTransactionRequest message. Also converts values to other types if specified.
                     * @param message ActionEndTransactionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionEndTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionEndTransactionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionEndTransactionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ActionEndTransactionRequest {

                    /** EndTransaction enum. */
                    enum EndTransaction {
                        END_TRANSACTION_UNSPECIFIED = 0,
                        END_TRANSACTION_COMMIT = 1,
                        END_TRANSACTION_ROLLBACK = 2
                    }
                }

                /** Properties of an ActionEndSavepointRequest. */
                interface IActionEndSavepointRequest {

                    /** ActionEndSavepointRequest savepointId */
                    savepointId?: (Uint8Array|null);

                    /** ActionEndSavepointRequest action */
                    action?: (arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint|null);
                }

                /** Represents an ActionEndSavepointRequest. */
                class ActionEndSavepointRequest implements IActionEndSavepointRequest {

                    /**
                     * Constructs a new ActionEndSavepointRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionEndSavepointRequest);

                    /** ActionEndSavepointRequest savepointId. */
                    public savepointId: Uint8Array;

                    /** ActionEndSavepointRequest action. */
                    public action: arrow.flight.protocol.sql.ActionEndSavepointRequest.EndSavepoint;

                    /**
                     * Creates a new ActionEndSavepointRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionEndSavepointRequest instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionEndSavepointRequest): arrow.flight.protocol.sql.ActionEndSavepointRequest;

                    /**
                     * Encodes the specified ActionEndSavepointRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndSavepointRequest.verify|verify} messages.
                     * @param message ActionEndSavepointRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionEndSavepointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionEndSavepointRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionEndSavepointRequest.verify|verify} messages.
                     * @param message ActionEndSavepointRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionEndSavepointRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionEndSavepointRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionEndSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionEndSavepointRequest;

                    /**
                     * Decodes an ActionEndSavepointRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionEndSavepointRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionEndSavepointRequest;

                    /**
                     * Verifies an ActionEndSavepointRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionEndSavepointRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionEndSavepointRequest
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionEndSavepointRequest;

                    /**
                     * Creates a plain object from an ActionEndSavepointRequest message. Also converts values to other types if specified.
                     * @param message ActionEndSavepointRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionEndSavepointRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionEndSavepointRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionEndSavepointRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ActionEndSavepointRequest {

                    /** EndSavepoint enum. */
                    enum EndSavepoint {
                        END_SAVEPOINT_UNSPECIFIED = 0,
                        END_SAVEPOINT_RELEASE = 1,
                        END_SAVEPOINT_ROLLBACK = 2
                    }
                }

                /** Properties of a CommandStatementQuery. */
                interface ICommandStatementQuery {

                    /** CommandStatementQuery query */
                    query?: (string|null);

                    /** CommandStatementQuery transactionId */
                    transactionId?: (Uint8Array|null);
                }

                /** Represents a CommandStatementQuery. */
                class CommandStatementQuery implements ICommandStatementQuery {

                    /**
                     * Constructs a new CommandStatementQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandStatementQuery);

                    /** CommandStatementQuery query. */
                    public query: string;

                    /** CommandStatementQuery transactionId. */
                    public transactionId?: (Uint8Array|null);

                    /** CommandStatementQuery _transactionId. */
                    public _transactionId?: "transactionId";

                    /**
                     * Creates a new CommandStatementQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandStatementQuery instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandStatementQuery): arrow.flight.protocol.sql.CommandStatementQuery;

                    /**
                     * Encodes the specified CommandStatementQuery message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementQuery.verify|verify} messages.
                     * @param message CommandStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandStatementQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandStatementQuery message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementQuery.verify|verify} messages.
                     * @param message CommandStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandStatementQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandStatementQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandStatementQuery;

                    /**
                     * Decodes a CommandStatementQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandStatementQuery;

                    /**
                     * Verifies a CommandStatementQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandStatementQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandStatementQuery
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandStatementQuery;

                    /**
                     * Creates a plain object from a CommandStatementQuery message. Also converts values to other types if specified.
                     * @param message CommandStatementQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandStatementQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandStatementQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandStatementQuery
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandStatementSubstraitPlan. */
                interface ICommandStatementSubstraitPlan {

                    /** CommandStatementSubstraitPlan plan */
                    plan?: (arrow.flight.protocol.sql.ISubstraitPlan|null);

                    /** CommandStatementSubstraitPlan transactionId */
                    transactionId?: (Uint8Array|null);
                }

                /** Represents a CommandStatementSubstraitPlan. */
                class CommandStatementSubstraitPlan implements ICommandStatementSubstraitPlan {

                    /**
                     * Constructs a new CommandStatementSubstraitPlan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandStatementSubstraitPlan);

                    /** CommandStatementSubstraitPlan plan. */
                    public plan?: (arrow.flight.protocol.sql.ISubstraitPlan|null);

                    /** CommandStatementSubstraitPlan transactionId. */
                    public transactionId?: (Uint8Array|null);

                    /** CommandStatementSubstraitPlan _transactionId. */
                    public _transactionId?: "transactionId";

                    /**
                     * Creates a new CommandStatementSubstraitPlan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandStatementSubstraitPlan instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandStatementSubstraitPlan): arrow.flight.protocol.sql.CommandStatementSubstraitPlan;

                    /**
                     * Encodes the specified CommandStatementSubstraitPlan message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementSubstraitPlan.verify|verify} messages.
                     * @param message CommandStatementSubstraitPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandStatementSubstraitPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandStatementSubstraitPlan message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementSubstraitPlan.verify|verify} messages.
                     * @param message CommandStatementSubstraitPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandStatementSubstraitPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandStatementSubstraitPlan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandStatementSubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandStatementSubstraitPlan;

                    /**
                     * Decodes a CommandStatementSubstraitPlan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandStatementSubstraitPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandStatementSubstraitPlan;

                    /**
                     * Verifies a CommandStatementSubstraitPlan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandStatementSubstraitPlan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandStatementSubstraitPlan
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandStatementSubstraitPlan;

                    /**
                     * Creates a plain object from a CommandStatementSubstraitPlan message. Also converts values to other types if specified.
                     * @param message CommandStatementSubstraitPlan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandStatementSubstraitPlan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandStatementSubstraitPlan to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandStatementSubstraitPlan
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TicketStatementQuery. */
                interface ITicketStatementQuery {

                    /** TicketStatementQuery statementHandle */
                    statementHandle?: (Uint8Array|null);
                }

                /**
                 * Represents a ticket resulting from GetFlightInfo with a CommandStatementQuery.
                 * This should be used only once and treated as an opaque value, that is, clients should not attempt to parse this.
                 */
                class TicketStatementQuery implements ITicketStatementQuery {

                    /**
                     * Constructs a new TicketStatementQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ITicketStatementQuery);

                    /** TicketStatementQuery statementHandle. */
                    public statementHandle: Uint8Array;

                    /**
                     * Creates a new TicketStatementQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TicketStatementQuery instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ITicketStatementQuery): arrow.flight.protocol.sql.TicketStatementQuery;

                    /**
                     * Encodes the specified TicketStatementQuery message. Does not implicitly {@link arrow.flight.protocol.sql.TicketStatementQuery.verify|verify} messages.
                     * @param message TicketStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ITicketStatementQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TicketStatementQuery message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.TicketStatementQuery.verify|verify} messages.
                     * @param message TicketStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ITicketStatementQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TicketStatementQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TicketStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.TicketStatementQuery;

                    /**
                     * Decodes a TicketStatementQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TicketStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.TicketStatementQuery;

                    /**
                     * Verifies a TicketStatementQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TicketStatementQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TicketStatementQuery
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.TicketStatementQuery;

                    /**
                     * Creates a plain object from a TicketStatementQuery message. Also converts values to other types if specified.
                     * @param message TicketStatementQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.TicketStatementQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TicketStatementQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TicketStatementQuery
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandPreparedStatementQuery. */
                interface ICommandPreparedStatementQuery {

                    /** CommandPreparedStatementQuery preparedStatementHandle */
                    preparedStatementHandle?: (Uint8Array|null);
                }

                /** Represents a CommandPreparedStatementQuery. */
                class CommandPreparedStatementQuery implements ICommandPreparedStatementQuery {

                    /**
                     * Constructs a new CommandPreparedStatementQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandPreparedStatementQuery);

                    /** CommandPreparedStatementQuery preparedStatementHandle. */
                    public preparedStatementHandle: Uint8Array;

                    /**
                     * Creates a new CommandPreparedStatementQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandPreparedStatementQuery instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandPreparedStatementQuery): arrow.flight.protocol.sql.CommandPreparedStatementQuery;

                    /**
                     * Encodes the specified CommandPreparedStatementQuery message. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementQuery.verify|verify} messages.
                     * @param message CommandPreparedStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandPreparedStatementQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandPreparedStatementQuery message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementQuery.verify|verify} messages.
                     * @param message CommandPreparedStatementQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandPreparedStatementQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandPreparedStatementQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandPreparedStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandPreparedStatementQuery;

                    /**
                     * Decodes a CommandPreparedStatementQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandPreparedStatementQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandPreparedStatementQuery;

                    /**
                     * Verifies a CommandPreparedStatementQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandPreparedStatementQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandPreparedStatementQuery
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandPreparedStatementQuery;

                    /**
                     * Creates a plain object from a CommandPreparedStatementQuery message. Also converts values to other types if specified.
                     * @param message CommandPreparedStatementQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandPreparedStatementQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandPreparedStatementQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandPreparedStatementQuery
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandStatementUpdate. */
                interface ICommandStatementUpdate {

                    /** CommandStatementUpdate query */
                    query?: (string|null);

                    /** CommandStatementUpdate transactionId */
                    transactionId?: (Uint8Array|null);
                }

                /** Represents a CommandStatementUpdate. */
                class CommandStatementUpdate implements ICommandStatementUpdate {

                    /**
                     * Constructs a new CommandStatementUpdate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandStatementUpdate);

                    /** CommandStatementUpdate query. */
                    public query: string;

                    /** CommandStatementUpdate transactionId. */
                    public transactionId?: (Uint8Array|null);

                    /** CommandStatementUpdate _transactionId. */
                    public _transactionId?: "transactionId";

                    /**
                     * Creates a new CommandStatementUpdate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandStatementUpdate instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandStatementUpdate): arrow.flight.protocol.sql.CommandStatementUpdate;

                    /**
                     * Encodes the specified CommandStatementUpdate message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementUpdate.verify|verify} messages.
                     * @param message CommandStatementUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandStatementUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandStatementUpdate message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementUpdate.verify|verify} messages.
                     * @param message CommandStatementUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandStatementUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandStatementUpdate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandStatementUpdate;

                    /**
                     * Decodes a CommandStatementUpdate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandStatementUpdate;

                    /**
                     * Verifies a CommandStatementUpdate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandStatementUpdate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandStatementUpdate
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandStatementUpdate;

                    /**
                     * Creates a plain object from a CommandStatementUpdate message. Also converts values to other types if specified.
                     * @param message CommandStatementUpdate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandStatementUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandStatementUpdate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandStatementUpdate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandPreparedStatementUpdate. */
                interface ICommandPreparedStatementUpdate {

                    /** CommandPreparedStatementUpdate preparedStatementHandle */
                    preparedStatementHandle?: (Uint8Array|null);
                }

                /** Represents a CommandPreparedStatementUpdate. */
                class CommandPreparedStatementUpdate implements ICommandPreparedStatementUpdate {

                    /**
                     * Constructs a new CommandPreparedStatementUpdate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandPreparedStatementUpdate);

                    /** CommandPreparedStatementUpdate preparedStatementHandle. */
                    public preparedStatementHandle: Uint8Array;

                    /**
                     * Creates a new CommandPreparedStatementUpdate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandPreparedStatementUpdate instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandPreparedStatementUpdate): arrow.flight.protocol.sql.CommandPreparedStatementUpdate;

                    /**
                     * Encodes the specified CommandPreparedStatementUpdate message. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementUpdate.verify|verify} messages.
                     * @param message CommandPreparedStatementUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandPreparedStatementUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandPreparedStatementUpdate message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandPreparedStatementUpdate.verify|verify} messages.
                     * @param message CommandPreparedStatementUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandPreparedStatementUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandPreparedStatementUpdate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandPreparedStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandPreparedStatementUpdate;

                    /**
                     * Decodes a CommandPreparedStatementUpdate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandPreparedStatementUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandPreparedStatementUpdate;

                    /**
                     * Verifies a CommandPreparedStatementUpdate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandPreparedStatementUpdate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandPreparedStatementUpdate
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandPreparedStatementUpdate;

                    /**
                     * Creates a plain object from a CommandPreparedStatementUpdate message. Also converts values to other types if specified.
                     * @param message CommandPreparedStatementUpdate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandPreparedStatementUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandPreparedStatementUpdate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandPreparedStatementUpdate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CommandStatementIngest. */
                interface ICommandStatementIngest {

                    /** CommandStatementIngest tableDefinitionOptions */
                    tableDefinitionOptions?: (arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions|null);

                    /** CommandStatementIngest table */
                    table?: (string|null);

                    /** CommandStatementIngest schema */
                    schema?: (string|null);

                    /** CommandStatementIngest catalog */
                    catalog?: (string|null);

                    /** CommandStatementIngest temporary */
                    temporary?: (boolean|null);

                    /** CommandStatementIngest transactionId */
                    transactionId?: (Uint8Array|null);

                    /** CommandStatementIngest options */
                    options?: ({ [k: string]: string }|null);
                }

                /** Represents a CommandStatementIngest. */
                class CommandStatementIngest implements ICommandStatementIngest {

                    /**
                     * Constructs a new CommandStatementIngest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.ICommandStatementIngest);

                    /** CommandStatementIngest tableDefinitionOptions. */
                    public tableDefinitionOptions?: (arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions|null);

                    /** CommandStatementIngest table. */
                    public table: string;

                    /** CommandStatementIngest schema. */
                    public schema?: (string|null);

                    /** CommandStatementIngest catalog. */
                    public catalog?: (string|null);

                    /** CommandStatementIngest temporary. */
                    public temporary: boolean;

                    /** CommandStatementIngest transactionId. */
                    public transactionId?: (Uint8Array|null);

                    /** CommandStatementIngest options. */
                    public options: { [k: string]: string };

                    /** CommandStatementIngest _schema. */
                    public _schema?: "schema";

                    /** CommandStatementIngest _catalog. */
                    public _catalog?: "catalog";

                    /** CommandStatementIngest _transactionId. */
                    public _transactionId?: "transactionId";

                    /**
                     * Creates a new CommandStatementIngest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommandStatementIngest instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.ICommandStatementIngest): arrow.flight.protocol.sql.CommandStatementIngest;

                    /**
                     * Encodes the specified CommandStatementIngest message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.verify|verify} messages.
                     * @param message CommandStatementIngest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.ICommandStatementIngest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommandStatementIngest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.verify|verify} messages.
                     * @param message CommandStatementIngest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.ICommandStatementIngest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommandStatementIngest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommandStatementIngest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandStatementIngest;

                    /**
                     * Decodes a CommandStatementIngest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommandStatementIngest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandStatementIngest;

                    /**
                     * Verifies a CommandStatementIngest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommandStatementIngest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommandStatementIngest
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandStatementIngest;

                    /**
                     * Creates a plain object from a CommandStatementIngest message. Also converts values to other types if specified.
                     * @param message CommandStatementIngest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.CommandStatementIngest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommandStatementIngest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CommandStatementIngest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CommandStatementIngest {

                    /** Properties of a TableDefinitionOptions. */
                    interface ITableDefinitionOptions {

                        /** TableDefinitionOptions ifNotExist */
                        ifNotExist?: (arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption|null);

                        /** TableDefinitionOptions ifExists */
                        ifExists?: (arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption|null);
                    }

                    /** Represents a TableDefinitionOptions. */
                    class TableDefinitionOptions implements ITableDefinitionOptions {

                        /**
                         * Constructs a new TableDefinitionOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions);

                        /** TableDefinitionOptions ifNotExist. */
                        public ifNotExist: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableNotExistOption;

                        /** TableDefinitionOptions ifExists. */
                        public ifExists: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.TableExistsOption;

                        /**
                         * Creates a new TableDefinitionOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TableDefinitionOptions instance
                         */
                        public static create(properties?: arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions): arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions;

                        /**
                         * Encodes the specified TableDefinitionOptions message. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.verify|verify} messages.
                         * @param message TableDefinitionOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TableDefinitionOptions message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions.verify|verify} messages.
                         * @param message TableDefinitionOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: arrow.flight.protocol.sql.CommandStatementIngest.ITableDefinitionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TableDefinitionOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TableDefinitionOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions;

                        /**
                         * Decodes a TableDefinitionOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TableDefinitionOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions;

                        /**
                         * Verifies a TableDefinitionOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TableDefinitionOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TableDefinitionOptions
                         */
                        public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions;

                        /**
                         * Creates a plain object from a TableDefinitionOptions message. Also converts values to other types if specified.
                         * @param message TableDefinitionOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: arrow.flight.protocol.sql.CommandStatementIngest.TableDefinitionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TableDefinitionOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TableDefinitionOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TableDefinitionOptions {

                        /** TableNotExistOption enum. */
                        enum TableNotExistOption {
                            TABLE_NOT_EXIST_OPTION_UNSPECIFIED = 0,
                            TABLE_NOT_EXIST_OPTION_CREATE = 1,
                            TABLE_NOT_EXIST_OPTION_FAIL = 2
                        }

                        /** TableExistsOption enum. */
                        enum TableExistsOption {
                            TABLE_EXISTS_OPTION_UNSPECIFIED = 0,
                            TABLE_EXISTS_OPTION_FAIL = 1,
                            TABLE_EXISTS_OPTION_APPEND = 2,
                            TABLE_EXISTS_OPTION_REPLACE = 3
                        }
                    }
                }

                /** Properties of a DoPutUpdateResult. */
                interface IDoPutUpdateResult {

                    /** DoPutUpdateResult recordCount */
                    recordCount?: (number|Long|null);
                }

                /** Represents a DoPutUpdateResult. */
                class DoPutUpdateResult implements IDoPutUpdateResult {

                    /**
                     * Constructs a new DoPutUpdateResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IDoPutUpdateResult);

                    /** DoPutUpdateResult recordCount. */
                    public recordCount: (number|Long);

                    /**
                     * Creates a new DoPutUpdateResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DoPutUpdateResult instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IDoPutUpdateResult): arrow.flight.protocol.sql.DoPutUpdateResult;

                    /**
                     * Encodes the specified DoPutUpdateResult message. Does not implicitly {@link arrow.flight.protocol.sql.DoPutUpdateResult.verify|verify} messages.
                     * @param message DoPutUpdateResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IDoPutUpdateResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DoPutUpdateResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.DoPutUpdateResult.verify|verify} messages.
                     * @param message DoPutUpdateResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IDoPutUpdateResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DoPutUpdateResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DoPutUpdateResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.DoPutUpdateResult;

                    /**
                     * Decodes a DoPutUpdateResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DoPutUpdateResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.DoPutUpdateResult;

                    /**
                     * Verifies a DoPutUpdateResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DoPutUpdateResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DoPutUpdateResult
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.DoPutUpdateResult;

                    /**
                     * Creates a plain object from a DoPutUpdateResult message. Also converts values to other types if specified.
                     * @param message DoPutUpdateResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.DoPutUpdateResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DoPutUpdateResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DoPutUpdateResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DoPutPreparedStatementResult. */
                interface IDoPutPreparedStatementResult {

                    /** DoPutPreparedStatementResult preparedStatementHandle */
                    preparedStatementHandle?: (Uint8Array|null);
                }

                /** Represents a DoPutPreparedStatementResult. */
                class DoPutPreparedStatementResult implements IDoPutPreparedStatementResult {

                    /**
                     * Constructs a new DoPutPreparedStatementResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IDoPutPreparedStatementResult);

                    /** DoPutPreparedStatementResult preparedStatementHandle. */
                    public preparedStatementHandle?: (Uint8Array|null);

                    /** DoPutPreparedStatementResult _preparedStatementHandle. */
                    public _preparedStatementHandle?: "preparedStatementHandle";

                    /**
                     * Creates a new DoPutPreparedStatementResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DoPutPreparedStatementResult instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IDoPutPreparedStatementResult): arrow.flight.protocol.sql.DoPutPreparedStatementResult;

                    /**
                     * Encodes the specified DoPutPreparedStatementResult message. Does not implicitly {@link arrow.flight.protocol.sql.DoPutPreparedStatementResult.verify|verify} messages.
                     * @param message DoPutPreparedStatementResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IDoPutPreparedStatementResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DoPutPreparedStatementResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.DoPutPreparedStatementResult.verify|verify} messages.
                     * @param message DoPutPreparedStatementResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IDoPutPreparedStatementResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DoPutPreparedStatementResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DoPutPreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.DoPutPreparedStatementResult;

                    /**
                     * Decodes a DoPutPreparedStatementResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DoPutPreparedStatementResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.DoPutPreparedStatementResult;

                    /**
                     * Verifies a DoPutPreparedStatementResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DoPutPreparedStatementResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DoPutPreparedStatementResult
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.DoPutPreparedStatementResult;

                    /**
                     * Creates a plain object from a DoPutPreparedStatementResult message. Also converts values to other types if specified.
                     * @param message DoPutPreparedStatementResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.DoPutPreparedStatementResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DoPutPreparedStatementResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DoPutPreparedStatementResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionCancelQueryRequest. */
                interface IActionCancelQueryRequest {

                    /** ActionCancelQueryRequest info */
                    info?: (Uint8Array|null);
                }

                /** Represents an ActionCancelQueryRequest. */
                class ActionCancelQueryRequest implements IActionCancelQueryRequest {

                    /**
                     * Constructs a new ActionCancelQueryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionCancelQueryRequest);

                    /** ActionCancelQueryRequest info. */
                    public info: Uint8Array;

                    /**
                     * Creates a new ActionCancelQueryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionCancelQueryRequest instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionCancelQueryRequest): arrow.flight.protocol.sql.ActionCancelQueryRequest;

                    /**
                     * Encodes the specified ActionCancelQueryRequest message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryRequest.verify|verify} messages.
                     * @param message ActionCancelQueryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionCancelQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionCancelQueryRequest message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryRequest.verify|verify} messages.
                     * @param message ActionCancelQueryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionCancelQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionCancelQueryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionCancelQueryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionCancelQueryRequest;

                    /**
                     * Decodes an ActionCancelQueryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionCancelQueryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionCancelQueryRequest;

                    /**
                     * Verifies an ActionCancelQueryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionCancelQueryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionCancelQueryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionCancelQueryRequest;

                    /**
                     * Creates a plain object from an ActionCancelQueryRequest message. Also converts values to other types if specified.
                     * @param message ActionCancelQueryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionCancelQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionCancelQueryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionCancelQueryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActionCancelQueryResult. */
                interface IActionCancelQueryResult {

                    /** ActionCancelQueryResult result */
                    result?: (arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult|null);
                }

                /** Represents an ActionCancelQueryResult. */
                class ActionCancelQueryResult implements IActionCancelQueryResult {

                    /**
                     * Constructs a new ActionCancelQueryResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: arrow.flight.protocol.sql.IActionCancelQueryResult);

                    /** ActionCancelQueryResult result. */
                    public result: arrow.flight.protocol.sql.ActionCancelQueryResult.CancelResult;

                    /**
                     * Creates a new ActionCancelQueryResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActionCancelQueryResult instance
                     */
                    public static create(properties?: arrow.flight.protocol.sql.IActionCancelQueryResult): arrow.flight.protocol.sql.ActionCancelQueryResult;

                    /**
                     * Encodes the specified ActionCancelQueryResult message. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryResult.verify|verify} messages.
                     * @param message ActionCancelQueryResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: arrow.flight.protocol.sql.IActionCancelQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActionCancelQueryResult message, length delimited. Does not implicitly {@link arrow.flight.protocol.sql.ActionCancelQueryResult.verify|verify} messages.
                     * @param message ActionCancelQueryResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: arrow.flight.protocol.sql.IActionCancelQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActionCancelQueryResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActionCancelQueryResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arrow.flight.protocol.sql.ActionCancelQueryResult;

                    /**
                     * Decodes an ActionCancelQueryResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActionCancelQueryResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arrow.flight.protocol.sql.ActionCancelQueryResult;

                    /**
                     * Verifies an ActionCancelQueryResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActionCancelQueryResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActionCancelQueryResult
                     */
                    public static fromObject(object: { [k: string]: any }): arrow.flight.protocol.sql.ActionCancelQueryResult;

                    /**
                     * Creates a plain object from an ActionCancelQueryResult message. Also converts values to other types if specified.
                     * @param message ActionCancelQueryResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: arrow.flight.protocol.sql.ActionCancelQueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActionCancelQueryResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActionCancelQueryResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ActionCancelQueryResult {

                    /** CancelResult enum. */
                    enum CancelResult {
                        CANCEL_RESULT_UNSPECIFIED = 0,
                        CANCEL_RESULT_CANCELLED = 1,
                        CANCEL_RESULT_CANCELLING = 2,
                        CANCEL_RESULT_NOT_CANCELLABLE = 3
                    }
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .arrow.flight.protocol.sql.experimental */
            ".arrow.flight.protocol.sql.experimental"?: (boolean|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

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
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}

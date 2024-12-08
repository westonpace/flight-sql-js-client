import { RecordBatchStream } from "./arrow_util";
import { FlightSqlClient } from "./flightsql";
import { arrow as fsql } from "./generated/flightsql";
import { RecordBatch } from "apache-arrow";
import { pipe, toArray } from "iter-ops";
import { firstValueFrom } from "./async_util";

export interface ClientOptions {
  host: string;
  username: string;
  password: string;
  insecure?: boolean;
}

export interface FieldInfo {
  name: string;
  arrowType: string;
}

export interface Query {
  text: string;
  values: unknown[];
  rowMode: string;
}

export class QueryResult {
  private raw: RecordBatchStream;

  constructor(raw: RecordBatchStream) {
    this.raw = raw;
  }

  public toArrowStream(): AsyncIterable<RecordBatch> {
    return this.raw;
  }

  public async collectToArrow(): Promise<RecordBatch[]> {
    const batches = await firstValueFrom(pipe(this.raw, toArray()));
    return batches ?? [];
  }

  public async collectToObjects(): Promise<unknown[]> {
    const collectedBatches = await this.collectToArrow();
    const batchesOfRows = collectedBatches.map((batch) => batch.toArray());
    if (batchesOfRows.length == 0) {
      return [];
    } else if (batchesOfRows.length == 1) {
      return batchesOfRows[0];
    } else {
      const first = batchesOfRows[0];
      const rest = batchesOfRows.slice(1);
      return first.concat(...rest);
    }
  }
}

export class Client {
  private sql: FlightSqlClient;

  private constructor(sql: FlightSqlClient) {
    this.sql = sql;
  }

  public static async connect(options: ClientOptions): Promise<Client> {
    const sql = await FlightSqlClient.connect(options.host, options.username, options.password);
    return new Client(sql);
  }

  public async query(sql: string): Promise<QueryResult> {
    const query: fsql.flight.protocol.sql.ICommandStatementQuery = {
      query: sql,
    };
    const batches = await this.sql.statementQuery(query);
    return new QueryResult(batches);
  }
}

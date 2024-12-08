import { describe, expect, test, beforeEach } from "@jest/globals";

import { Client } from "./client";

describe("initially we", () => {
  test("can connect to a client", async () => {
    const client = await Client.connect({
      host: "localhost:10025",
      username: "lancedb",
      password: "password",
    });
    expect(client).toBeDefined();
  });
});

describe("with a client we can", () => {
  let client: Client;

  beforeEach(async () => {
    client = await Client.connect({
      host: "localhost:10025",
      username: "lancedb",
      password: "password",
    });
  });

  test("issue a simple SQL query", async () => {
    interface ExpectedRecord {
      f1: string;
      f2: string;
      _rowid: number;
      _rowaddr: number;
    }

    const queryResult = await client.query("SELECT * FROM weston.public.alltypes LIMIT 10");
    const result = (await queryResult.collectToObjects()) as ExpectedRecord[];
    expect(result.length).toBe(3);

    expect(result[0].f1 === "10");
    expect(result[0].f2 === "aa");
    expect(result[0]._rowid === 0);
    expect(result[0]._rowaddr === 0);

    expect(result[1].f1 === "20");
    expect(result[1].f2 === "bb");
    expect(result[1]._rowid === 1);
    expect(result[1]._rowaddr === 1);

    expect(result[2].f1 === "30");
    expect(result[2].f2 === "cc");
    expect(result[2]._rowid === 2);
    expect(result[2]._rowaddr === 2);
  });
});

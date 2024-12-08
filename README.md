# JavaScript Client for FlightSQL

This is a JavaScript client for FlightSQL. It allows you to easily query FlightSQL servers from your JavaScript applications.

Warning: This client is still experimental and in heavy development. If you'd like to help contribute, please reach out to us
at the [LanceDB Discord server](https://discord.gg/G5DcmnZWKB).

Currently all testing is done on Node.

## Installation

You can install the client using npm:

```bash
npm install @lancedb/flightsql-client
```

## Usage

To use the client, you first need to connect to your database:

```javascript
import { Client } from "@lancedb/flightsql-client";

const client = await Client.connect({
  host: "mydb.com:10025",
  username: "lancedb",
  password: "password",
});
```

Once you have connected to your database, you can run queries:

```javascript
const result = await client.query("SELECT * FROM flights WHERE origin = 'SFO'");
```

Query results can be returned in a variety of formats but the simplest thing to do is to return them as an array of objects:

```javascript
interface FlightRecord {
    origin: string;
    destination: string;
}

const flights = (await result.collectToObjects()) as FlightRecord[];
console.log(flights);
```

# Contributor's Guide

## Contributing

We welcome contributions to the project. As a best practice we recommend opening a Github issue or discussion to discuss
the proposed changes before submitting a pull request. This will help ensure that the changes are in line with the goals
of the project and that you are not duplicating work that is already in progress.

## Components

The project is divided into several components.

### Flight Client

Unlike other language implementations, JavaScript's arrow package does not yet have utilities for working with Flight.
As a result we have implemented our own Flight client. This client currently only supports the minimum required by our
client and is not a complete implementation of the Flight protocol.

If you are interested in taking the client and expanding it to support more of the Flight protocol, or breaking it out
into its own package, we would welcome that contribution.

### FlightSQL Client

The FlightSQL API is a flight-based API for interacting with servers that can make SQL queries. Similar to Flight, we
have only implemented the minimum required to support our client. If you are interested in expanding the API to support
more of the FlightSQL protocol, or breaking it out into its own package, we would welcome that contribution.

### Client

The client is the main entry point for the package. It is responsible for connecting to the FlightSQL server and running
queries. Functionality should generally start here and then work its way down into the other components as needed.

### What about ADBC?

ADBC is a standard client API (similar to JDBC, ODBC, etc.) for SQL databases. It is very thorough and meant to expose
most (or all) of the capabilities of a SQL database. We have not implemented ADBC for a few reasons:

1. JavaScript does not have a history of adopting commong client protocols (e.g. there is not much use of JDBC or ODBC
   in the JavaScript ecosystem).
2. The ADBC protocol is much more exhaustive than our current needs.

If you're interested in implementing ADBC for JavaScript, we recommend breaking the Flight/FlightSQL utilities into either
a separate package or upstreaming into the Apache Arrow project. You could then build an ADBC client on top of that.

## Testing

Unit tests can be run with `npm test` or `npx jest`. Due to the nature of the library, most coverage is obtained via
integration testing. There are few pure unit tests.

Integration tests will run against a real FlightSQL server. The integration tests launch a flight server in a docker
container and then run the tests in a separate container. This is done to ensure that the tests are run in a clean
environment and that the tests are not dependent on the state of the project (e.g. make sure we are packing all the
correct files into the `dist` directory).

To run the integration tests, you will need to have Docker (and `docker-compose`) installed. You can then run the
following commands:

```bash
docker-compose -f ci/docker/integration-compose.yml build
docker-compose -f ci/docker/integration-compose.yml run client
```

This can be slow for rapid iteration. If you want to run integration tests locally and more quickly you can start
a long-running FlightSQL server on your local machine (in a separate terminal) with the command:

```bash
docker-compose -f ci/docker/integration-compose.yml build local_server
docker-compose -f ci/docker/integration-compose.yml run local_server
```

You can then run the integration tests with the commands:

```bash
npm link .. # Link the local package to the integration tests, only run this once
npx jest
```

The integration tests should automatically detect a local server on port 31337 and run against it.

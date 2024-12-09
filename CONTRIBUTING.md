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

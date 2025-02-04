import React from "react";
import "./App.css";

import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "@apollo/client/core";

import Routes from "./routes";

const httpLink = createHttpLink({ uri: "http://localhost:4567/graphql" });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: (httpLink as unknown) as ApolloLink,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;

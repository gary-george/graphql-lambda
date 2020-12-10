'use strict';
const express = require('express');
const body_parser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const GraphQLSchema = require('./graphql/schema');
const app = express();

app.use(body_parser.json({ limit: '50mb' }));
app.use(
  '/',
  graphqlHTTP({
    graphiql: true,
    schema: GraphQLSchema,
  })
);
module.exports = app;

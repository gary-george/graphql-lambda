'use strict';
const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = GraphQL;

const Posts = require('./queries/Posts');
const PostsMutation = require('./mutations/Posts');

const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost: PostsMutation.mutation(),
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    posts: Posts.query(),
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});

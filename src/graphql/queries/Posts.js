'use strict';
const GraphQL = require('graphql');
const { GraphQLList, GraphQLNonNull } = GraphQL;

const PostsType = require('../types/Posts');
const PostsResolver = require('../resolvers/Posts');

module.exports = {
  query() {
    return {
      type: new GraphQLList(PostsType),
      description: 'This will return all the posts',
      resolve(parent, args, context, info) {
        return PostsResolver.index(args);
      },
    };
  },
};

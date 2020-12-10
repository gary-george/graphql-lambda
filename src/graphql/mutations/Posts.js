'use strict';
const GraphQL = require('graphql');
const { GraphQLString } = GraphQL;

const PostsType = require('../types/Posts');

module.exports = {
  mutation() {
    return {
      type: PostsType,
      args: {
        title: { type: GraphQLString },
        subtitle: { type: GraphQLString },
        text: { type: GraphQLString },
      },
      resolve(parent, args) {
        //Call your API POST/PUT endpoint in your usual way. (axios,fetch etc)

        //Return the result of the insert/update
        return { ...args };
      },
    };
  },
};

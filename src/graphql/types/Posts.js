'use strict';
const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLString } = GraphQL;
const PostsType = new GraphQL.GraphQLObjectType({
  name: 'Posts',
  description: 'Post Type, For all the posts in the db.',
  fields: () => ({
    _id: {
      type: GraphQLString,
      description: 'ID of the post',
    },
    title: {
      type: GraphQLString,
      description: 'Title of the post',
    },
    subtitle: {
      type: GraphQLString,
      description: 'subtitle of the post',
    },
    text: {
      type: GraphQLString,
      description: 'description: of the post',
    },
  }),
});
module.exports = PostsType;

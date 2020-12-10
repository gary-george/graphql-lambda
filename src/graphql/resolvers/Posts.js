'use strict';

const PostsController = {
  index: (args) => {
    //This is where you would call your existing API endpoint to return some data
    //We are simulating it with a static json file
    const posts = require('../../api/posts.json');

    return posts;
  },
};
module.exports = PostsController;

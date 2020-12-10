module.exports.getPosts = async (event, context, callback) => {
  console.log('hello world from getPosts');

  return callback(null, {
    statusCode: 200,
    body: `we are returning posts - graphql`,
    isBase64Encoded: false,
  });
};

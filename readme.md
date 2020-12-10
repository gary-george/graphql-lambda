### to run graphiql with node

node server

### to run graphiql via lambda

You must first deploy this to SLS using sls deploy

Once deployed you will recieve your api gateway url.

You will then be able to access your project at:
{YOUR_API_GATEWAY_URL}/prod/posts

### example payloads for testing in graphiql

## Get all the posts:

```
{
  posts{
    _id,
    title,
    subtitle
  }
}
```

## Add a post:

With a mutation you pass in an object of what you would like to be returned as a second argument

```
mutation {
  addPost(
    title: "Brand New Post",
    subtitle: "This is super interesting",
    text: "The body for the new blog post"
  ) {
    title
    subtitle
    text
  }
}
```

### Blog post

This boiler plate is discussed int his blog post:

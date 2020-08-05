// Require blog service dependency
const blog_service = require("../service/blog_service");

// Export of API blog request options for backend
module.exports = (app) => {
  // Adds a Blog post to the blogs database
  app.post("/blog/post", (request, response, next) => {
    console.log("Create New Blog Post Request");

    blog_service
      .create(request.body)
      .then((post) => {
        response.json({ "New Blog Post": post.title });
        console.log({ "New Blog Post": post.content });
      })
      .catch((err) => {
        next(err);
      });
  });

  // Returns all of the blog posts posted
  app.get("/blog/getAll", (request, response, next) => {
    console.log("Get all Blog Posts Request");

    blog_service
      .getAll()
      .then((posts) => {
        posts = posts.map((post) => {
          post = { title: post.title, content: post.content };
          return post;
        });
        response.json(posts);
        console.log(posts);
      })
      .catch((err) => {
        next(err);
      });
  });
};

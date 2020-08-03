// Database helper dependency
const db = require("../database/db");

// Database Schemas from db helper
const User = db.User;
const Blog = db.Blog;

// Export of API request options for backend
module.exports = (app) => {
  // Returns the list of users that are present in the database
  app.get("/users", (request, response) => {
    console.log("Got a get request.");
    const data = { data: "Nailed it" };
    response.json(data);
  });

  // Adds a username and password pair to database
  app.post("/user", (request, response, next) => {
    console.log("Register New User Request");
    const user = new User(request.body);

    user
      .save()
      .then(() => {
        response.json({ "New User": user.username });
        console.log({ "New User": user.username });
      })
      .catch((err) => {
        next(err);
      });
  });

  // Adds a Blog post to the blogs database
  app.post("/blog", (request, response, next) => {
    console.log("Create New Blog Post Request");
    const blog = new Blog(request.body);

    blog
      .save()
      .then(() => {
        response.json({ "New Blog Post": blog.title });
        console.log({ "New Blog Post": blog.content });
      })
      .catch((err) => {
        next(err);
      });
  });
};

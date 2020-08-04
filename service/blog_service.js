// Database helper dependency
const db = require("../database/db");

// Database Schemas for Blog Posts
const Blog = db.Blog;

// Export the blog service functions
module.exports = {
  create,
};

// Function for creating new blog post in database
async function create(post) {
  console.log("Creating blog post.");
  const blog = new Blog(post);
  const savedPost = await blog.save()
  return savedPost;
}

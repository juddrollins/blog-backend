// Database helper dependency
const db = require("../database/db");

// Database Schemas for Blog Posts
const Blog = db.Blog;

// Export the blog service functions
module.exports = {
  create,
  getAll,
};

// Function for creating new blog post in database
async function create(post) {
  console.log("Creating blog post.");

  const blog = new Blog(post);
  const savedPost = await blog.save();

  return savedPost;
}

// Function for returning all of the blog posts to the user
async function getAll() {
  console.log("Gathering all posts.");

  // Return all posts in database to user
  return await Blog.find();
}

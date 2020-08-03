// Import mongoose dependency
const mongoose = require("mongoose");

// Create new Mongoose Schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// Export Mongoose blog schema
module.exports = mongoose.model("Blog", blogSchema);

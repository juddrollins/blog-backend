// Import mongoose dependency
const mongoose = require('mongoose')

// Create new Mongoose Schema
const blogSchema = new mongoose.Schema({
  "title": String,
  "content": String
})

// Export Mongoose blog schema
module.exports = mongoose.model('Blog', blogSchema)

// Import mongoose dependency
const mongoose = require('mongoose')

// Create new Mongoose Schema
let userSchema = new mongoose.Schema({
  username: String,
  password: String
})

// Export Mongoose user schema
module.exports = mongoose.model('User', userSchema)
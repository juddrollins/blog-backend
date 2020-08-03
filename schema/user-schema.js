// Import mongoose dependency
const mongoose = require("mongoose");

// Create new Mongoose Schema
let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  }
});

// Export Mongoose user schema
module.exports = mongoose.model("User", userSchema);

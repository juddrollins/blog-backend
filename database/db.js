
// Import Mongoose dependency
const mongoose = require('mongoose')

// URI Encode username and password for uri string
const username = encodeURIComponent("")
const password = encodeURIComponent("")
const uri = `mongodb+srv://${username}:${password}@cluster0.bufry.mongodb.net/blog?retryWrites=true&w=majority`

// Connect to MongoDB with Mongoose
mongoose.connect(uri, { useNewUrlParser: true });

// Export the user schema
module.exports = {
  User: require('../schema/user-schema')
}
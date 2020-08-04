// Import Mongoose dependency
const mongoose = require("mongoose");
// Import database connection dependency
const config = require('../config.json');
// Database environment for storing username and password
require("dotenv").config();

// URI Encode username and password for uri string
const username = encodeURIComponent(process.env.DB_USER);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const uri = `mongodb+srv://${username}:${password}${config.connectionString}`;

// Connect to MongoDB with Mongoose. Catch Error if connection fails.
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error\n");
    console.error(err);
  });

// Export Mongoose schemas for use of controller
module.exports = {
  User: require("../schema/user-schema"),
  Blog: require("../schema/blog-schema"),
};

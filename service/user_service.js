// Database helper dependency
const db = require("../database/db");
// Import for creating json web token
const jwt = require("jsonwebtoken");
// Database environment for storing username and password
require("dotenv").config();

// Database Schemas for users
const User = db.User;

// Export the service functions
module.exports = {
  create,
  login,
};

// Function for creating new user in database
async function create(user) {
  console.log("Creating user.");

  if (await User.findOne({ username: user.username })) {
    throw { message: "Username " + user.username + " is already taken" };
  }
  const userModel = new User(user);
  const savedUser = await userModel.save();
  return savedUser;
}

// Function for authenticating a user. Will return undefined if no user is found
async function login({ username, password }) {
  const user = await User.findOne({ username });

  if (user && user.password === password) {
    const token = jwt.sign({ sub: user.id }, process.env.SECRET);
    return { user: user.username, token };
  }
}

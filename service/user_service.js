// Database helper dependency
const db = require("../database/db");
// Import for creating json web token
const jwt = require("jsonwebtoken");
// Import for password hashing
const bcrypt = require("bcryptjs");
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

  // Check to see if user already exists in the database
  if (await User.findOne({ username: user.username })) {
    throw { message: "Username " + user.username + " is already taken" };
  }

  const userModel = new User(user);

  // Checks to see if user entered a password
  if (user.password) {
    userModel.hash = bcrypt.hashSync(user.password, 10);
  }

  // Saves user. Will be rejected by user Model if password was not provided and hashed
  const savedUser = await userModel.save();
  return savedUser;
}

// Function for authenticating a user. Will return undefined if no user is found
async function login({ username, password }) {
  console.log("Logging in user.");

  // See if user exists in database
  const user = await User.findOne({ username });

  // If the user could not be found in the system throw an error
  if (!user) {
    throw { message: "User does not exist." };
  }

  // Check to see if user password is correct. If password is correct return user with token.
  // If the Password is incorrect throw an error
  if (user && bcrypt.compareSync(password, user.hash)) {
    const token = jwt.sign({ sub: user.id }, process.env.SECRET);
    return { user: user.username, token };
  } else {
    throw { message: "Password is incorrect." };
  }
}

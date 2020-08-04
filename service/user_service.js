// Database helper dependency
const db = require("../database/db");

// Database Schemas for users
const User = db.User;

// Export the service functions
module.exports = {
  create,
};

// Function for creating new user in database
async function create(user) {
  console.log("Creating user.");
  const userModel = new User(user);
  const savedUser = await userModel.save();
  return savedUser;
}

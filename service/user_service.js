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

  if (await User.findOne({ username: user.username })) {
    throw { message: 'Username ' + user.username + ' is already taken' };
  }
  const userModel = new User(user);
  const savedUser = await userModel.save();
  return savedUser;
}

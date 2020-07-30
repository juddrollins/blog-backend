
// Express dependency
const express = require('express')

// Database helper dependency 
const db = require('../database/db')
const User = db.User

// Export of API request options for backend
module.exports = (app) => {
  
  // Returns the list of users that are present in the database 
  app.get("/users", (request, response) => {
    console.log("Got a get request.")
    const data = { "data": "Nailed it"}
    response.json(data)
  });

  // Adds a username and password pair to database
  app.post("/user", (request, response) => {
    console.log(" Got a post request.")
    const user = new User(request.body);
    console.log(user)
    response.json({"data": "gotten"})
    user.save();
  })

}

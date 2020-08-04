// Require user service dependency
const user_service = require("../service/user_service");

// Export of API user request options for backend
module.exports = (app) => {
  // Adds a username and password pair to database
  app.post("/user", (request, response, next) => {
    console.log("Register New User Request");

    //Send request body to user service. Catch errors
    user_service
      .create(request.body)
      .then(user => {
        response.json({ "New User": user.username });
        console.log({ "New User": user.username });
      })
      .catch((err) => {
        next(err);
      });
  });
};

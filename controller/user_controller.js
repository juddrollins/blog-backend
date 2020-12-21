// Require user service dependency
const user_service = require("../service/user_service");

// Export of API user request options for backend
module.exports = (app) => {
  // Adds a username and password pair to database
  app.post("/user/create", (request, response, next) => {
    console.log("Register New User Request");

    // Send request body to user service. Catch errors
    user_service
      .create(request.body)
      .then((user) => {
        response.json({ "New User": user.username });
        console.log({ "New User": user.username });
      })
      .catch((err) => {
        // Pass error to error-handler service
        next(err);
      });
  });

  app.post("/user/login", (request, response, next) => {
    console.log("User Login Request");

    // Send request body to user service. Catch errors
    user_service
      .login(request.body)
      .then((token) => {
        token
          ? response.json(token)
          : response
              .status(401)
              .json({ message: "username or password incorrect" });
        console.log(token);
      })
      .catch((err) => {
        // Pass error to error-handler service
        next(err);
      });
  });
};

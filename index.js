// Express imports for handling API requests
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Custom error handler db interraction errors
const errorHandler = require("./error/error-handler");
// JSON web token authentication
const jwt = require("./authorization/auth");

// Setup CORS Policy for app
app.use(cors());
// Setup body parsing for app
app.use(bodyParser.json());
// use JWT auth to secure the api
app.use(jwt());

// Setup handling for user controller file
require("./controller/user_controller")(app);
// Setup handling for blog controller file
require("./controller/blog_controller")(app);

// Setup error handling for the app
app.use(errorHandler);

// Start app listening at port 3000
app.listen(3000, () => console.log("listening at 3000"));

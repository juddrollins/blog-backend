// Express imports for handling API requests
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./error/error-handler");

// Setup CORS Policy for app
app.use(cors());
// Setup body parsing for app
app.use(bodyParser.json());

// Setup handling for user controller file
require("./controller/user_controller")(app);
// Setup handling for blog controller file
require("./controller/blog_controller")(app);

// Setup error handling for the app
app.use(errorHandler);
// Start app listening at port 3000
app.listen(3000, () => console.log("listening at 3000"));

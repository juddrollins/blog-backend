// Express imports for handling API requests
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Mongo imports for db access
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://:@cluster0.bufry.mongodb.net/Cluster0?retryWrites=true&w=majority"
const client = new MongoClient(uri);

// Setup CORS Policy for app
app.use(cors());
// Setup body parsing for app
app.use(bodyParser.json());
// Setup handling for controller file
require("./controller/controller")(app);
// Start app listening at port 3000
app.listen(3000, () => console.log("listening at 3000"));

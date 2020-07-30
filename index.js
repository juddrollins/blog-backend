
// Express imports for handling API requests
const express = require('express');
const app = express();
const cors = require('cors')

// Mongo imports for db access
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://:@cluster0.bufry.mongodb.net/Cluster0?retryWrites=true&w=majority"
const client = new MongoClient(uri);

// Setup handling for controller file
require('./controller/controller')(app)
// Setup CORS Policy for app
app.use(cors());
// Start app listening at port 3000
app.listen(3000, () => console.log('listening at 3000'));

/**
 * Main function used to setup MongoDB connection
 */
async function main(){
  try {
    await client.connect();
    await listDatabases(client);
  
  } catch (err) {
    console.error(err);
  
  } finally {
    await client.close();
  
  }
}

main().catch(console.error)

/**
 * Function for listing the databases for the currently connected cluster
 * @param {*} client MongoClient that is connected to DB server
 */
async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
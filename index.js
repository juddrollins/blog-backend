const express = require('express');

const app = express();

app.listen(3000, () => console.log('listening at 3000'));


// app.post("/api", (request, response) => {
//   console.log("I got a request");
// });

app.get("/api", (request, response) => {
  console.log("Got a get request.")
  const data = { "data": "Nailed it"}
  response.set('Access-Control-Allow-Origin', '*')
  response.json(data)
});
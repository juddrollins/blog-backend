

module.exports = (app) => {
  
  app.get("/api", (request, response) => {
    console.log("Got a get request.")
    const data = { "data": "Nailed it"}
    response.json(data)
  });

}

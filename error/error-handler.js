// Error handler for API Endpoints
module.exports = errorHandler;

function errorHandler(err, req, res, next) {
  // Give status code of 500 if code DNE
  err.statusCode = err.statusCode || 500;
  // Set status to 'error' if status DNE
  err.status = err.status || "error";

  // Error response used for log and user return
  const json_resp = {
    status: err.status,
    message: err.message,
  };

  // Set Response error status to be returned to user
  res.status(err.statusCode).json(json_resp);

  // Log the error response in the console
  console.log(json_resp);
}

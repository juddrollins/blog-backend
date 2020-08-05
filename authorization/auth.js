// Import express-jwt dependency 
const expressJwt = require('express-jwt');
// Export jwt method
module.exports = jwt;
// Environment variable for storing secret
require("dotenv").config();

// Label paths that require jwt authentication
function jwt() {
    const secret = process.env.SECRET;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/user/create',
            '/user/login'
        ]
    });
}

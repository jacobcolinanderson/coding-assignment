const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const userRoutes = require("./routes/UserRoutes");
const mapRoutes = require('express-routes-mapper');
require('dotenv').config()

app.use(bodyParser.json())

const mappedUserRoutes = mapRoutes(userRoutes, 'server/controllers/');
app.use('/api', mappedUserRoutes);
    
//Set the port that you want the server to run on
const port = process.env.PORT || 8080;
app.listen(port);
console.log('App is listening on port ' + port);

module.exports = app
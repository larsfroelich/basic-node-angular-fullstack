console.log(" *** Server startup *** ");
const ROOT_DIR = __dirname;
console.log(" - loading express");
var express = require('express');
var app = express();
console.log(" - loading path");
var path = require("path");
console.log(" - loading morgan");
var morgan = require('morgan');
console.log(" - loading body-parser");
var bodyParser = require('body-parser');

const walkDirectory = require(path.join(ROOT_DIR, 'server/walkDir'));
const controllers = walkDirectory(ROOT_DIR + '/public/', 'js/controllers');
const services = walkDirectory(ROOT_DIR + '/public/', 'js/services/');

app.set('views', ROOT_DIR + '/views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// Routes
console.log(" - loading routes");
app.use(express.static(path.join(ROOT_DIR, 'public'))); // serving static files
require(path.join(ROOT_DIR, 'server/routes'))(app, controllers, services); // non-direct routes

app.use(morgan('dev')); // output requests to console

process.env.port = (process.env.port || 8080);
// launch server
app.listen(process.env.port, function () {
    console.log('Server listening on port ' + process.env.port);
});


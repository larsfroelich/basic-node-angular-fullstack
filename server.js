const path = require('path');

console.log(" *** Server startup *** ");
const ROOT_DIR = __dirname;
console.log(" - loading express");
const express = require('express');
const app = express();
console.log(" - loading morgan");
const morgan = require('morgan');

const walkDirectory = require(path.join(ROOT_DIR, 'server/walkDir'));
const controllers = walkDirectory(ROOT_DIR + '/public/', 'js/controllers');
const services = walkDirectory(ROOT_DIR + '/public/', 'js/services');

app.set('views', ROOT_DIR + '/views');
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json

// Routes
console.log(" - loading routes");
app.use(express.static(path.join(ROOT_DIR, 'public'))); // serving static files
require(path.join(ROOT_DIR, 'server/routes'))(app, controllers, services); // non-direct routes

app.use(morgan('dev')); // output requests to console

const port = process.env.PORT || 8080;
// launch server
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});


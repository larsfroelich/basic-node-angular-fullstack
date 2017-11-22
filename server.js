console.log(" *** Server startup *** ");
global.ROOT_DIR = __dirname;
console.log(" - loading express");
var express = require('express');
var app = express();
console.log(" - loading path");
var path = require("path");
console.log(" - loading morgan");
var morgan = require('morgan');
require(global.ROOT_DIR + '/server/walkDir');

app.set('views', global.ROOT_DIR + '/views');
app.set('view engine', 'pug');

// Routes
console.log(" - loading routes");
app.use(express.static(path.join(global.ROOT_DIR, 'public'))); // serving static files
require(global.ROOT_DIR + '/server/routes')(app); // non-direct routes

app.use(morgan('dev')); // output requests to console

process.env.port = (process.env.port || 8080);
// launch server
app.listen(process.env.port, function () {
    console.log('Server listening on port ' + process.env.port);
});

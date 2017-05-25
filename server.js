global.ROOT_DIR = __dirname;
console.log(" *** Server startup *** ");

console.log(" - loading express");
var express = require('express');
var app = express();
console.log(" - loading morgan");
var morgan = require('morgan');
console.log(" - loading path");
var path = require('path');
require(__dirname +  '/server/walkDir.js');

app.set('views', global.ROOT_DIR + '/views');
app.set('view engine', 'jade');

// Routes
console.log(" - loading routes");
app.use(express.static(path.join(global.ROOT_DIR, 'public'))); // serving static files
require(global.ROOT_DIR + '/server/routes')(app); // non-direct routes

app.use(morgan('dev')); // output requests to console
app.use(express.static(__dirname + '/public')); // serving static files

// launch server
app.listen(8080, function () {
    console.log('Server listening on port 8080');
});

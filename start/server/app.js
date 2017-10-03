const express = require('express')
const app = express()
// const morgan = require('morgan')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const db = require('../models').db
const path = require('path')
const bluebird = require('bluebird')


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', '../public')))
app.use(volleyball)


// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send("Something went wrong:" +  err.message);
});

// listen on a port
var port = 3000;
app.listen(port, function() {
  console.log("The server is listening closely on port", port);
  db
    .sync()
    .then(function() {
      console.log("Synchronated the database");
    })
    .catch(function(err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
});

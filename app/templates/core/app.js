var express = require('express'),
  mongoose = require('mongoose'),
  fs = require('fs'),
  config = require('./config/config');

var connect = function() {
  var options = {
    server: {
      socketOptions: {
        keepAlive: 1
      }
    }
  };
  mongoose.connect(config.db, options);
};

// Connect to database
connect();

// Handle connection errors
mongoose.connection.on('error', function() {
  throw new Error('unable to connect to database at ' + config.db);
});

// Reconnect when disconnected
mongoose.connection.on('disconnected', function() {
  connect();
});

// Require all models
var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

var app = express();

// Configure express middleware before routes
require('./config/express')(app, config);

// Configure routes
require('./config/routes/web')(app);

// Expose application
exports = module.exports = app;
'use strict';

var express = require('express');
var config = require('./config/environment');

var app = express();
var server = require('http').createServer(app);

require('./config/mongodb')(config);
require('./config/express')(app, config);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.info('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
module.exports = app;

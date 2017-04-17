'use strict';

var mongoose = require('mongoose');
var seeddb = require('./seeddb');

module.exports = function (config) {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongo.uri, config.mongo.options);
  mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
  });

  seeddb.init(config);
};

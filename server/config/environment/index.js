'use strict';

var _ = require('lodash');
var env = require('./' + process.env.NODE_ENV + '.js');

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // in milliseconds
  requestTimeout: 5000,

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(all, env || {});

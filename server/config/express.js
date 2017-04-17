'use strict';

var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function (app, config) {
  app.use(bodyParser.json());
  if (app.get('env') === 'development') { app.use(morgan('dev')); }

  app.use(cors());
  var whitelist = ['http://localhost:3333'];
  var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
  };
  app.options('*', cors(corsOptionsDelegate));

  app.use(function (req, res, next) {
    res.setTimeout(config.requestTimeout, function () {
      res.sendStatus(408);
    });
    next();
  });
};

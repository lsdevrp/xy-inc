'use strict';

var express = require('express');
var controller = require('./manager.controller');

var router = express.Router();
var routeResponse = function (res, message) {
  res.status(message.statusCode);
  res.json(message.data);
};

exports.init = function(app){   
  var router = express.Router();

  router.get('/', function (req, res) {
    controller.getAll().then(function (message) {
      routeResponse(res, message);
    });
  });

  router.post('/', function (req, res) {
    controller.add(app, req.body).then(function (message) {
      routeResponse(res, message);
    });
  });

  return router;
};
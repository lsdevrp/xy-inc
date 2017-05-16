'use strict';

var express = require('express');
var controller = require('./dynamic.controller');

var routeResponse = function (res, message) {
  res.status(message.statusCode);
  res.json(message.data);
};

exports.init = function(route){  
  var router = express.Router();
  var controllerMethods = controller.init(route);

  router.get('/', function (req, res) {
    controllerMethods.getAll().then(function (message) {
      routeResponse(res, message);
    });
  });

  router.post('/', function (req, res) {
    controllerMethods.add(req.body).then(function (message) {
      routeResponse(res, message);
    });
  });

  return router;
};

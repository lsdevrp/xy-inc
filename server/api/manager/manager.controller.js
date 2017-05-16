

var _ = require('lodash');
var Manager = require('./manager.model');
var httpStatus = require('http-status');
var dynamicRoutes = require('../dynamic');

var messageResponse = function (data, statusCode) {
  return {
    data: data,
    statusCode: statusCode
  };
};

exports.getAll = function () {
  return Manager.find()
    .then(function (documents) {
      return messageResponse(documents, httpStatus.OK);
    })
    .catch(function (err) {
      return messageResponse(err, httpStatus.UNPROCESSABLE_ENTITY);
    });
};

exports.add = function (app, data) {
  return Manager.create(data)
    .then(function (document) {
      app.use(data.url, dynamicRoutes.init(data));
      return messageResponse(document, httpStatus.CREATED);
    })
    .catch(function (err) {
      return messageResponse(err, httpStatus.UNPROCESSABLE_ENTITY);
    });
};
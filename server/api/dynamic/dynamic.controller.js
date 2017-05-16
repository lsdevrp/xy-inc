var _ = require('lodash');
var Model = require('./dynamic.model');
var httpStatus = require('http-status');

var messageResponse = function (data, statusCode) {
  return {
    data: data,
    statusCode: statusCode
  };
};

exports.init = function(route) {
  var methods = {};
  var dynamicModel = Model.init(route);

  methods.getAll = function() {
    return dynamicModel.find()
      .then(function(documents) {
        return messageResponse(documents, httpStatus.OK);
      })
      .catch(function(err) {
        return messageResponse(err, httpStatus.UNPROCESSABLE_ENTITY);
      });
  };

  methods.add = function(data) {
    return dynamicModel.create(data)
      .then(function (document) {
        return messageResponse(document, httpStatus.CREATED);
      })
      .catch(function (err) {
        return messageResponse(err, httpStatus.UNPROCESSABLE_ENTITY);
      });
  }

  return methods;
};

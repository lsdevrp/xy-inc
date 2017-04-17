var _ = require('lodash');
var Product = require('./product.model');
var httpStatus = require('http-status');

var messageResponse = function (data, statusCode) {
  return {
    data: data,
    statusCode: statusCode
  };
};

exports.getAll = function () {
  return Product.find()
    .then(function (products) {
      return messageResponse(products, httpStatus.OK);
    })
    .catch(function (err) {
      return messageResponse(err, httpStatus.UNPROCESSABLE_ENTITY);
    });
};

exports.getById = function (id) {
  return Product.findById(id)
    .then(function (product) {
      if (!product) { return messageResponse(undefined, httpStatus.NOT_FOUND); }
      return messageResponse(product, httpStatus.OK);
    })
    .catch(function (err) {
      return messageResponse(err, httpStatus.UNPROCESSABLE_ENTITY);
    });
};

exports.add = function (data) {
  return Product.create(data)
    .then(function (product) {
      return messageResponse(product, httpStatus.CREATED);
    })
    .catch(function (err) {
      return messageResponse(err, httpStatus.UNPROCESSABLE_ENTITY);
    });
};

exports.update = function (data, id) {
  var updated;
  return Product.findById(id)
    .then(function (product) {
      if (!product) { return messageResponse(undefined, httpStatus.NOT_FOUND); }
      updated = _.merge(product, data);
      return updated.save()
        .then(function (val) {
          return messageResponse(val, httpStatus.OK);
        });
    })
    .catch(function (err) {
      return messageResponse(err, httpStatus.UNPROCESSABLE_ENTITY);
    });
};

exports.delete = function (id) {
  return Product.findById(id)
    .then(function (product) {
      if (!product) { return messageResponse(undefined, httpStatus.NOT_FOUND); }
      return product.remove()
        .then(function (val) {
          return messageResponse(val, httpStatus.NO_CONTENT);
        });
    })
    .catch(function (err) {
      return messageResponse(err, httpStatus.UNPROCESSABLE_ENTITY);
    });
};

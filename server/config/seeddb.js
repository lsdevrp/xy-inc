'use strict';

var Product = require('../api/product/product.model');

exports.init = function (config) {
  if (config.seedDB) {
    Product.find({}).remove(function () {
      Product.create({
        _id: '58eac59c2ff4211ee495fc6a',
        name: 'test',
        description: 'test',
        price: 10.5,
        category: 'test'
      });
    });
  }
};

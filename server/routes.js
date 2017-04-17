'use strict';

var productRoutes = require('./api/product');

module.exports = function (app) {
  app.use('/products', productRoutes);
};

'use strict';

var _ = require('lodash');
var managerRoutes = require('./api/manager');
var productRoutes = require('./api/product');
var dynamicRoutes = require('./api/dynamic');
var Manager = require('./api/manager/manager.model');

module.exports = function (app) {
  app.use('/products', productRoutes);
  app.use('/manager', managerRoutes.init(app));
  
  Manager.find()
    .then(function (dynamicRoutesList){
      _.forEach(dynamicRoutesList, function(route){    
        app.use(route.url, dynamicRoutes.init(route))
      });      
    });

};
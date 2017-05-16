'use strict';

var _ = require('lodash');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.init = function(route){
    var schemaOptions = {};
    _.forEach(route.fields, function (field){
      schemaOptions[field.name] = { 'type' : field.type };

      if (field.required) {
        schemaOptions[field.name].required = true;
      }

      if (field.unique) {
        schemaOptions[field.name].unique = true;
      }      

    });

  var dynamicSchema = new Schema(schemaOptions);  
  return mongoose.model(route.domain, dynamicSchema);
}



'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManagerSchema = new Schema({
  domain: {
    type : String,
    unique : true,
    required : true
  },
  url: {
    type : String,
    unique : true,
    required : true
  },
  fields: Schema.Types.Mixed
});

module.exports = mongoose.model('Manager', ManagerSchema);

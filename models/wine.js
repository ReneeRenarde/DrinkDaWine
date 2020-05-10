
var orm = require('../config/orm.js');

var wine = {

  selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },

  insertOne: function(wine_name, callback){
    orm.insertOne(wine_name, function(res){
      callback(res);
    });
  },

  updateOne: function(wine_id, callback){
    orm.updateOne(wine_id, function(res){
      callback(res);
    });
  }

};

module.exports = wine;
var orm = require("../config/orm.js");

var burger = {
  all: function(cb){
    orm.all("burgers", function(res){
      cb(res);
    });
  },
  create: function(cols, vals, cb){
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(col, val, cb){
    orm.update("burgers", col, val, function(res) {
      cb(res);
    });
  },
  delete: function(id, cb){
    console.log("hi")
    orm.delete(id, function(res) {
      cb(res);
    });
  }
}

module.exports = burger;
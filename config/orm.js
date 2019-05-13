var conn = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    conn.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    conn.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: function(table, col, val, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += "devoured = " + true;
    queryString += " WHERE ";
    queryString += col + " = " + val;
    conn.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  delete: function(id, cb){
    var queryString = "DELETE FROM burgers WHERE id = ?";
    conn.query(queryString, [id], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
}


module.exports = orm;
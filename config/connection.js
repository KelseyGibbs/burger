var mysql = require("mysql");

if (process.env.JAWSBD_URL) {
  var connection = mysql.createConnection(process.env.JAWSBD_URL) 
} else {
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Batman60101062",
    database: "burgers_db"
  }); }

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

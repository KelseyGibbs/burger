var mysql = require("mysql://b9b3a0eb5f5994:63489a08@us-cdbr-iron-east-02.cleardb.net/heroku_fc492e9ea755ca1?reconnect=true");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Batman60101062",
    database: "burgers_db"
  });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

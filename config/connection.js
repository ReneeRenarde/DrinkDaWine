// Set up MySQL connection
var mysql = require("mysql");

//hide password with the dotenv package
require("dotenv").config();

  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: process.env.MYSQLPASSWORD,
    database: "wines_db"
  });


// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting connection for ORM
module.exports = connection;
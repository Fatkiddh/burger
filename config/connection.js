var mysql = require("mysql");
var env = require("dotenv").config();

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();

// var connection = mysql.createConnection({
//   port: 3306,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: "burger_db"
// });

// connection.connect(function(err){
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

module.exports = connection;

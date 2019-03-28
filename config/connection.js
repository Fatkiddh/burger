var mysql = require("mysql");
var env = require("dotenv").config();

// var connection = mysql.createConnection(process.env.JAWSDB_URL);
//   port: 3306,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: "burger_db"
// });

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: "burger_db"
  });
}

connection.connect(function(err){
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

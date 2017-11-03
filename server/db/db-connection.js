const mysql = require('mysql');                         //import mysql module to use it

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",                                             //credentials for our mysql database
  password: "",
  database: "schoolmanagementsystem"
});

connection.connect((err) => {
  if(err){                                            // if there is an error in connection, return error
    return console.log(err.message);
  }
  console.log("Connected to mysql server");            // otherwise return 'connected to mysql server'
});

module.exports = {connection};                          //exporting module so other modules can import

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "ghostpiss69",
  database: "employees_db"
});

module.export = connection;
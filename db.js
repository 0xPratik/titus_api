const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pratikS@1405",
  database: "polkamusic",
});

module.exports = connection;

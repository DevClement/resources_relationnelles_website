const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  port: 3306,
  user: "clement",
  password: "test12",
  database: "cubes",
  connectionLimit: 10
});

module.exports = pool;

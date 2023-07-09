const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 9000,
  database: "ToDoApp",
  user: "postgres",
  password: "123456789",
});

module.exports = pool;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'relief_system',
  password: 'bakri123gems',
  port: 5432,
});

module.exports = pool;

require("dotenv").config();
const { Pool } = require('pg')

const pool = new Pool({
  user: 'caitlinzhu',
  host: 'localhost',
  database: 'products',
})

pool.connect()

module.exports = pool;
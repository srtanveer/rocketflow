const mysql = require('mysql2/promise')

// Create connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || '103.243.175.186',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'ohddcnbt_root',
  password: process.env.DB_PASSWORD || 'rocket1234567',
  database: process.env.DB_NAME || 'ohddcnbt_adminpanel',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

// Helper to generate CUID-like IDs
function generateId() {
  return 'c' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
}

module.exports = { pool, generateId }

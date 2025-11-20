/**
 * Database Connection Test Script
 * Run this to diagnose MySQL connection issues
 * 
 * Usage: node scripts/test-db-connection.js
 */

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') })
const mysql = require('mysql2/promise')

const DATABASE_URL = process.env.DATABASE_URL

console.log('🔍 Testing Database Connection...\n')

// Parse connection string
function parseConnectionString(url) {
  // mysql://user:password@host:port/database
  const match = url.match(/mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
  
  if (!match) {
    console.error('❌ Invalid DATABASE_URL format')
    console.log('Expected format: mysql://user:password@host:port/database')
    process.exit(1)
  }

  return {
    user: match[1],
    password: match[2],
    host: match[3],
    port: parseInt(match[4]),
    database: match[5]
  }
}

async function testConnection() {
  const config = parseConnectionString(DATABASE_URL)
  
  console.log('📋 Connection Details:')
  console.log('  Host:', config.host)
  console.log('  Port:', config.port)
  console.log('  Database:', config.database)
  console.log('  User:', config.user)
  console.log('  Password:', '*'.repeat(config.password.length))
  console.log()

  try {
    console.log('⏳ Step 1: Testing network connectivity to host...')
    
    // Test basic connection
    const connection = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      connectTimeout: 10000
    })
    
    console.log('✅ Network connection successful!')
    
    console.log('⏳ Step 2: Testing database access...')
    
    // Test database selection
    await connection.query(`USE \`${config.database}\``)
    console.log(`✅ Database '${config.database}' accessible!`)
    
    console.log('⏳ Step 3: Testing query execution...')
    
    // Test query
    const [rows] = await connection.query('SELECT 1 as test')
    console.log('✅ Query execution successful!')
    
    console.log('⏳ Step 4: Checking tables...')
    
    // Check tables
    const [tables] = await connection.query('SHOW TABLES')
    console.log(`✅ Found ${tables.length} tables:`)
    tables.forEach(table => {
      const tableName = Object.values(table)[0]
      console.log(`   - ${tableName}`)
    })
    
    await connection.end()
    
    console.log('\n✅ ALL TESTS PASSED! Database connection is working.')
    console.log('\n🎯 Next step: Run `npm run prisma:generate` to generate Prisma client')
    
  } catch (error) {
    console.log('\n❌ CONNECTION FAILED!\n')
    
    // Detailed error analysis
    if (error.code === 'ECONNREFUSED') {
      console.error('🚫 Connection Refused')
      console.log('Possible causes:')
      console.log('  1. MySQL service is not running on the VPS')
      console.log('  2. Firewall is blocking port', config.port)
      console.log('  3. MySQL is not configured to accept connections on', config.host)
      console.log('\nSolutions:')
      console.log('  - Check MySQL service: systemctl status mysql')
      console.log('  - Check firewall: ufw status')
      console.log('  - Check MySQL bind-address in my.cnf (should be 0.0.0.0 or your VPS IP)')
      
    } else if (error.code === 'ETIMEDOUT') {
      console.error('⏱️  Connection Timeout')
      console.log('Possible causes:')
      console.log('  1. VPS firewall blocking MySQL port', config.port)
      console.log('  2. cPanel firewall restrictions')
      console.log('  3. Network issues between your machine and VPS')
      console.log('\nSolutions:')
      console.log('  - Add your IP to cPanel Remote MySQL Access Hosts')
      console.log('  - Check VPS firewall rules')
      console.log('  - Try connecting from VPS itself (ssh then mysql -u user -p)')
      
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('🔐 Access Denied')
      console.log('Possible causes:')
      console.log('  1. Incorrect username or password')
      console.log('  2. User does not have permission from your IP')
      console.log('  3. User does not exist')
      console.log('\nSolutions:')
      console.log('  - Verify credentials in cPanel → MySQL Databases')
      console.log('  - Check Remote MySQL Access Hosts in cPanel')
      console.log('  - Grant permissions: GRANT ALL ON database.* TO user@host')
      
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.error('🗄️  Database Not Found')
      console.log('Possible causes:')
      console.log('  1. Database name is incorrect')
      console.log('  2. Database does not exist')
      console.log('\nSolutions:')
      console.log('  - Check database name in cPanel → MySQL Databases')
      console.log('  - Verify spelling and case sensitivity')
      console.log('  - Create database if it does not exist')
      
    } else {
      console.error('⚠️  Unknown Error')
      console.log('Error details:')
      console.log('  Code:', error.code)
      console.log('  Message:', error.message)
    }
    
    console.log('\n📝 Full error:')
    console.error(error)
    
    process.exit(1)
  }
}

// Check if DATABASE_URL exists
if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set in .env file')
  console.log('\nPlease create a .env file with:')
  console.log('DATABASE_URL="mysql://user:password@host:port/database"')
  process.exit(1)
}

testConnection()

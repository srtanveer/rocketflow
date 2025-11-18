/**
 * Create Database Tables Script
 * Automatically creates User, Post, and Tutorial tables
 * 
 * Usage: node scripts/create-tables.js
 */

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') })
const mysql = require('mysql2/promise')

async function createTables() {
  console.log('🔧 Creating database tables...\n')
  
  let connection
  
  try {
    // Create connection (use nullish coalescing so empty strings are honored)
    const dbConfig = {
      host: process.env.DB_HOST ?? '103.243.175.186',
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
      user: process.env.DB_USER ?? 'ohddcnbt_root',
      password: process.env.DB_PASSWORD ?? '',
      database: process.env.DB_NAME ?? 'ohddcnbt_adminpanel'
    }

    connection = await mysql.createConnection(dbConfig)
    
    console.log('✅ Connected to database\n')
    
    // Create User table
    console.log('📝 Creating User table...')
    await connection.query(`
      CREATE TABLE IF NOT EXISTS \`User\` (
        \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
        \`email\` VARCHAR(191) NOT NULL UNIQUE,
        \`password\` VARCHAR(255) NOT NULL,
        \`name\` VARCHAR(255) DEFAULT NULL,
        \`role\` VARCHAR(50) NOT NULL DEFAULT 'admin',
        \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        INDEX \`idx_email\` (\`email\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log('✅ User table created\n')
    
    // Create Post table
    console.log('📝 Creating Post table...')
    await connection.query(`
      CREATE TABLE IF NOT EXISTS \`Post\` (
        \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
        \`slug\` VARCHAR(255) NOT NULL UNIQUE,
        \`title\` VARCHAR(500) NOT NULL,
        \`excerpt\` TEXT,
        \`content\` LONGTEXT,
        \`featuredImage\` VARCHAR(500) DEFAULT NULL,
        \`date\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        \`author\` VARCHAR(255) NOT NULL DEFAULT 'Admin',
        \`tags\` JSON NOT NULL DEFAULT ('[]'),
        \`views\` INT NOT NULL DEFAULT 0,
        \`likes\` INT NOT NULL DEFAULT 0,
        \`service\` VARCHAR(255) DEFAULT NULL,
        INDEX \`idx_slug\` (\`slug\`),
        INDEX \`idx_date\` (\`date\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log('✅ Post table created\n')
    
    // Create Tutorial table
    console.log('📝 Creating Tutorial table...')
    await connection.query(`
      CREATE TABLE IF NOT EXISTS \`Tutorial\` (
        \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
        \`slug\` VARCHAR(255) NOT NULL UNIQUE,
        \`title\` VARCHAR(500) NOT NULL,
        \`excerpt\` TEXT,
        \`content\` LONGTEXT,
        \`date\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        \`author\` VARCHAR(255) NOT NULL DEFAULT 'Admin',
        \`tags\` JSON NOT NULL DEFAULT ('[]'),
        \`videoUrl\` VARCHAR(500) DEFAULT NULL,
        \`steps\` JSON NOT NULL DEFAULT ('[]'),
        INDEX \`idx_slug\` (\`slug\`),
        INDEX \`idx_date\` (\`date\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log('✅ Tutorial table created\n')

    // Create Package table
    console.log('📝 Creating Package table...')
    await connection.query(`
      CREATE TABLE IF NOT EXISTS \`Package\` (
        \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
        \`slug\` VARCHAR(255) NOT NULL UNIQUE,
        \`name\` VARCHAR(255) NOT NULL,
        \`description\` TEXT,
        \`monthly_price\` DECIMAL(10,2) DEFAULT NULL,
        \`yearly_price\` DECIMAL(10,2) DEFAULT NULL,
        \`is_popular\` TINYINT(1) DEFAULT 0,
        \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        INDEX \`idx_package_slug\` (\`slug\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log('✅ Package table created\n')

    // Create Feature table
    console.log('📝 Creating Feature table...')
    await connection.query(`
      CREATE TABLE IF NOT EXISTS \`Feature\` (
        \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
        \`name\` VARCHAR(255) NOT NULL,
        \`description\` TEXT,
        \`default_price\` DECIMAL(10,2) DEFAULT NULL,
        \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        INDEX \`idx_feature_name\` (\`name\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log('✅ Feature table created\n')

    // Create PackageFeature join table
    console.log('📝 Creating PackageFeature table...')
    await connection.query(`
      CREATE TABLE IF NOT EXISTS \`PackageFeature\` (
        \`id\` VARCHAR(191) NOT NULL PRIMARY KEY,
        \`package_id\` VARCHAR(191) NOT NULL,
        \`feature_id\` VARCHAR(191) NOT NULL,
        \`included\` TINYINT(1) NOT NULL DEFAULT 1,
        \`feature_price\` DECIMAL(10,2) DEFAULT NULL,
        \`position\` INT DEFAULT 0,
        \`createdAt\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        UNIQUE KEY \`ux_pkg_feature\` (\`package_id\`, \`feature_id\`),
        INDEX \`idx_package\` (\`package_id\`),
        INDEX \`idx_feature\` (\`feature_id\`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `)
    console.log('✅ PackageFeature table created\n')
    
    // Verify tables exist
    console.log('🔍 Verifying tables...')
    const [tables] = await connection.query('SHOW TABLES')
    console.log(`✅ Found ${tables.length} tables:`)
    tables.forEach(table => {
      const tableName = Object.values(table)[0]
      console.log(`   - ${tableName}`)
    })
    
    console.log('\n🎉 All tables created successfully!')
    console.log('\n🚀 Next step: Start the server with `npm run dev`')
    
  } catch (error) {
    console.error('\n❌ Error creating tables:', error.message)
    console.error('\nFull error:', error)
    process.exit(1)
  } finally {
    if (connection) {
      await connection.end()
    }
  }
}

createTables()

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') })
const mysql = require('mysql2/promise')

async function main() {
  const rootConfig = {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
  }

  const dbName = process.env.DB_NAME || 'adminpanel'
  const newUser = 'rocket_user'
  const newPass = 'Rf!2025_dev$Nw7'

  let conn
  try {
    conn = await mysql.createConnection(rootConfig)
    console.log('Connected as root, running setup...')

    await conn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`)
    console.log(`Ensured database: ${dbName}`)

    // Create user and set authentication plugin explicitly
    await conn.query(`CREATE USER IF NOT EXISTS \`${newUser}\`@'localhost' IDENTIFIED WITH mysql_native_password BY ?`, [newPass])
    await conn.query(`GRANT ALL PRIVILEGES ON \`${dbName}\`.* TO \`${newUser}\`@'localhost'`)
    await conn.query('FLUSH PRIVILEGES')

    const [rows] = await conn.query("SELECT user, host, plugin FROM mysql.user WHERE user = ?", [newUser])
    console.log('User entry:')
    console.table(rows)

    console.log(`\n✅ Created user '${newUser}' and granted privileges on '${dbName}'.`)
    console.log('Update server/.env to use this user and password if desired.')
  } catch (err) {
    console.error('Error creating DB user:', err)
    process.exit(1)
  } finally {
    if (conn) await conn.end()
  }
}

main()

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') })
const { pool, generateId } = require('../src/db')
const bcrypt = require('bcryptjs')

async function main() {
  console.log('🌱 Seeding database...\n')
  
  try {
    // create admin user if not exists
    const email = process.env.SEED_ADMIN_EMAIL || 'admin@rocketflow.test'
    const password = process.env.SEED_ADMIN_PASSWORD || 'password123'
    
    const [existingUsers] = await pool.query('SELECT * FROM User WHERE email = ?', [email])
    
    if (existingUsers.length === 0) {
      const hashed = await bcrypt.hash(password, 10)
      const userId = generateId()
      const createdAt = new Date()
      
      await pool.query(
        'INSERT INTO User (id, email, password, name, role, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
        [userId, email, hashed, 'Admin', 'admin', createdAt]
      )
      console.log('✅ Created admin user:', email)
      console.log('   Password:', password)
    } else {
      console.log('ℹ️  Admin user already exists:', email)
    }

    // create a sample post if none exist
    const [posts] = await pool.query('SELECT COUNT(*) as count FROM Post')
    const postCount = posts[0].count
    
    if (postCount === 0) {
      const postId = generateId()
      const date = new Date()
      const tags = JSON.stringify(['welcome', 'intro'])
      
      await pool.query(
        'INSERT INTO Post (id, slug, title, excerpt, content, featuredImage, date, author, tags, views, likes, service) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          postId,
          'welcome-to-rocketflow',
          'Welcome to RocketFlow',
          'A short introduction to RocketFlow',
          '<p>Welcome! This is a seeded post. Add content via the admin dashboard.</p>',
          '',
          date,
          'Admin',
          tags,
          0,
          0,
          null
        ]
      )
      console.log('✅ Created sample post: welcome-to-rocketflow')
    } else {
      console.log('ℹ️  Posts already exist, skipping sample post creation')
    }
    
    // create a sample tutorial if none exist
    const [tutorials] = await pool.query('SELECT COUNT(*) as count FROM Tutorial')
    const tutorialCount = tutorials[0].count
    
    if (tutorialCount === 0) {
      const tutorialId = generateId()
      const date = new Date()
      const tags = JSON.stringify(['getting-started'])
      const steps = JSON.stringify([
        'Log in to the admin dashboard',
        'Navigate to Posts or Tutorials',
        'Click "Create New"',
        'Fill in the details and publish'
      ])
      
      await pool.query(
        'INSERT INTO Tutorial (id, slug, title, excerpt, content, date, author, tags, videoUrl, steps) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          tutorialId,
          'getting-started-with-rocketflow',
          'Getting Started with RocketFlow',
          'Learn how to create your first post',
          '<p>This tutorial will guide you through creating your first post in RocketFlow.</p>',
          date,
          'Admin',
          tags,
          null,
          steps
        ]
      )
      console.log('✅ Created sample tutorial: getting-started-with-rocketflow')
    } else {
      console.log('ℹ️  Tutorials already exist, skipping sample tutorial creation')
    }

    // --- Seed Features ---
    const [featuresCountRes] = await pool.query('SELECT COUNT(*) as count FROM Feature')
    const featuresCount = featuresCountRes[0].count

    if (featuresCount === 0) {
      console.log('\n📝 Seeding default features...')
      const now = new Date()
      const defaultFeatures = [
        { name: 'Auto Feed - WordPress Feed Post', description: '' },
        { name: 'Auto Feed - YouTube Video Post', description: '' },
        { name: 'Bot', description: '' },
        { name: 'Bot - AI Reply', description: '' },
        { name: 'Bot - Connectivity : Export, Import & Tree View', description: '' },
        { name: 'Bot - Connectivity : JSON API', description: '' },
        { name: 'Bot - Connectivity : Webview Builder', description: '' },
        { name: 'Bot - Email Auto Responder', description: '' },
        { name: 'Bot - Enhancers : Broadcast : Subscriber Bulk Message Send', description: '' }
      ]

      for (const f of defaultFeatures) {
        const fid = generateId()
        await pool.query(
          'INSERT INTO Feature (id, name, description, default_price, createdAt) VALUES (?, ?, ?, ?, ?)',
          [fid, f.name, f.description || null, null, now]
        )
        console.log('  ➕ Feature created:', f.name)
      }
    } else {
      console.log('\nℹ️  Features already exist, skipping feature seeding')
    }

    // --- Seed Packages and PackageFeature links ---
    const [packagesCountRes] = await pool.query('SELECT COUNT(*) as count FROM Package')
    const packagesCount = packagesCountRes[0].count

    if (packagesCount === 0) {
      console.log('\n📝 Seeding default packages...')
      const now = new Date()

      // create a sample Ultimate package
      const pkgId = generateId()
      await pool.query(
        'INSERT INTO Package (id, slug, name, description, monthly_price, yearly_price, is_popular, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [pkgId, 'ultimate', 'Ultimate', 'All features included', 7.00, 7.00 * 30, 1, now]
      )
      console.log('  ➕ Package created: Ultimate')

      // Link all existing features to Ultimate package as included
      const [allFeatures] = await pool.query('SELECT id FROM Feature')
      for (let i = 0; i < allFeatures.length; i++) {
        const pfId = generateId()
        const featureId = allFeatures[i].id
        await pool.query(
          'INSERT INTO PackageFeature (id, package_id, feature_id, included, feature_price, position, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [pfId, pkgId, featureId, 1, null, i + 1, now]
        )
      }
      console.log('  ➕ Linked features to Ultimate package')
    } else {
      console.log('\nℹ️  Packages already exist, skipping package seeding')
    }
    
    console.log('\n🎉 Seeding complete!')
    
  } catch (error) {
    console.error('\n❌ Error during seeding:', error.message)
    throw error
  } finally {
    await pool.end()
  }
}

main().then(() => {
  console.log('\n✅ Database connection closed')
  process.exit(0)
}).catch((err) => {
  console.error('\n❌ Seed failed:', err)
  process.exit(1)
})


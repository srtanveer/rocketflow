require('dotenv').config()
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


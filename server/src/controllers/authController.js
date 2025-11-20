const { pool, generateId } = require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' })
    
    const [rows] = await pool.query('SELECT * FROM User WHERE email = ?', [email])
    const user = rows[0]
    
    if (!user) {
      console.warn(`Auth: login failed - user not found for email=${email}`)
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    
    const ok = await bcrypt.compare(password, user.password)
    if (!ok) {
      console.warn(`Auth: login failed - incorrect password for email=${email}`)
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' })
    res.json({ token })
  } catch (err) {
    console.error('Login error:', err)
    return res.status(500).json({ error: 'Login failed. Please try again.' })
  }
}

exports.signup = async (req, res) => {
  try {
    const { email, password, name } = req.body
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' })
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }
    
    // Validate password strength
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' })
    }
    
    const [existing] = await pool.query('SELECT * FROM User WHERE email = ?', [email])
    if (existing.length > 0) {
      console.warn(`Auth: signup failed - user already exists email=${email}`)
      return res.status(409).json({ error: 'User already exists' })
    }
    
    const hashed = await bcrypt.hash(password, 10)
    const id = generateId()
    const createdAt = new Date()
    
    await pool.query(
      'INSERT INTO User (id, email, password, name, role, createdAt) VALUES (?, ?, ?, ?, ?, ?)',
      [id, email, hashed, name || null, 'admin', createdAt]
    )
    
    const token = jwt.sign({ id, email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '8h' })
    res.json({ token })
  } catch (err) {
    console.error('Signup error:', err)
    return res.status(500).json({ error: 'Signup failed. Please try again.' })
  }
}

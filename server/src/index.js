const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const logger = require('./middleware/logger')

dotenv.config()

const app = express()

// Request logging
if (process.env.NODE_ENV !== 'production') {
  app.use(logger)
}

// Enhanced CORS configuration
const allowedOrigins = [
  'https://beta.rocketflow.biz',
  'https://www.beta.rocketflow.biz',
  'https://api.beta.rocketflow.biz',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://127.0.0.1:3000'
]

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, or curl)
    if (!origin) return callback(null, true)
    
    // In development, allow all origins
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true)
    }
    
    // In production, check against allowed origins
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      console.warn('CORS blocked origin:', origin)
      callback(null, false)
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// attach routes
const authRoutes = require('./routes/auth')
const postsRoutes = require('./routes/posts')
const tutorialsRoutes = require('./routes/tutorials')
const uploadsRoutes = require('./routes/uploads')
const packagesRoutes = require('./routes/packages')
const featuresRoutes = require('./routes/features')
const pricingRoutes = require('./routes/pricing')
const adminRoutes = require('./routes/admin')

// Routes with /api prefix (standard)
app.use('/api/auth', authRoutes)
app.use('/api/posts', postsRoutes)
app.use('/api/tutorials', tutorialsRoutes)
app.use('/api/uploads', uploadsRoutes)
app.use('/api/admin/packages', packagesRoutes)
app.use('/api/admin/features', featuresRoutes)
app.use('/api/pricing', pricingRoutes)
// grouped admin router (keeps same endpoints and adds a grouped mount)
app.use('/api/admin', adminRoutes)

// Routes without /api prefix (for backward compatibility)
app.use('/auth', authRoutes)
app.use('/posts', postsRoutes)
app.use('/tutorials', tutorialsRoutes)
app.use('/uploads', uploadsRoutes)
app.use('/admin/packages', packagesRoutes)
app.use('/admin/features', featuresRoutes)
app.use('/pricing', pricingRoutes)
// grouped admin router for backward compatibility
app.use('/admin', adminRoutes)

// Health check endpoints
app.get('/api/health', (req, res) => res.json({ ok: true, ts: Date.now(), env: process.env.NODE_ENV || 'development' }))
app.get('/health', (req, res) => res.json({ ok: true, ts: Date.now(), env: process.env.NODE_ENV || 'development' }))

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err)
  res.status(err.status || 500).json({ 
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Admin API listening on ${port}`))

module.exports = app

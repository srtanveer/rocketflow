const jwt = require('jsonwebtoken')

function requireAuth(req, res, next) {
  const auth = req.headers.authorization || ''
  if (!auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Authorization required' })
  const token = auth.slice(7)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

function requireAdmin(req, res, next) {
  if (!req.user) return res.status(401).json({ error: 'Authorization required' })
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin role required' })
  next()
}

module.exports = { requireAuth, requireAdmin }

// Simple request logger middleware
function logger(req, res, next) {
  const start = Date.now()
  
  // Log request
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`)
  
  // Log response when finished
  res.on('finish', () => {
    const duration = Date.now() - start
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`)
  })
  
  next()
}

module.exports = logger

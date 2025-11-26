const express = require('express')
const router = express.Router()

// admin sub-routers
const pricingRoutes = require('./adminPricing')

// mount pricing admin routes
router.use('/pricing', pricingRoutes)

module.exports = router

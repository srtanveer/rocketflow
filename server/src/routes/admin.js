const express = require('express')
const router = express.Router()

// admin sub-routers
const packagesRoutes = require('./packages')
const featuresRoutes = require('./features')

// mount package and feature admin routes
router.use('/packages', packagesRoutes)
router.use('/features', featuresRoutes)

module.exports = router

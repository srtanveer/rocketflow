const express = require('express')
const router = express.Router()
const { getPricing } = require('../controllers/pricingController')

// Public pricing endpoint
router.get('/', getPricing)

module.exports = router

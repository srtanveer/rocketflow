const express = require('express')
const router = express.Router()
const { requireAuth, requireAdmin } = require('../middleware/auth')
const {
    getAllPricingPlans,
    createPricingPlan,
    updatePricingPlan,
    deletePricingPlan,
    getAllFeatures
} = require('../controllers/adminPricingController')

// All routes require authentication and admin role
router.use(requireAuth, requireAdmin)

// Pricing plans management
router.get('/plans', getAllPricingPlans)
router.post('/plans', createPricingPlan)
router.put('/plans/:id', updatePricingPlan)
router.delete('/plans/:id', deletePricingPlan)

// Get all features (for dropdown/selection)
router.get('/features', getAllFeatures)

module.exports = router

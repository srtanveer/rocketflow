const express = require('express')
const router = express.Router()
const { requireAuth, requireAdmin } = require('../middleware/auth')
const {
    getAllPricingPlans,
    createPricingPlan,
    updatePricingPlan,
    deletePricingPlan,
    getAllFeatures,
    createPricingFeature,
    updatePricingFeature,
    deletePricingFeature
} = require('../controllers/adminPricingController')

// All routes require authentication and admin role
router.use(requireAuth, requireAdmin)

// Pricing plans management
router.get('/plans', getAllPricingPlans)
router.post('/plans', createPricingPlan)
router.put('/plans/:id', updatePricingPlan)
router.delete('/plans/:id', deletePricingPlan)

// Features management
router.get('/features', getAllFeatures)
router.post('/features', createPricingFeature)
router.put('/features/:id', updatePricingFeature)
router.delete('/features/:id', deletePricingFeature)

module.exports = router

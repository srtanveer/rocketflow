const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/packagesController')
const { requireAuth, requireAdmin } = require('../middleware/auth')

// Admin routes (protected)
router.get('/', requireAuth, requireAdmin, ctrl.list)
router.get('/:id', requireAuth, requireAdmin, ctrl.get)
router.get('/:id/details', requireAuth, requireAdmin, ctrl.getWithFeatures)
router.get('/:id/features', requireAuth, requireAdmin, ctrl.listFeatures)
router.post('/', requireAuth, requireAdmin, ctrl.create)
router.put('/:id', requireAuth, requireAdmin, ctrl.update)
router.delete('/:id', requireAuth, requireAdmin, ctrl.remove)
router.post('/:id/features', requireAuth, requireAdmin, ctrl.upsertFeature)
router.delete('/:id/features/:featureId', requireAuth, requireAdmin, ctrl.removeFeature)

module.exports = router

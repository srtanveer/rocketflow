const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/featuresController')
const { requireAuth, requireAdmin } = require('../middleware/auth')

// Admin routes (protected)
router.get('/', requireAuth, requireAdmin, ctrl.list)
router.get('/:id', requireAuth, requireAdmin, ctrl.get)
router.post('/', requireAuth, requireAdmin, ctrl.create)
router.put('/:id', requireAuth, requireAdmin, ctrl.update)
router.delete('/:id', requireAuth, requireAdmin, ctrl.remove)

module.exports = router

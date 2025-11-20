const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/tutorialsController')
const { requireAuth, requireAdmin } = require('../middleware/auth')

// Public
router.get('/', ctrl.list)
router.get('/:slug', ctrl.get)

// Admin-protected
router.post('/', requireAuth, requireAdmin, ctrl.create)
router.put('/:slug', requireAuth, requireAdmin, ctrl.update)
router.delete('/:slug', requireAuth, requireAdmin, ctrl.remove)

module.exports = router

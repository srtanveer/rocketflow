const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/authController')

router.post('/login', ctrl.login)
router.post('/signup', ctrl.signup)

module.exports = router

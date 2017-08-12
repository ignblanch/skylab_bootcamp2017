const express = require('express')
const router = express.Router()

// ------------ HANDLERS -------------------
const landLogic = require('./handlers/landLogic')
const renderLogin = require('./handlers/renderLogin')
const loginLogic = require('./handlers/loginLogic')
const renderSignup = require('./handlers/renderSignup')
const signupLogic = require('./handlers/signupLogic')
const doLogout = require('./handlers/doLogout.js')
const unauthLogic = require('./handlers/unauthLogic')

// ------------ ROUTES -------------------
router.get('/', landLogic)
router.get('/login', renderLogin)
router.post('/login', loginLogic)
router.get('/signup', renderSignup)
router.post('/signup', signupLogic)
router.get('/logout', doLogout)
router.get('/unauth', unauthLogic)

module.exports = router

const express = require('express')
const router = express.Router()

// ------------ HANDLERS -------------------
const renderCompleted = require('./handlers/renderCompleted')
const deleteCompleted = require('./handlers/deleteCompleted')
const completeAll = require('./handlers/completeAll')

// ------------ ROUTES -------------------
router.get('/completed', renderCompleted)
router.delete('/completed/:position', deleteCompleted)
router.post('/completed', completeAll)

module.exports = router

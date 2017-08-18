const express = require('express')
const router = express.Router()

const addTask = require('./handlers/addTask')
const getTasks = require('./handlers/getTasks')
const completeSelected = require('./handlers/completeSelected')

router.post('/', addTask)
router.get('/', getTasks)
router.put('/:selection', completeSelected)

module.exports = router

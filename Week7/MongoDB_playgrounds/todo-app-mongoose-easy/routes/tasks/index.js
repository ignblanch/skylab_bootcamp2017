const express = require('express')
const router = express.Router()

const addTask = require('./handlers/addTask')
const getTasks = require('./handlers/getTasks')
const completeAll = require('./handlers/completeAll')

router.post('/', addTask)
router.get('/', getTasks)
router.put('/', completeAll)

module.exports = router

const express = require('express')
const router = express.Router()

const removeTask = require('./handlers/removeTask')
const completeTask = require('./handlers/completeTask')
const changeTitle = require('./handlers/changeTitle')

router.delete('/:id', removeTask)
router.put('/:id', completeTask)
router.post('/:id/:newTitle', changeTitle)

module.exports = router

const express = require('express')
const router = express.Router()

const getCompleted = require('./handlers/getCompleted')

router.get('/', getCompleted)

module.exports = router

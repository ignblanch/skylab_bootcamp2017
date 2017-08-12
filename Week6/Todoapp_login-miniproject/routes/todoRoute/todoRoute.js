const express = require('express')
const router = express.Router()

// ------------ HANDLERS -------------------
const renderTodos = require('./handlers/renderTodos')
const addTodo = require('./handlers/addTodo')
const completeTodo = require('./handlers/completeTodo')
const renameTodo = require('./handlers/renameTodo')
const deleteTodo = require('./handlers/deleteTodo')

// ------------ ROUTES -------------------
router.get('/todos', renderTodos)
router.post('/todos', addTodo)
router.post('/todos/:position', completeTodo)
router.put('/todos/:position', renameTodo)
router.delete('/todos/:position', deleteTodo)

module.exports = router

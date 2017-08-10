const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('pages/index', {todos: req.session.todos})
})

router.post('/todos', (req, res) => {
  req.session.todos.push({title: req.body.todo, date: new Date()})
  // req.body.todo=> comes from 'name' attr in input in index when we submit the form. Action points to this route
  res.redirect('/')
})

router.post('/todos/:position', (req, res) => {
  req.session.completed.push({title: req.session.todos[req.params.position].title, date: new Date()})
  req.session.todos.splice(req.params.position, 1)
  res.status(200).send('Item marked as completed')
})

router.put('/todos/:position', (req, res) => {
  req.session.todos[req.params.position].title = req.body.title // comes from data object passed by the ajax call
  res.status(200).send('Todo has been changed')
})

router.delete('/todos/:position', (req, res) => {
  req.session.todos.splice(req.params.position, 1)
  res.status(200).send('Item removed')
})

module.exports = router

const express = require('express')
const router = express.Router()

router.get('/completed', (req, res) => {
  res.render('pages/completed', {completed: req.session.completed})
})

router.delete('/completed/:position', (req, res) => {
  req.session.completed.splice(req.params.position, 1)
  res.status(200).send('Item removed')
})

router.post('/completed', (req, res) => {
  req.session.todos.map(item => req.session.completed.push(item))
  req.session.todos = []
  res.status(200).send('All items completed')
})

module.exports = router

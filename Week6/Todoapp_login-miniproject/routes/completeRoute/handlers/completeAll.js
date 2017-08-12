function completeAll (req, res) {
  req.session.todos.map(item => req.session.completed.push(item))
  req.session.todos = []
  res.status(200).send('All items completed')
}

module.exports = completeAll

function completeTodo (req, res) {
  req.session.completed.push({title: req.session.todos[req.params.position].title, date: new Date()})
  req.session.todos.splice(req.params.position, 1)
  res.status(200).send('Item marked as completed')
}

module.exports = completeTodo

function addTodo (req, res) {
  req.session.todos.push({title: req.body.todo, date: new Date()})
  res.redirect('/todos')
}

module.exports = addTodo

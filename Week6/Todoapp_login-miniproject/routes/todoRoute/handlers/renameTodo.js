function renameTodo (req, res) {
  req.session.todos[req.params.position].title = req.body.title
  res.status(200).send('Todo has been changed')
}

module.exports = renameTodo

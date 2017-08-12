function deleteTodo (req, res) {
  req.session.todos.splice(req.params.position, 1)
  res.status(200).send('Item removed')
}

module.exports = deleteTodo

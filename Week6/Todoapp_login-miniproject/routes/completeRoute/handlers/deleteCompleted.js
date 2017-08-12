function deleteCompleted (req, res) {
  req.session.completed.splice(req.params.position, 1)
  res.status(200).send('Item removed')
}

module.exports = deleteCompleted

const Task = require('../../../models/Task')

function changeTitle (req, res) {
  const { id, newTitle } = req.params
  Task.findByIdAndUpdate(id, {title: newTitle})
    .then(res.send(`task with id ${id} marked as completed`))
    .catch(() => res.send(`FAIL!! Task w/ id ${id} was NOT removed`))
}

module.exports = changeTitle

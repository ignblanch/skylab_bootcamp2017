const Task = require('../../../models/Task')

function completeTask (req, res) {
  const { id } = req.params
  Task.findByIdAndUpdate(id, {done: true})
    .then(res.send(`task with id ${id} marked as completed`))
    .catch(() => res.send(`FAIL!! Task w/ id ${id} was NOT removed`))
}

module.exports = completeTask

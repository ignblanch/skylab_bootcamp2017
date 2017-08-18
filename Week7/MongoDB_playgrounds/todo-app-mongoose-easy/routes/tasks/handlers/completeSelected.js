const Task = require('../../../models/Task')

function completeSelected (req, res) {
  const {selection} = req.params
  let aSelection = selection.split(',')
  console.log(aSelection)

  Task.update({ _id: { $in: aSelection } },
    {$set: { done: true }}, {multi: true})
    .then(res.send('tasks marked as complete'))
}

module.exports = completeSelected

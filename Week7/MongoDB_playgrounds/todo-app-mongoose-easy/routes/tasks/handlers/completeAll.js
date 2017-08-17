const Task = require('../../../models/Task')

function completeAll (req, res) {
  Task.update({}, {done: true}, {multi: true})
    .then(res.send('all tasks complete'))
}

module.exports = completeAll

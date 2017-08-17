const Task = require('../../../models/Task')

function getTasks (req, res) {
  Task.find()
    .then(data => res.render('pages/completed', { tasks: data }))
}

module.exports = getTasks

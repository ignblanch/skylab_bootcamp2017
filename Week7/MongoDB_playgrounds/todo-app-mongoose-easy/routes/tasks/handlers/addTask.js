const Task = require('../../../models/Task')

function addTask (req, res) {
  const { title } = req.body
  const task = new Task({ title })

  task.save()
    // .then(() => res.send(`Added task 👉 ${title}`))
    .then(tasks => res.redirect('/tasks'))
}

module.exports = addTask

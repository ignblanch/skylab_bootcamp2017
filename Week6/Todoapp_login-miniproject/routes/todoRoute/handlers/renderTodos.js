const writeFile = require('../../utils/writeFile')

function renderTodos (req, res) {
  if (req.session.logged) {
    res.render('todos', { logged: req.session.logged, todos: req.session.todos })
    writeFile(req.session.logged, req) // update data file
  } else {
    res.redirect('/')
  }
}

module.exports = renderTodos

const writeFile = require('../../utils/writeFile')

function renderCompleted (req, res) {
  if (req.session.logged) {
    res.render('completed', {completed: req.session.completed})
    writeFile(req.session.logged, req) // update data file
  } else {
    res.redirect('/')
  }
}

module.exports = renderCompleted

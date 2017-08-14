const fs = require('fs')

function landLogic (req, res) {
  if (!req.session.logged) {
    res.redirect('/login')
  } else {
    const fileName = `assets/user-data/${req.session.logged}.json`
    let data = fs.readFileSync(fileName, 'utf-8')
    data = JSON.parse(data)
    req.session.todos = data.todos
    req.session.completed = data.completed
      // update data from file if we are logged in correctly before going to todos
    res.redirect('/todos')
  }
}

module.exports = landLogic

const fs = require('fs')

function writeFile (user, req) {
  let todos = JSON.stringify(req.session.todos)
  let completed = JSON.stringify(req.session.completed)
  let text = `{"todos": ${todos}, "completed": ${completed}}`
  fs.writeFileSync(`assets/user-data/${user}.json`, text)
}

module.exports = writeFile

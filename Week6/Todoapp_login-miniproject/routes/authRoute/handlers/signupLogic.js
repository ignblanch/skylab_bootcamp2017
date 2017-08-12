const fs = require('fs')
const writeFile = require('../../utils/writeFile.js')

function signupLogic (req, res) {
  let username = req.body.username
  let password = req.body.password
  let newUser = '\r\n' + username + ':' + password
  fs.appendFile('assets/users.txt', newUser, (err) => {
    if (err) throw err
    console.log('user saved correctly')
  })
  writeFile(username, req) // create user file
  res.redirect('/login')
}

module.exports = signupLogic

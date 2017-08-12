const fs = require('fs')

function loginLogic (req, res) {
  let usersList = fs.readFileSync('assets/users.txt').toString().split('\n')
  let {username, password} = req.body
  if (usersList.some(item => item === `${username}:${password}`)) {
    req.session.logged = username
  } else {
    req.session.logged = ''
  }
  req.session.logged ? res.redirect('/') : res.redirect('/unauth')
}

module.exports = loginLogic

const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res) => {
  if (!req.session.logged) {
    res.redirect('/login')
  } else {
    res.render('welcome', { logged: req.session.logged })
  }
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  fs.readFile('assets/users.txt', 'utf-8', (err, data) => {
    req.session.users = data.split('\n')
    if (err) throw err
    let {username, password} = req.body
    if (req.session.users.some(item => item === `${username}:${password}`)) {
      req.session.logged = username
    } else {
      req.session.logged = null
    }
    req.session.logged ? res.redirect('/') : res.redirect('/unauth')
  })
})

router.post('/signup', (req, res) => {
  let newUser = `${req.body.username}:${req.body.password}`
  req.session.users.push(newUser)
  var text = ''
  req.session.users.forEach(user => { text += user + '\n' })
  fs.writeFile('assets/users.txt', text, (err) => {
    if (err) throw err
  })
  res.redirect('/login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/logout', (req, res) => {
  req.session.logged = null
  res.render('logout')
})

router.get('/unauth', (req, res) => {
  res.render('unauth')
})

module.exports = router

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser') // captures from forms
const cookieSession = require('cookie-session')
const moment = require('moment')
const router = require('./routes/routes.js')

const app = express()
const PORT = 3001
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'anysecretword',
  keys: ['anyotherword', 'anythirdword'],
  maxAge: 24 * 60 * 60 * 1000
}))

app.use(function (req, res, next) {
  req.session.logged = req.session.logged || ''
  req.session.todos = req.session.todos || []
  req.session.completed = req.session.completed || []
  next()
})

app.set('view engine', 'pug')
app.locals.pretty = true
app.locals.moment = moment // this makes the variable available from the pug files
app.use(router)

app.listen(PORT)

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser') // captures from forms
const session = require('cookie-session')

const router = require('./routes/routes.js')

const app = express()
const PORT = 3001
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
  name: 'anysecretword',
  keys: ['anyotherword']
}))

app.use(function (req, res, next) {
  req.session.logged = req.session.logged || null
  next()
})

app.set('view engine', 'pug')
app.locals.pretty = true
app.use(router)

app.listen(PORT)

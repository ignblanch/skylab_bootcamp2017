const express = require('express')
const path = require('path')
const bodyParser = require('body-parser') // captures from forms
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const moment = require('moment') // package to format dates

const todoRoute = require('./routes/todoRouter.js')
const completeRoute = require('./routes/completedRouter.js')

const app = express()
const PORT = 3001
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
  secret: 'any secret word',
  store: new FileStore()
}))

app.use(function (req, res, next) {
  req.session.todos = req.session.todos || []
  req.session.completed = req.session.completed || []
  next()
})

app.set('view engine', 'pug')
app.locals.pretty = true
app.locals.moment = moment // this makes the variable available from the pug files

app.use(todoRoute)
app.use(completeRoute)

app.listen(PORT)

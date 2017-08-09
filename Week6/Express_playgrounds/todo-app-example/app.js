const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const moment = require('moment')

const routesTasks = require('./routes/tasks/')
const routesTask = require('./routes/task/')

const app = express()
const pathPublic = path.join(__dirname, 'public')
const PORT = 3002

app.use(express.static(pathPublic))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'cualquierpalabaraquesenosocurra',
  store: new FileStore()
}))

app.use( function(req, res, next) {
  req.session.tasks = req.session.tasks || []
  next()
})

app.set('view engine', 'pug')
app.locals.moment = moment

app.use(routesTasks)
app.use(routesTask)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
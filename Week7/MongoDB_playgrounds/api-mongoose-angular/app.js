const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const urlDb = 'mongodb://localhost:27017/test'
const PORT = 3001

mongoose.Promise = Promise
mongoose.connect(urlDb, {useMongoClient: true})

const parseQueries = require('./middlewares/parseQueries')

const allRestaurants = require('./handlers/allRestaurants')
const byBorough = require('./handlers/byBorough')
const byCuisine = require('./handlers/byCuisine')
const byId = require('./handlers/byId')
// const byDistance = require('./handlers/byDistance')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('GET: Hello World!')
})

app.use(parseQueries)
app.get('/api/restaurants', allRestaurants)
app.get('/api/restaurants/borough/:borough', byBorough)
app.get('/api/restaurants/cuisine/:cuisine', byCuisine.bind(null, false))
app.get('/api/restaurants/cuisine/not/:cuisine', byCuisine.bind(null, true))
app.get('/api/restaurant/:id', byId)
// app.get('/api/restaurant/:id/around/:km', byDistance.bind(null, db))

app.listen(PORT)
console.log(`Listening on PORT ${PORT}.........`)

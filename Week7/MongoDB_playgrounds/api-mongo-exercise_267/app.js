const { MongoClient } = require('mongodb')
const express = require('express')

const app = express()
const urlDb = 'mongodb://localhost:27017/test'
const PORT = 3001

const parseQueries = require('./middlewares/parseQueries')

const allRestaurants = require('./handlers/allRestaurants')
const byBorough = require('./handlers/byBorough')
const byCuisine = require('./handlers/byCuisine')

MongoClient.connect(urlDb, (err, db) => {
  if (err) throw err
  console.log('Connected correctly to server')

  app.use(parseQueries)
  app.get('/restaurants', allRestaurants.bind(null, db)) // (req, res)
  app.get('/restaurants/borough/:borough', byBorough.bind(null, db)) // (req,res)
  app.get('/restaurants/cuisine/:cuisine', byCuisine.bind(null, db, false))
  app.get('/restaurants/cuisine/not/:cuisine', byCuisine.bind(null, db, true))
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}...`)

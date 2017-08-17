const { MongoClient } = require('mongodb')
const express = require('express')
const path = require('path')

const app = express()
const urlDb = 'mongodb://localhost:27017/test'
const PORT = 3001

const parseQueries = require('./middlewares/parseQueries')

const allRestaurants = require('./handlers/allRestaurants')
const byBorough = require('./handlers/byBorough')
const byCuisine = require('./handlers/byCuisine')
const byId = require('./handlers/byId')

const pathClientFolder = path.join(process.cwd(), 'client')
app.use( express.static(pathClientFolder) )

MongoClient.connect(urlDb, (err, db) => {
  if (err) throw err
  console.log('Connected correctly to server')

  app.use(parseQueries)
  app.get('/api/restaurants', allRestaurants.bind(null, db) ) // (req, res)
  app.get('/api/restaurants/borough/:borough', byBorough.bind(null, db)  ) // (req,res)
  app.get('/api/restaurants/cuisine/:cuisine', byCuisine.bind(null, db, false) )
  app.get('/api/restaurants/cuisine/not/:cuisine', byCuisine.bind(null, db, true) )
  app.get('/api/restaurant/:id', byId.bind(null, db) ) // (req, res)
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}...`);

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'pug')
app.locals.pretty = true

app.use(express.static(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var countries = [
  'Swaziland',
  'Suriname',
  'Somalia',
  'Jamaica',
  'Mozambique',
  'Belgium',
  'Monaco',
  'Comoros'
]

app.get('/', (req, res) => {
  res.render('pages/index', { countries })
})

app.post('/countries', (req, res) => {
  countries.push(req.body.country)
  res.redirect('/')
})

app.delete('/countries/:position', (req, res) => {
  console.log(countries)
  console.log(req.params.position)
  countries.splice(req.params.position, 1)
  console.log(countries)
  res.status(200).send('todo ha ido ok')
})

app.get('/about', (req, res) => {
  res.render('pages/about')
})

app.get('/contact', (req, res) => {
  res.render('pages/contact')
})

app.listen(3001)

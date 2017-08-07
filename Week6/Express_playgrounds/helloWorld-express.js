const express = require('express')
const path = require('path') // module to handle paths more easily
const app = express()

// app.use(express.static('public')) // specifies the folder where I can locate my static docs to serve.
// By default it will seach for index.html as starting point unless we specify something else

app.use(express.static(path.join(__dirname, 'public'))) // path makes the route more secure for different OS
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
}) // by default pug searches for a folder named views and the extension specified on app.set('view engine'...)

// ROUTING:
// We can define the different methods with the logic for each route endpoint
// GET
app.get('/', function (req, res) { // Routehandler function - the callback that handles the logic of the route
      // logic for get
  res.send('GET: Hello World!')
})

// app.get('/about', function(req, res) {
    // res.send('ABOUT')
// })

// POST
// app.post('/', function (req, res) {
    // logic for post
//   res.send('POST: Hello World!')
// })

// PUT
// app.put('/', function (req, res) {
    // logic for put
//   res.send('PUT: Hello World!')
// })

// DELETE
// app.delete('/', function (req, res) {
    // logic for delete
//   res.send('DELETE: Hello World!')
// })

// ALL - a special method that will respond to any request method
// app.all('/', function (req, res) {
//   res.send('Hello World!')
// })

// REQ.PARAMS
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params) // returns an object with two keys userId and bookId with the values passed in the url:
  // curl localhost:3000/users/34/books/001 => {userId: 34, bookId: 001}
})

// REQ. QUERY
app.get('users/', function (req, res) {
  res.send(req.query) // captures the query params added to the url ex: users?sort=20&limit=20
})
// WITH BODY-PARSER (npm install body-parser)
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false})) // load module to use in our app
app.post('/form', function (req, res) {
  res.send(req.body) // captures the data from the post method from a form in req.body. then we can manipulate them
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

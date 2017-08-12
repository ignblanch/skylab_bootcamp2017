const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res) => {
  console.log('enter get home: user ' + req.session.logged)
  if (!req.session.logged) {
    res.redirect('/login')
  } else {
    const fileName = `assets/user-data/${req.session.logged}.json`
    console.log('reading ' + fileName)
    let data = fs.readFileSync(fileName, 'utf-8')
    data = JSON.parse(data)
    req.session.todos = data.todos
    req.session.completed = data.completed
      // update data from file if we are logged in correctly before going to todos
    res.redirect('/todos')
  }
})

router.get('/login', (req, res) => {
  if (req.session.logged) {
    res.redirect('/')
  } else {
    res.render('login')
  }
})

router.post('/login', (req, res) => {
  let usersList = fs.readFileSync('assets/users.txt').toString().split('\n')
  let {username, password} = req.body
  if (usersList.some(item => item === `${username}:${password}`)) {
    req.session.logged = username
  } else {
    req.session.logged = ''
  }
  req.session.logged ? res.redirect('/') : res.redirect('/unauth')
})

router.post('/signup', (req, res) => {
  let username = req.body.username
  let password = req.body.password
  let newUser = '\r\n' + username + ':' + password
  fs.appendFile('assets/users.txt', newUser, (err) => {
    if (err) throw err
    console.log('user saved correctly')
  })
  writeFile(username, req) // create user file
  res.redirect('/login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/logout', (req, res) => {
  req.session = null
  res.render('logout')
})

router.get('/unauth', (req, res) => {
  if (req.session.logged) {
    res.redirect('/')
  } else {
    res.render('unauth')
  }
})

// TODO ROUTES -------------------------------------
router.get('/todos', (req, res) => {
  if (req.session.logged) {
    res.render('todos', { logged: req.session.logged, todos: req.session.todos })
    writeFile(req.session.logged, req) // update data file
  } else {
    res.redirect('/')
  }
})

router.post('/todos', (req, res) => {
  req.session.todos.push({title: req.body.todo, date: new Date()})
  res.redirect('/todos')
  // res.status(200).send('Item added correctly')
})

router.post('/todos/:position', (req, res) => {
  req.session.completed.push({title: req.session.todos[req.params.position].title, date: new Date()})
  req.session.todos.splice(req.params.position, 1)
  res.status(200).send('Item marked as completed')
})

router.put('/todos/:position', (req, res) => {
  req.session.todos[req.params.position].title = req.body.title // comes from data object passed by the ajax call
  res.status(200).send('Todo has been changed')
})

router.delete('/todos/:position', (req, res) => {
  req.session.todos.splice(req.params.position, 1)
  res.status(200).send('Item removed')
})

// COMPLETED ROUTES -------------------------------------
router.get('/completed', (req, res) => {
  if (req.session.logged) {
    res.render('completed', {completed: req.session.completed})
    writeFile(req.session.logged, req) // update data file
  } else {
    res.redirect('/')
  }
})

router.delete('/completed/:position', (req, res) => {
  req.session.completed.splice(req.params.position, 1)
  res.status(200).send('Item removed')
})

router.post('/completed', (req, res) => {
  req.session.todos.map(item => req.session.completed.push(item))
  req.session.todos = []
  res.status(200).send('All items completed')
})

function writeFile (user, req) {
  let todos = JSON.stringify(req.session.todos)
  let completed = JSON.stringify(req.session.completed)
  let text = `{"todos": ${todos}, "completed": ${completed}}`
  fs.writeFileSync(`assets/user-data/${user}.json`, text)
}

module.exports = router

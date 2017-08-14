const express = require('express')
const path = require('path')
const fs = require('fs')
const readFile = require('fs-readfile-promise')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const app = express()

const PORT = 3001

app.set('view engine', 'pug')
app.use( express.static( path.join(__dirname, 'public' )) )

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'authExpressDemoCookie',
  keys: ['superSecrettglWwSUbo']
}))

app.get('/welcome', (req, res) => {
  if (!req.session.userLogged) res.redirect('/login')
  else {
    res.render('pages/welcome', {
      userLogged: req.session.userLogged
    })
  }

})

app.get('/logout', (req,res) => {
  req.session.userLogged = null
  res.redirect('/login')
})

app.get('/login', (req, res) => {
  if (req.session.userLogged) {
    res.redirect('/welcome')
  }
  res.render('pages/login')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  console.log(`${email} → ${password}`)

  readFile('./data/users.txt', 'utf-8')
    .then( contentData => contentData.split('\r\n') )
    .then( aAuthLines =>  aAuthLines.some( authLine => {
      return authLine === `${email}:${password}`
    }))
    .then( bDoesExist => {
        if (bDoesExist) {
          req.session.userLogged = email
          res.redirect('/welcome')
        }
        else res.send('💀 Unauthorized!!')
    })

//  res.send('all done!!')
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);
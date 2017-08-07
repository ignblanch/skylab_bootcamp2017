const express = require('express')
const fs = require('fs')
const app = express()

app.get('/books', function (req, res) {
  fs.readFile(process.argv[3], 'utf-8', function (err, data) {
    if (err) throw err
    const obj = JSON.parse(data)
    res.send(obj)
  })
})

app.listen(process.argv[2])

var http = require('http')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]
var finishCounter = 0
var text1 = ''
var text2 = ''
var text3 = ''

http.get(url1, function (res) {
  res.on('data', function (data) {
    text1 += data
  })
  res.on('end', function () {
    finishCounter++
    print()
  })
})

http.get(url2, function (res) {
  res.on('data', function (data) {
    text2 += data
  })
  res.on('end', function () {
    finishCounter++
    print()
  })
})

http.get(url3, function (res) {
  res.on('data', function (data) {
    text3 += data
  })
  res.on('end', function () {
    finishCounter++
    print()
  })
})

function print () {
  if (finishCounter === 3) {
    console.log(text1)
    console.log(text2)
    console.log(text3)
  }
}

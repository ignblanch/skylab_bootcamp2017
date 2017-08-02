var http = require('http')
var url = process.argv[2]

http.get(url, function (response) {
  response.on('error', function (err) {
    console.log(err)
  })
  var string = ''
  response.on('data', function (data) {
    string += data
  })

  response.on('end', function () {
    console.log(string.length)
    console.log(string)
  })
})
// Using concat-stream npm
// var http = require('http')
// var concat = require('concat-stream')
// var urlToGet = process.argv[2]

// http.get(urlToGet, function (readableResponse) {
//   readableResponse.setEncoding('utf8')

//   readableResponse
//     .pipe(concat(function (totalContent) {
//       console.log(totalContent.length)
//       console.log(totalContent)
//     }))
// })


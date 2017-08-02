var http = require('http')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

http.get(url1, function (response) {
  response.on('error', function (err) {
    console.log(err)
  })
  var string = ''
  response.on('data', function (data) {
    string += data
  })
  response.on('end', function () {
    console.log(string)
    http.get(url2, function (response) {
      response.on('error', function (err) {
        console.log(err)
      })
      var string = ''
      response.on('data', function (data) {
        string += data
      })
      response.on('end', function () {
        console.log(string)
        http.get(url3, function (response) {
          response.on('error', function (err) {
            console.log(err)
          })
          var string = ''
          response.on('data', function (data) {
            string += data
          })
          response.on('end', function () {
            console.log(string)
          })
        })
      })
    })
  })
})

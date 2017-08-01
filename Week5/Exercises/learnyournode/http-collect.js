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

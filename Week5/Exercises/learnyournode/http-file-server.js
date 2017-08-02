var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var filePath = process.argv[3]

var server = http.createServer(function (req, resp) {
  var readableStream = fs.createReadStream(filePath)
  readableStream.pipe(resp)
}).listen(port)

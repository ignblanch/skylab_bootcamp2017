var http = require('http')
var map = require('through2-map')
var port = process.argv[2]

http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(map(function (chunk) {
      chunk = chunk.toString()
      return chunk.toUpperCase()
    })).pipe(res)
  } else {
    console.error('error: request method must be POST')
  }
}).listen(port)

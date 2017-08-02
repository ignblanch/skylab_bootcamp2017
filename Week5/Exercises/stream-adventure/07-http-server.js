var http = require('http')
var PORT = process.argv[2]
var through2 = require('through2')

http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through2(function (chunk, _, next) {
      chunk = chunk.toString().toUpperCase()
      this.push(chunk)
      next()
    })).pipe(res)
  } else {
    console.error('error: request method must be POST')
  }
}).listen(PORT)

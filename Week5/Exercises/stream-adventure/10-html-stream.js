var trumpet = require('trumpet')
var through2 = require('through2')
var tr = trumpet()

var stream = tr.select('.loud').createStream()
stream.pipe(through2(function (chunk, _, next) {
  this.push(chunk.toString().toUpperCase())
  next()
})).pipe(stream)

process.stdin.pipe(tr).pipe(process.stdout)

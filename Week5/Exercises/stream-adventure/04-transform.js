var through2 = require('through2')

var streamTransform = through2(function (chunk, _, next) {
  chunk = chunk.toString().toUpperCase()
  this.push(chunk)
  next()
})

process.stdin.pipe(streamTransform).pipe(process.stdout)

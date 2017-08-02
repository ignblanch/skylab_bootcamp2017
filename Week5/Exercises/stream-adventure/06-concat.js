var concat = require('concat-stream')

process.stdin
  .pipe(concat(function (body) {
    var bodyReverse = body.toString().split('').reverse().join('')
    process.stdout.write(bodyReverse)
  }))

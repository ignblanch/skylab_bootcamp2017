var through2 = require('through2')
var split = require('split')
var counter = 0

process.stdin
        .pipe(split())
        .pipe(through2(function (line, _, next) {
          line = line.toString()
          var isEven = (++counter) % 2 === 0
          var modifiedLine = isEven ? line.toUpperCase() : line.toLowerCase()
          this.push(modifiedLine + '\n')
          next()
        })).pipe(process.stdout)

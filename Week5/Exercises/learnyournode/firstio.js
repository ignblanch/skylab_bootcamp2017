var fs = require('fs')
var path = process.argv[2]

var text = fs.readFileSync(path, 'utf-8')
var arr = (text.split('\n').length) - 1
console.log(arr)

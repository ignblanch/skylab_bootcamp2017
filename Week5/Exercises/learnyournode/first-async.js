var fs = require('fs')
var path = process.argv[2]

fs.readFile(path, 'utf-8', function (err, data) {
  if (err) throw err
  var text = data
  var arr = (text.split('\n').length) - 1
  console.log(arr)
})

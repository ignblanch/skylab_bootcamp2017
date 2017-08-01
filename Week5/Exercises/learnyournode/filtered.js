var fs = require('fs')
var path = process.argv[2]
var ext = process.argv[3]

fs.readdir(path, 'utf-8', function (err, data) {
  if (err) throw err
  var arr = data.filter(function (item) {
  	return item.includes('.' + ext)
  })
  console.log(arr.join('\n'))
})

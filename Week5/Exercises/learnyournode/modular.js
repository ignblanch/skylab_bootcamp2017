var path = process.argv[2]
var ext = process.argv[3]

var readFirAndFilter = require('./modular2.js')

readFirAndFilter(path, ext, function (err, data) {
  if (err) throw err
  console.log(data.join('\n'))
})

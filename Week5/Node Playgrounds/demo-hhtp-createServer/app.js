var fs = require('fs')
var http = require('http')
var queryCountry = process.argv[2]

var server = http.createServer()

server.on('request', function(req,res) {

  fs.readFile('data.txt', 'utf-8', function(err, data) {
    if (err) throw err
    var text = data.trim()
    var aCountries = text.split('\n')

    var freqCountries = aCountries.reduce( function(acc, itemCountry) {
      if (acc[itemCountry]) acc[itemCountry]++
      else acc[itemCountry] = 1
      return acc
    }, {})

    var jsonCountries = JSON.stringify(freqCountries, null, 2)

    res.end(jsonCountries)

    // fs.writeFile('stats.txt', jsonCountries, function(err) {
    //   if (err) throw err
    //   console.log("File saved properly...");
    // })

  })

})

server.listen(3000, function() {
  console.log('Listening in PORT 3000');
})


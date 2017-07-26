var cities = require('./city_list.json')
var fs = require('fs')

var spainCities = cities.filter( function(city) {
  return city.country === "ES"
})

fs.writeFile('spain_city_list.json', JSON.stringify(spainCities, null, 2), function(error) {
  if (error) throw new Error(error)
  console.log('File written succesfully');
})
// //// Write a node.JS program that execute a connection to server and return success message like 'Success, i'm listening from port: 3000'

// var http = require('http')

// var server = http.createServer()
// server.on('request', function (req, res) {
//   res.end('Success, i\'m listening from port: 3000')
// })

// server.listen(3000)

// We can also use the callback function from the listen method directly
// server.listen(3000, function() {
//   console.log('Server listening at port 3000')
// })

// Si se le pasa el callback requestListener (opcional) se añadirá automaticamente al evento request

// var server = http.createServer(function (request, response) {
//   response.end('Success, i\'m listening from port: 3000')
// })

// // To pass the port as argument
// var PORT = process.argv[2]

// server.listen(PORT)

// //// Write a node program that read a file (passed as parameter) in local machine and shows in the console the content of it.
// const fs = require('fs')

function readFileParams () {
  fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
  })
}

// readFileParams()

// //// Write a node.JS program that read and shows in the console the html code of one external page. The link of the external page should be read from a file link.txt

// var request = require('request')
// var fs = require('fs')

function readHtml () {
  fs.readFile('./link.txt', 'utf-8', (err, data) => { // Istead of the codification as param we can parse data.toString()
    if (err) throw err
    request(data, function (error, response, body) {
      console.log('error:', error) // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
      console.log('body:', body) // Print the HTML for the homepage.
    })
  })
}

// readHTML()

// Write a node.JS program that list the content of the current directory indicating if is a directory or a file

// var fs = require('fs')

function listContentOfDir () {
  var content = fs.readdirSync('./')

  var files = content.map(function (fileName) {
    if (fs.lstatSync(fileName).isDirectory()) { // lstatSync(fileName) returns an object to wich we can apply methods such as isDirectory()
      return 'DIR: ' + fileName
    } else {
      return 'FILE: ' + fileName
    }
  })
  console.log(files.join('\n'))
}

// listContentOfDir()

// ///// Write a node.JS program that creates a txt file with the text passed as a parameter
// Extra: Improve the previous exercise to user the first parameter as the name of the destination file
// More Extra: Improve the previous exercise to also read and shows in the console the content of the file

// var fs = require('fs')

function writeParamsToFile () {
  var textFile = process.argv[2] || 'myText.txt'

  var data = process.argv[3]

  fs.writeFile(textFile, data, function () {
    console.log('The file ' + textFile + ' was saved!')
    fs.readFileSync(textFile).toString()
  })
}

// writeParamsToFile()

// writeParamsToFile()

// var fs = require('fs')
// var concat = require('concat-stream')

function streamTexts () {
  var stream1 = fs.createReadStream('hello.txt')
  var stream2 = fs.createReadStream('link.txt')
  var stream3 = fs.createReadStream('myText.txt')
  var stream4 = fs.createReadStream('test.txt')

  var stream = concat([stream1, stream2, stream3, stream4])

  console.log(stream)
}

// streamTexts()

// streamTexts();
// Write a node.JS program that shows you the local hour of server.

// var strftime = require('strftime')

function showHour() {
  console.log(strftime('%B %d, %Y %H:%M:%S'))
}
// showHour()

// Write a node.JS program that search information in .txt file and returns you how much coincidences find.
// var fs = require('fs')
// var textFile = ('myText.txt')

function compareValues () {
  fs.readFile(textFile, function (err, data) {
    if(err) throw err
    console.log(data.toString().match(/john|John/g).length)
  })
}
// compareValues()

// Write a node.JS program that sum all integers saved in other txt file
// var fs = require('fs')

function sumValues () {
  var textFile = 'sumValues.txt'
  fs.readFile(textFile, 'utf-8', function (err, data) {
    if (err) throw err

    var integers = data.match(/\d+/g)
    integers = integers.map(item => parseInt(item))

    console.log(integers.reduce((total, item) => total + item))
  })
}

// sumValues()

// Write a node.JS program that create a HTML file
// var fs = require('fs')
// var http = require('http')

function createHTML () {
  var htmlFile = 'test.html'
  var content = '<html>Hello World</html>'
  fs.writeFile(htmlFile, content, function () {
    console.log('Hello! Access this HTML with http:\/\/localhost:8080 from your browser')
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(content)
      res.end()
    }).listen(8080)
  })
}
// createHTML()

// create HTML2
function createHTML () {
  var htmlFile = 'test.html'
  var content = '<html>Hello World<scrript>function() {}</script></html>'
  fs.writeFile(htmlFile, content, function () {
    console.log('Hello! Access this HTML with http:\/\/localhost:8080 from your browser')
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(content)
      res.end()
    }).listen(8080)
    // http.createServer.on('request', function({...}))
  })
}

// Write a node.JS program that read a JSON file and show you some propierties for console
function readJSON () {
  var jsonObj = require('./test.json')
  console.log(`${jsonObj.username} ${jsonObj.password} ${jsonObj.email} ${jsonObj.id}`)
}
// readJSON()

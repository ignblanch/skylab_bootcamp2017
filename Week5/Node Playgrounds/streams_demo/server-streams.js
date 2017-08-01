// var fs = require('fs')
var http = require('http')

var server = http.createServer()
// var readableStream = fs.createReadStream('data.txt');

server.on('request', function (req, res) {
  process.stdin.pipe(res)
})

server.listen(3000)

//              /* readable stream ⬇ */
// http.createServer( function ( request , response){
//                                         /*  ⬆ writable stream */
//   response.writeHead(200);
//   response.write("Hello, this is dog.\n");
//   setTimeout(function(){
//     response.write("Dog is done.\n");
//     response.end();
//   }, 5000);

// }).listen(8080);

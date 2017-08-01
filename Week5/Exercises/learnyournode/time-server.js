var net = require('net')
var port = process.argv[2]
var moment = require('strftime')

var server = net.createServer(function (socket) {
  socket.on('end', function () {
    console.log('server off')
  })
  socket.write(moment('%y/%m/%d %h:%m'))
  socket.pipe(socket)
})
server.listen(port)

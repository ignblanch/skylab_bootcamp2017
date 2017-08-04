var fs = require('fs')

// var readableStream = fs.createReadStream('data.txt');
var writableStream = fs.createWriteStream('data3.txt')

process.stdin.pipe(writableStream)

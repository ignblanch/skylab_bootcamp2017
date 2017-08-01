var fs = require('fs')

console.log('@begin reading file...')

var readableStream = fs.createReadStream('data.txt')
var writableStream = fs.createWriteStream('copy2.txt')

readableStream.setEncoding('utf8')

readableStream
  .pipe(writableStream)

// readableStream.on('data', function( pieceText ) {
//   writableStream.write(pieceText)
// });

// readableStream.on('end', function() {
//   writableStream.end();
//   console.log('@end reading file...');
//   console.log('copy available at copy.txt...');
// });

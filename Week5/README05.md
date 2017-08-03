# SKYLAB CODERS BOOTCAMP - SUMMER 2017

### SLIDES FOR THE COURSE
[slides](https://skylabcoders.github.io/bootcamp-julio2017/)

## WEEK 5

### SESSION 1
* [NodeJS](https://skylabcoders.github.io/bootcamp-julio2017/?full#207)
  - In client global object is Window. In server we have a global object called Global
* NPM - Node package manager:
  - We manage modules with module.exports / require 
    + NPM install 'module' => installs module locally
    + NPM install 'module' -g => installs globally
    + npm init -y => creates empty package.json file ready
    + NPM install 'module' --save => keeps a record of all dependencies inside 'package.json' file inside our project
    + NPM install => installs all dependencies stored in package.json file
  - There are certain node modules that are native but we have to use require nontheless [reference](https://github.com/juanmaguitar/apuntes-nodejs/blob/master/modulos/modulos-node-required.md): http, url, path, fs...
  - Other native methods can be used without require : [process](https://github.com/juanmaguitar/apuntes-nodejs/blob/master/modulos/modulos-node-notRequired.md)
    + [Node Exercises](https://github.com/juanmaguitar/js-server-exercises/tree/master/node-exercises)
    - process.env - shows us the environment variables available in node as object Ex. process.env.$PATH is the node way to access $PATH. We can store environment variables in terminal. Ex. URL = 'www.skylabcoders.com'
    and then access it as process.env.URL

### SESSION 2
* Node practice using the module [learnyounode](https://github.com/workshopper/learnyounode)
* [STREAMS](https://www.sitepoint.com/basics-node-js-streams/)
  - fs.createReadStream, createWriteStream...
```javascript
var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var data = '';

readableStream.on('data', function(chunk) {
    data+=chunk;
});

readableStream.on('end', function() {
    console.log(data);
});
```
 - Piping
```javascript
var fs = require('fs');
var readableStream = fs.createReadStream('file1.txt');
var writableStream = fs.createWriteStream('file2.txt');

readableStream.pipe(writableStream);
```
- process.stdin / process.stdout - are the read/write streams of the terminal

### SESSION 3
- [NodeJS streams](https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93)
- streamTransform - npm through2   - allows us to pipe (transform) the request and return it 

```javascript
var http = require('http')
var through2 = require('through2')
var urlToGet = process.argv[2]

var streamTransform = through2( function(chunk, _, next) {
  chunk = chunk + '\n'
  this.push(chunk) // we apply the canges to the read chunck
  next() // we call this function to continue
})

http.get(urlToGet, function( readableResponse ) {

  readableResponse.setEncoding('utf8')

  readableResponse
    .pipe(streamTransform) // applies the transformation
    .pipe(process.stdout) // prints on screen

})
```

- HTTP connections have request (readableStream)/response(writableStream): uses tcp underneath
- TCP connections have a socket (duplexStream: both readable and writable)
* Node practice using the module [stream-adventure](https://github.com/workshopper/stream-adventure)

### SESSION 4
* [ES6 aka ES2015](https://skylabcoders.github.io/bootcamp-julio2017/?full#es2015)
  - Arrow Functions
  - Block Scope : let, const
  - Template strings - `` backticks, ${javascript exp}
  - Enhanced Object literals: getters, setters
  - Default parameters
  - Destructuring arrays, objects
  - Rest operator (...arr) undefined number of parameters to array
  - Spread operator (...arr) fills multiple places from the elements of an array... 

### SESSION 5

// Using npm module async
var http = require('http')
var concat = require('concat-stream')
var async = require('async')
var urls = process.argv.slice(2)

var aGetUrls = urls.map(function (url) {
  return function (callback) {
    http.get(url, function (readableResponse) {
      function handleFinalContent (finalContent) {
        callback(null, finalContent)
      }
      readableResponse.setEncoding('utf8')
      readableResponse
        .pipe(concat(handleFinalContent))
    })
  }
})

async.series(aGetUrls, function (err, results) {
  if (err) throw err
  results.forEach(function (content) {
    console.log(content)
  })
})
                                                                                                                                                    
const path = require('path')
const promisedReadFile = require('./promisedReadFile')

function readEach( pathDir, listFiles ) {
  const aPromises = listFiles.map( filename =>
    promisedReadFile(pathDir, filename)
  )
  return Promise.all( aPromises )
            .then( function(results) {
              return results.map( (result,i) => ({
                content: result,
                file: path.join(pathDir, listFiles[i])
              }))
            })
}

module.exports = readEach
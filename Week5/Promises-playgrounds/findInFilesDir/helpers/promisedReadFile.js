const path = require('path')
const fs = require('fs')

function promisedReadFile(pathDir, fileName) {

  const pathFile = path.join(pathDir, fileName)

  return new Promise( function( resolve, reject ) {

    fs.readFile(pathFile, 'utf-8', (err, contentFile ) => {
      if (err) reject(err)
      resolve(contentFile)
    })

  })

}

module.exports = promisedReadFile

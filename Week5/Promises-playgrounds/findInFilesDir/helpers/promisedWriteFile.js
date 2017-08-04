const fs = require('fs')

function promisedWriteFile (destFile, contentToWrite) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(destFile, contentToWrite, (err) => {
      if (err) reject(err)
      resolve(`content has been properly written to ${destFile}`)
    })
  })
}

module.exports = promisedWriteFile

const fs = require('fs')

function promisedReadDir (pathDir) {
  return new Promise(function (resolve, reject) {
    fs.readdir(pathDir, (err, listFiles) => {
      if (err) reject(err)
      resolve(listFiles)
    })
  })
}

module.exports = promisedReadDir

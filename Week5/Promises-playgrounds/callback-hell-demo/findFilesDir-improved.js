const fs = require('fs')
const path = require('path')
const [,,pathDir, extension, query] = process.argv

const filterByExtension = filename => path.extname(filename) === '.' + extension

fs.readdir(pathDir, handleResultsDir )

function handleResultsDir(err, listFiles) {

  if (err) throw err

  const filteredFiles = listFiles.filter( filterByExtension )

  let numFiles = filteredFiles.length
  let contentStats = ''

  filteredFiles.forEach( readEachFile )

  function readEachFile(fileName)  {
    const pathToRead = path.join(pathDir, fileName)
    fs.readFile( pathToRead, 'utf-8', handleReadFile)
  }

  function handleReadFile (err, contentFile) {
    if (err) throw err
    const hasQuery = contentFile.includes(query)
    contentStats += `${pathToRead} → ${hasQuery}files\n`
    if (--numFiles == 0) {
      fs.writeFile( 'stats.txt', contentStats, err => {
        if (err) throw err
      })
    }
  }

}


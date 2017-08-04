const fs = require('fs')
const path = require('path')
const [,,pathDir, extension, query] = process.argv

// node demo -pr

fs.readdir(pathDir, (err, listFiles) => {
  if (err) throw err
  const filterByExtension = filename => path.extname(filename) === '.' + extension
  const filteredFiles = listFiles.filter( filterByExtension )

  let numFiles = filteredFiles.length
  let contentStats = ''

  filteredFiles.forEach( fileName =>  {
    const pathToRead = path.join(pathDir, fileName)

    fs.readFile( pathToRead, 'utf-8', (err, contentFile) => {
      if (err) throw err
      const hasQuery = contentFile.includes(query)
      contentStats += `${pathToRead} → ${hasQuery}\n`
      if (--numFiles == 0) {
        fs.writeFile( 'stats.txt', contentStats, err => {
          if (err) throw err
        })
      }
    })

  })

})
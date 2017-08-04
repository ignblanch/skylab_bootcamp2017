const path = require('path')

function filterByExtension (extension, listFiles) {
  const hasExtension = filename => {
    return path.extname(filename) === '.' + extension
  }
  return listFiles.filter(hasExtension)
}

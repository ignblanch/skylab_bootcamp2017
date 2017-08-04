const [,, pathDir, targetFile, extension, query] = process.argv

const promisedReadDir = require('./helpers/promisedReadDir')
const promisedWriteFile = require('./helpers/promisedWriteFile')
const filterByExtension = require('./helpers/filterByExtension')
const getStats = require('./helpers/getStats')
const readEach = require('./helpers/readEach')

promisedReadDir(pathDir)
  .then(filterByExtension.bind(null, extension))
  .then(readEach.bind(null, pathDir))
  .then(getStats.bind(null, query))
  .then(promisedWriteFile.bind(null, targetFile))
  .then(console.log)

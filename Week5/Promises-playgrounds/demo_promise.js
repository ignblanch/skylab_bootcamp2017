var fs = require('fs')

const readFilePromised = function (fileToRead) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileToRead, 'utf-8', (err, contentFile) => {
      if (err) reject(err)
      resolve(contentFile)
    })
  })
}

const splitWords = contentFile => contentFile.split(' ')

function getStatsWords (aWords) {
  return aWords.reduce((acc, word) => {
    if (acc[word]) acc[word]++
    else acc[word] = 1
    return acc
  }, {})
}

function writeInFile (oStats) {
  const json = JSON.stringify(oStats, null, 2)

  return new Promise(function (resolve, reject) {
    fs.writeFile('stats.txt', json, err => {
      if (err) reject(err)
      resolve('stats has been written at stats.txt')
    })
  })
}

function filterMoreThan5 (oStats) {
  for (let key in oStats) {
    if (oStats[key] < 5) delete oStats[key]
  }
  return oStats
}

readFilePromised('data.txt')
  .then(splitWords)
  .then(getStatsWords)
  .then(filterMoreThan5)
  .then(writeInFile)
  .then(console.log)
  .catch(console.error)

function getStats (query, aResults) {
  const hasQuery = contentFile => contentFile.includes(query)

  return aResults.map(result => {
    return `${result.file} → ${hasQuery(result.content)}\n`
  })
}

module.exports = getStats

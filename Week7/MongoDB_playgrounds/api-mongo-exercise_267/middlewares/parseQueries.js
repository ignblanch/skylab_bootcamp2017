function parseQueries (req, res, next) {
  const { limit = 20, fields = '', page = 1 } = req.query
  const projection = fields.split(',').reduce((acc, field) => {
    if (field) acc[field] = 1
    return acc
  }, {})
  req.projection = projection
  req.limit = +limit
  req.offset = (page * limit) - limit
  next()
}

module.exports = parseQueries

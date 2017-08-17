const Restaurant = require('../models/Restaurant')

function byId (db, req, res) {
  const { limit, projection, offset } = req
  const { id } = req.params
  Restaurant
    .findById(id, projection)
    .limit(limit)
    .skip(offset)
    .then(data => res.json(data))
}

module.exports = byId

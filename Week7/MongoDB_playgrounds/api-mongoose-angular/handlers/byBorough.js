const Restaurant = require('../models/Restaurant')

function byBorough (req, res) {
  const { limit, projection, offset } = req
  const { borough } = req.params

  Restaurant
    .find({ borough }, projection)
    .limit(limit)
    .skip(offset)
    .then(data => res.json(data))
}

module.exports = byBorough

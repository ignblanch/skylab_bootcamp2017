const Restaurant = require('../models/Restaurant')

const getAllRestaurants = (req, res) => {
  const { limit, projection, offset } = req
  Restaurant
    .find({}, projection)
    .limit(limit)
    .skip(offset)
    .then(data => res.send(data))
}

module.exports = getAllRestaurants

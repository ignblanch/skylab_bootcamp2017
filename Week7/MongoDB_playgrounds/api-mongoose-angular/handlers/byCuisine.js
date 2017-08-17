const Restaurant = require('../models/Restaurant')

function byCuisine (db, not, req, res) {
  const { limit, projection, offset } = req
  const { cuisine } = req.params
  let query = { cuisine }
  if (not) {
    query = { cuisine: {$ne: cuisine} }
  }

  Restaurant
    .find(query, projection)
    .limit(limit)
    .skip(offset)
    .toArray((err, aRestaurants) => {
      if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = byCuisine

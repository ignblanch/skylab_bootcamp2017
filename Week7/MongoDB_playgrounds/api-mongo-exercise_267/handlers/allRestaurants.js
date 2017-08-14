const getAllRestaurants = (db, req, res) => {
  const { limit, projection, offset } = req
  db.collection('restaurants')
    .find({}, projection)
    .limit(limit)
    .skip(offset)
    .toArray((err, aRestaurants) => {
      if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = getAllRestaurants

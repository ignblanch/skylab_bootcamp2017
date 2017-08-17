function byBorough (db, req, res) {
  const { limit, projection, offset } = req
  const { borough } = req.params

  db.collection('restaurants')
    .find({ borough }, projection)
    .limit(limit)
    .skip(offset)
    .toArray((err, aRestaurants) => {
      if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = byBorough

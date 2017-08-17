function byDistance (db, req, res) {
  const { limit, projection, offset } = req
  const { id, km } = req.params
  let query = { restaurant_id: id }
  let latitude
  let longitude

  db.collection('restaurants')
    .find(query)
    .toArray((err, aRestaurants) => {
      if (err) throw err
      latitude = aRestaurants[0].address.coord[0]
      longitude = aRestaurants[0].address.coord[0]
      db.collection('restaurants').find({
        'address.coord': {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [ longitude, latitude ]
            },
            $maxDistance: km * 1000
          }
        }
      }, projection)
  .limit(limit)
  .skip(offset)
  .toArray((err, aRestaurants) => {
    if (err) throw err
    res.json(aRestaurants)
  })
    })
}

module.exports = byDistance

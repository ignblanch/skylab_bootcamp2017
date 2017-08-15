const {ObjectId} = require('mongodb')

function byId (db, req, res) {
  const { limit, projection, offset } = req
  const { id } = req.params
  let query = { _id: ObjectId(id) }

  db.collection('restaurants')
    .find(query, projection)
    .limit(limit)
    .skip(offset)
    .toArray((err, aRestaurants) => {
      if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = byId

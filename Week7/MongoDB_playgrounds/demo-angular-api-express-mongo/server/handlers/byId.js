const { ObjectId } = require('mongodb')

const byId = (db, req, res) => {
  const { projection } = req
  const { id } = req.params
  db.collection('restaurants')
    .find({ _id: ObjectId(id) }, projection)
    .toArray((err, aRestaurants) => {
      if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = byId

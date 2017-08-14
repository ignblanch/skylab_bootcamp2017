const {MongoClient} = require('mongodb')
const urlDB = 'mongodb://localhost:27017/test'

MongoClient.connect(urlDB, function (err, db) {
  if (err) throw err
  console.log('Connected correctly to server')
  db.collection('restaurants')
    // .find({borough: 'Manhattan'}) // returns a cursor. Not properly an array
    // .find({'address.zipcode': '10075'})
    // .find({'grades.grade': 'B'})
    // .find({'grades.score': {$gt: 30}})
    // .find({cuisine: 'Italian', 'address.zipcode': '10075'})
    // .find({ $or: [
    // { 'cuisine': 'Italian' },
    // { 'address.zipcode': '10075' }
    // ]})
    .find({ borough: 'Manhattan' }, { name: 1, cuisine: 1, _id: 0 })// 1 -show field 0 -do not show field
    .sort({cuisine: 1, name: 1}) // sorted by cuisine and then by name
    // .forEach((task) => console.log(task)) // here it's a cursor method!
    .toArray((err, docs) => { // to convert cursor to js array
      if (err) throw err
      console.log(docs) // here we can manipulate it as array
      db.close()
    })
})

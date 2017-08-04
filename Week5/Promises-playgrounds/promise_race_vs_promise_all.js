var promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('promise1')
  }, 3000)
})

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('promise2')
  }, 10000)
})

var promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('promise3')
  }, 5000)
})

Promise.all([ promise1, promise2, promise3 ])
  .then(function (results) {
    console.log(results)
  })

Promise.race([ promise1, promise2, promise3 ])
  .then(function (results) {
    console.log(results)
  })

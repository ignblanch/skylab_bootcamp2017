new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('FULFILLED!')
  }, 300)
}).then(console.log)

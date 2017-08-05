new Promise((resolve, reject) => {
  setTimeout(function () {
    reject(new Error('REJECTED!'))
  }, 300)
}).then(null, onError)

function onError (e) {
  console.log(e.message)
}

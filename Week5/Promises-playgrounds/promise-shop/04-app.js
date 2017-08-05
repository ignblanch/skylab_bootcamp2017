new Promise((resolve, reject) => {
  resolve('I FIRED')
  reject(new Error('I DID NOT FIRE'))
}).then(console.log, onReject)

function onReject (error) {
  console.log(error.message)
}

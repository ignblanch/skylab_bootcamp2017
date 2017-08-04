function attachTitle (arg) {
  return `DR. ${arg}`
}

new Promise((resolve, reject) => {
  resolve('MANHATTAN')
}).then(attachTitle)
  .then(console.log)

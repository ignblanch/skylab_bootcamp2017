var promise = Promise.resolve('SECRET VALUE')
var promise1 = Promise.reject('ERROR')

promise.then(console.log)
promise1.catch(console.log)

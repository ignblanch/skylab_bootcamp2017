var arr = process.argv.slice(2)

var newArr = arr.reduce(function (acc, item) {
  return acc + parseInt(item)
}, 0)

console.log(newArr)

function runStack(n, result = 100) {
  if (n === 0) return result
  console.trace()
  return runStack(n - 2, result)
}

var b = 2
function test(a) {
  console.trace()
  console.log({ a, b })
}
function testCallback(cb) {
  var a = 1
  return cb(a)
}

testCallback(test)

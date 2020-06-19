module.exports = function (fn) {

  let isCalled = false
  let result

  return function (...args) {
    if (!isCalled) {
      result = fn.apply(this, args)
      isCalled = true
    }

    return result
  }

}

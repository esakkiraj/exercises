module.exports = function (fn, timeout) {

  let timeoutFn

  return function (...args) {
    const context = this

    // Define later function
    const later = () => {
      timeoutFn = null
      fn.apply(context, args)
    }

    clearTimeout(timeoutFn)

    timeoutFn = setTimeout(later, timeout)
  }
}

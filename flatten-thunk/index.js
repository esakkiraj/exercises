module.exports = (thunk) => (mainCb) => {

  let isCurrentThunkRunning = false
  let currentThunk = thunk
  let err = undefined
  let data = undefined

  const makeNewCallback = () => {
    isCurrentThunkRunning = true

    return (e, d) => {

      if (e) err = e

      if (typeof d === 'function') {

        currentThunk = d
        isCurrentThunkRunning = false

      } else {
        currentThunk = undefined
        data = d
      }

    }
  }

  const interval = setInterval(() => {

    if (typeof currentThunk === 'function' && !isCurrentThunkRunning) {
      const cb = makeNewCallback()
      currentThunk(cb)
    }

    if (typeof currentThunk !== 'function') {
      clearInterval(interval)
      mainCb(err, data)
    }

  }, 0)


}

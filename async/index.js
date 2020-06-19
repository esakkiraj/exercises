exports.sequence = function (fns) {

  return (seqCB) => {

    let fnsLen = fns.length;
    let _fnIdx = 0
    let isRunning = false;
    let err = undefined
    let data = undefined

    let cb

    const getCbWrapper = () => {
      return (_err, _data) => {
        if (_err) err = _err
        else if (_data) data = _data

        isRunning = false
        _fnIdx++
      }
    }

    let _interval = setInterval(() => {

      if (_fnIdx === fnsLen || err) {
        clearInterval(_interval)
        seqCB(err, data)
      }

      if (!isRunning) {
        cb = getCbWrapper()
        isRunning = true
        fns[_fnIdx](cb, data)
      }


    }, 0)

  }

}


exports.parallel = (fns) => (pCB) => {

  const fnsLen = fns.length
  let completed = 0
  let datas = Array(fnsLen)
  let errors = Array(fnsLen)

  fns.forEach((fn, idx) => {

    fn((err, data) => {
      if (err) errors[idx] = err
      if (data) datas[idx] = data
      completed++
    })

  })

  let sInterval = setInterval(() => {

    if (fnsLen === completed) {
      pCB(errors, datas)
      clearInterval(sInterval)
    }

  }, 0)

}

exports.race = (fns) => (rCB) => {
  let hasWinner = false

  fns.forEach(fn => {

    fn((err, data) => {

      if (!hasWinner) {
        rCB(err, data)
        hasWinner = true
      }
    })
  })
}

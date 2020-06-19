module.exports = function (fn) {
  let noOfArgsNeeded = fn.length

  const argsCollector = (existingArgs, ...args) => {

    const totalArgs = [...existingArgs, ...args]

    if (totalArgs.length >= noOfArgsNeeded) {

      const result = fn.apply(null, totalArgs)
      return result

    } else {

      return argsCollector.bind(null, totalArgs)

    }
  }

  return argsCollector.bind(null, [])

}

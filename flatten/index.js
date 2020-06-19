module.exports = (a) => {

  const result = []

  const recursiveUtil = (arr) => {
    for (var i of arr) {
      if (Array.isArray(i)) {
        recursiveUtil(i)
      } else {
        result.push(i)
      }
    }
  }

  recursiveUtil(a)

  return result
}

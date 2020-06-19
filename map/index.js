module.exports = (arr, cb, context) => {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(
      cb.call(context, arr[i], i, arr)
    )
  }

  return result
}

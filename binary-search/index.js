module.exports = function (arr, ele) {
  if (arr.length === 0) return -1

  let l = 0
  let r = arr.length - 1

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2)

    if (arr[mid] === ele) return mid

    if (arr[mid] > ele) {
      r = mid - 1
    } else if (arr[mid] < ele) {
      l = mid + 1
    }

  }

  return -1
}

console.log('simple binary search')

export const binarySearch = <T extends number>(array: T[], target: T) => {
  let [min, max] = [0, array.length]
  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    if (array[mid] === target) {
      return mid
    } else if (array[mid] < target) {
      min = mid + 1
    } else {
      max = mid - 1
    }
  }
  return -1
}

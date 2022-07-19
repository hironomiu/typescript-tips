const map = <T>(array: T[], fn: (item: T) => T): T[] => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result
}

const map2 = <T, U>(array: T[], fn: (item: T) => U): U[] => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result
}

type MAP3 = <T, U>(array: T[], fn: (item: T) => U) => U[]

const map3: MAP3 = (array, fn) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result
}

export const moduleD = () => {
  console.log(`---------- moduleD start map imitation ----------`)

  console.log(map([1, 2, 3, 4], (item) => item * 2))
  // @ts-expect-error
  console.log(map([1, 2, 3, 4], (item) => item.toString()))
  console.log(map2([1, 2, 3, 4], (item) => item.toString()))
  console.log(map3([1, 2, 3, 4], (item) => ++item))
  console.log(`---------- moduleD end   ----------`)
}

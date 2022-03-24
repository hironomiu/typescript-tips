type MapA = <T>(array: T[], fn: (arg: T) => T) => T[]
const mapA: MapA = (array, fn) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result
}

type MapB = <T, R>(array: T[], fn: (arg: T) => R) => R[]
const mapB: MapB = (array, fn) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result
}

type MapC<T> = (array: T[], fn: (arg: T) => T) => T[]
const mapC: MapC<number> = (array, fn) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result
}

type MapD<T, R> = (array: T[], fn: (arg: T) => R) => R[]
const mapD: MapD<number, number> = (array, fn) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result
}

const mapC2 = <T>(array: T[], fn: (arg: T) => T): T[] => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result
}

const mapD2 = <T, R>(array: T[], fn: (arg: T) => R): R[] => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]))
  }
  return result
}

export const moduleD2 = () => {
  console.log(`---------- moduleD2 start map imitation2 ----------`)
  console.log(mapA([1, 2, 3, 4], (arg) => arg * 2))
  console.log(mapB([1, 2, 3, 4], (arg) => arg * 2))
  console.log(mapC([1, 2, 3, 4], (arg) => arg * 2))
  console.log(mapD([1, 2, 3, 4], (arg) => arg * 2))
  console.log(mapC2<string | number>([1, 2, 3, 4], (arg) => arg.toString()))
  console.log(
    mapD2<number | string, string>([1, 2, 3, 4, 'a'], (arg) => arg.toString())
  )
  console.log(`---------- moduleD2 end   ----------`)
}

// function fn<T extends string>(val1: T, val2: T): T
// function fn<T extends number>(val1: T, val2: T): T
function fn<T extends string | number>(val1: T, val2: T) {
  if (typeof val1 === 'number' && typeof val2 === 'number') return val1 - val2
  if (typeof val1 === 'string' && typeof val2 === 'string') return val1 + val2
}

type FN = Parameters<typeof fn>

export const parameters = () => {
  console.log(fn(10, 20))
  console.log(fn('a', 'b'))

  const fnArgs2: FN = [10, 20]
  console.log(fn(...fnArgs2))
  const fnArgs1: FN = ['a', 'b']
  console.log(fn(...fnArgs1))
}

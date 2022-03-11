const fill = (length: number, value: string) => {
  return Array.from({ length }, () => value)
}

const concat = (...args: string[]) => {
  return args.reduce((a, c) => (a += c), '')
}
const call = <T extends (number | string)[], R>(
  fn: (...args: T) => R,
  ...args: T
): R => {
  return fn(...args)
}

export const moduleA = () => {
  console.log(`---------- moduleA start ----------`)
  console.log(call(fill, 10, 'a'))
  console.log(call(concat, 'a', 'b', 'c'))

  console.log(`---------- @ts-expect-error   ----------`)
  // @ts-expect-error
  console.log(call(fill, 10, 5))
  // @ts-expect-error
  console.log(call(concat, true, 'b', 'c'))
  console.log(`---------- moduleA end   ----------`)
}

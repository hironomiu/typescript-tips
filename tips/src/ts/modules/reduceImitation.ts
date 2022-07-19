export const reduceImitation = <T, R>(
  array: T[],
  callback: (accu: R, curr: T, index: number) => R,
  defaultValue: R
) => {
  let accu = defaultValue
  for (const [index, curr] of array.entries()) {
    accu = callback(accu, curr, index)
  }
  return accu
}

export const reduceImitation = <T>(
  array: T[],
  callback: (accu: T, curr: T) => T,
  defaultValue: T
) => {
  let accu = defaultValue
  // TODO: 型とindexを取得したケースの実装
  // for (const [curr, index] of array.entries()) {
  for (const curr of array) {
    accu = callback(accu, curr)
  }
  return accu
}

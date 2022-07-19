import { Expect, Equal, Equal2, ExpectFalse } from '..'

type FUGA<T> = T extends string ? 1 : 2

type CASES = [
  Expect<Equal<true, true>>,
  // @ts-expect-error
  Expect<Equal<1, 2>>,
  ExpectFalse<Equal<1, 2>>,
  Expect<Equal<'true', 'true'>>,
  Equal<FUGA<string>, 1>
]

const cases: CASES = [true, false, false, true, true]

const equal: Equal<'hoge', string> = false

type HOGE<T> = T
// @ts-expect-error
const equal2: Equal2<HOGE<number>> = false

const fuga: FUGA<number> = 2

export const moduleB = () => {
  console.log(`---------- moduleB start ----------`)
  console.log(cases)
  console.log(equal)
  console.log(equal2)
  console.log(`---------- moduleB end ----------`)
}

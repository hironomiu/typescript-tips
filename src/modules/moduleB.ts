import { Expect, Equal, Equal2 } from '../types'

type CASES = [
  Expect<Equal<true, true>>,
  Expect<Equal<1, 1>>,
  Expect<Equal<'true', 'true'>>
]

const cases: CASES = [true, true, true]

export const moduleB = () => {
  console.log(cases)
}

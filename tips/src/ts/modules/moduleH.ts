// Conditional Type
type SomeType = string
type MyConditionalType = SomeType extends string ? string : null
const myConditional: MyConditionalType = 'hgoe'

function someFunc<T>(value: T) {
  type A = T extends boolean
    ? 'TYPE A'
    : T extends string
    ? 'TYPE B'
    : T extends number
    ? 'TYPE C'
    : 'TYPE D'
  const someOtherFunc = (someArg: T extends boolean ? 'TYPE A' : 'TYPE B') => {
    const a: 'TYPE A' | 'TYPE B' = someArg
    return a
  }
  return someOtherFunc
}

function someFunc2<T, P>(value: T) {
  const someOtherFunc = (somArg: P extends boolean ? 'TYPE A' : 'TYPE B') => {
    return somArg
  }
  return someOtherFunc
}

const result = someFunc<boolean>(true)
const result2 = someFunc('true')
const result3 = someFunc2<string, boolean>('true')
const result4 = someFunc2<number, number>(10)

type StringOrNot<T> = T extends string ? string : never

type AUnion = string | boolean | never

// type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
/*
'a' extends 'a' | 'b' ? never : 'a' => never
'b' extends 'a' | 'b' ? never : 'b' => never
'c' extends 'a' | 'b' ? never : 'c' => 'c'
*/

const result5: ResultType = 'c'
// @ts-expect-error
const result6: ResultType = 'a'

type MyType<T> = T extends string | number ? T : never
type MyResult = MyType<string | number | boolean>

// @ts-expect-error
const myResult: MyResult = true
export const moduleH = () => {
  console.log(`---------- moduleH start Conditional Type ----------`)

  console.log(myConditional)
  console.log(result('TYPE A'))
  console.log(result2('TYPE B'))
  console.log(result3('TYPE A'))
  console.log(result4('TYPE B'))
  console.log(result5)
  console.log(result6)
  console.log(myResult)
  console.log(`---------- moduleG end   ----------`)
}

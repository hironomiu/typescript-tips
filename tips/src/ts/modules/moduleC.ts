type Diff<T, U> = T extends U ? never : T

const diff: Diff<number, string> = 1

// @ts-expect-error
const diff2: Diff<number, string> = '1'

type MyCondition<T, U, X, Y> = T extends U ? X : Y
const myCondition: MyCondition<'hoge', 'fuga', 'hoge', 'fuga'> = 'fuga'

// @ts-expect-error
const myCondition2: MyCondition<'hoge', 'fuga', 'hoge', 'fuga'> = 'hoge'
export const moduleC = () => {
  console.log(`---------- moduleC start Conditional Types ----------`)
  console.log(`${typeof diff}: ${diff}`)
  console.log(`${typeof diff2}: ${diff2}`)
  console.log(myCondition)
  console.log(myCondition2)
  console.log(`---------- moduleC end ----------`)
}

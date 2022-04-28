export const rest = () => {
  let funcA = <T extends string>(arg1: T, arg2: T, ...arg3: T[]) => {
    return (
      arg1 +
      arg2 +
      arg3.reduce((acc, cur) => (acc += `<rest>${cur}</rest>`), '')
    )
  }
  console.log(funcA('a', 'b', 'c', 'd'))
  let funcB = (arg1: string, ...arg2: string[]) => {
    return (
      arg1 +
      arg2.reduce(
        (acc: string, cur: string) => (acc += `<rest>${cur}</rest>`),
        ''
      )
    )
  }
  console.log(funcB('a', 'b', 'c', 'd'))

  funcA = funcB
  console.log(funcA('a', 'b', 'c', 'd'))
}

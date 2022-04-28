export const rest = () => {
  let funcA = (arg1: string, arg2: string, ...arg3: any) => {
    return (
      arg1 +
      arg2 +
      arg3.reduce((acc: any, cur: any) => (acc += `<rest>${cur}</rest>`), '')
    )
  }
  console.log(funcA('a', 'b', 'c', 'd'))
  let funcB = (arg1: string, ...arg2: any) => {
    return (
      arg1 +
      arg2.reduce((acc: any, cur: any) => (acc += `<rest>${cur}</rest>`), '')
    )
  }
  console.log(funcB('a', 'b', 'c', 'd'))

  funcA = funcB
  console.log(funcA('a', 'b', 'c', 'd'))
}

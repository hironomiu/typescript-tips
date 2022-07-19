const types = [
  {
    value: 'HOGE',
    label: 'ほげ',
  },
  {
    value: 'FUGA',
    label: 'ふが',
  },
  {
    value: 'PIYO',
    label: 'ぴよ',
  },
] as const

type ValuesOf<O extends Record<number, any>> = {
  [K in number]: O[K] extends { value: string } ? O[K]['value'] : never
}[number]

type Ans = ValuesOf<typeof types>

export const valuesOf = () => {
  const v1: Ans = 'HOGE'
  console.log(v1)
  const v2: Ans = 'FUGA'
  console.log(v2)
  const v3: Ans = 'PIYO'
  console.log(v3)
  // @ts-expect-error
  const v4: Ans = 'AAAA'
  console.log(v4)
}

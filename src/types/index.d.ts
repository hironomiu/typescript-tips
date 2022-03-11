// https://github.com/type-challenges/type-challenges
// https://github.com/type-challenges/type-challenges/blob/master/utils/index.d.ts
export type Expect<T extends true> = T
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false

export type Equal2<X> = <T>() => T extends X ? 1 : 2

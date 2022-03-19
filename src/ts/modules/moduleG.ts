// Mapped Types

type Prop = 'propA' | 'propB'

type MyMappedType = {
  [P in Prop]: boolean
}
const myMapped: MyMappedType = {
  propA: true,
  propB: false,
}

type MyMappedType2 = {
  [P in Prop]: P
}
const myMapped2: MyMappedType2 = {
  propA: 'propA',
  propB: 'propB',
}

type MyMappedType3<Prop extends string | number | symbol> = {
  [P in Prop]: P
}

type MyNewType = MyMappedType3<'propA' | 'propB'>
const myNew: MyNewType = {
  propA: 'propA',
  propB: 'propB',
}

type MyMappedType4<T> = {
  [P in keyof T]: T[P]
}
type MyNewType2 = MyMappedType4<{ a: 'a'; b: 'b' }>
const myNew2: MyNewType2 = {
  a: 'a',
  b: 'b',
}

type MyMappedType5<T> = {
  readonly [P in keyof T]: T[P]
}
type MyNewType3 = MyMappedType5<{ a: 'a'; b: 'b' }>
const myNew3: MyNewType3 = {
  a: 'a',
  b: 'b',
}

type MyMappedType6<T> = {
  [P in keyof T]?: T[P]
}
type MyNewType4 = MyMappedType6<{ a: 'a'; b: 'b' }>
const myNew4: MyNewType4 = {
  a: 'a',
}

type MyMappedType7<T> = {
  [P in keyof T]: T[P] | null
}
type MyNewType5 = MyMappedType7<{ a: 'a'; b: 'b' }>
const myNew5: MyNewType5 = {
  a: null,
  b: null,
}

type MyMappedType8<T> = {
  [P in keyof T]: T[P]
}
type MyNewType6 = MyMappedType8<{ a: 'c'; b: 'd' }>
const myNew6: MyNewType6 = {
  a: 'c',
  b: 'd',
}

type Pick1<T, Prop extends keyof T> = {
  [P in Prop]: T[P]
}
type MyNewType7 = Pick1<{ a: 'a'; b: 'b' }, 'a' | 'b'>
const myNew7: MyNewType7 = {
  a: 'a',
  b: 'b',
}

type Record1<K extends keyof any, T> = {
  [P in K]: T
}
const someRecord: Record1<string, number> = {}
someRecord.apples = 10
someRecord.oranges = 10
someRecord[1] = 20

// Mapped Typesではないパターン(基本はMapped Typesを利用する)
interface Record2 {
  [key: string | number]: number
}
const someRecord2: Record2 = {}
someRecord2.apples = 10
someRecord2.oranges = 10
someRecord2[2] = 10

export const moduleG = () => {
  console.log(`---------- moduleG start Mapped Types ----------`)
  console.log(myMapped)
  console.log(myMapped2)
  console.log(myNew)
  console.log(myNew2)
  console.log(myNew3)
  console.log(myNew4)
  console.log(myNew5)
  console.log(myNew6)
  console.log(myNew7)
  console.log(someRecord)
  console.log(`---------- moduleG end   ----------`)
}

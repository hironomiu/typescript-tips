type Type1 = {
  id: number
  name: string
}

type Type2 = {
  name: string
  age: number
}

const type1: Type1 = {
  id: 1,
  name: 'hoge',
}

const type2: Type2 = {
  name: 'fuga',
  age: 30,
}

const type1And2: Type1 & Type2 = {
  id: 2,
  name: 'piyo',
  age: 30,
}
export const moduleE = () => {
  console.log('---------- moduleE start intersection ----------')
  console.log(type1)
  console.log(type2)
  console.log(type1And2)
  console.log('---------- moduleE end ----------')
}

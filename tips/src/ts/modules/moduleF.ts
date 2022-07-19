// https://www.typescriptlang.org/docs/handbook/utility-types.html
// Partial<Type>
type Person = {
  firstName: string
  lastName: string
  age: number
}

const taro1: Partial<Person> = {
  firstName: 'Taro',
}

const taro2: Partial<Person> = {
  lastName: 'Sato',
}

const taro3: Partial<Person> = {
  age: 30,
}

const taro4: Partial<Person> = {
  firstName: 'Taro',
  lastName: 'Sato',
}

const taro5: Partial<Person> = {
  firstName: 'Taro',
  lastName: 'Sato',
  age: 30,
}

// Required<Type>

type User = {
  name?: string
  email?: string
}

const user: Required<User> = {
  name: 'hoge',
  email: 'hoge@hoge.com',
}

// Property 'name' is missing in type '{ email: string; }' but required in type 'Required<User>'.ts(2741)
// @ts-expect-error
const user2: Required<User> = {
  email: 'hoge',
}

// Readonly<Type>
type Todo = {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'todo',
}

// Cannot assign to 'title' because it is a read-only property.ts(2540)
// @ts-expect-error
todo.title = 'task'

// Record<Keys,Type>

type CatInfo = {
  age: number
  breed: string
}

type CatName = 'miffi' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  miffi: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
}

const name = ['a', 'b', 'c'] as const

type Name = typeof name[number]

const hoge: Record<Name, CatInfo> = {
  a: { age: 10, breed: 'hoge' },
  b: { age: 10, breed: 'hoge' },
  c: { age: 10, breed: 'hoge' },
}

// Pick<Type>

type Task = {
  title: string
  description: string
  completed: boolean
}

type TaskPreview = Pick<Task, 'title' | 'completed'>
const preview: TaskPreview = {
  title: 'title',
  completed: true,
}

type TaskPreview2 = Pick<Task, 'title' | 'description'>
const preview2: TaskPreview2 = {
  title: 'title2',
  description: 'description2',
}

// Omit<Type,Keys>

type Todo2 = {
  title: string
}

export const moduleF = () => {
  console.log('---------- moduleF start Utility Types ----------')

  console.log(taro1)
  console.log(taro2)
  console.log(taro3)
  console.log(taro4)
  console.log(taro5)
  console.log(user)
  console.log(user2)
  console.log(todo)
  console.log(cats)
  console.log(preview)
  console.log(preview2)
  console.log('---------- moduleF end ----------')
}

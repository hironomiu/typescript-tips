// Partial
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

// Pick

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

// Required

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

export const moduleF = () => {
  console.log('---------- moduleF start Utility Types ----------')

  console.log(taro1)
  console.log(taro2)
  console.log(taro3)
  console.log(taro4)
  console.log(taro5)
  console.log(user)
  console.log(user2)
  console.log('---------- moduleF end ----------')
}

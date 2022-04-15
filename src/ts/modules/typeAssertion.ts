type Todo = {
  id: number
  title: string
  body: string
}
export const typeAssertion = () => {
  const todos: Todo[] | undefined = []
  let todo = todos.find((todo) => todo.id === 1) as Todo
  console.log('undefined', todo)
  todos.push({ id: 1, title: 'title', body: 'body' })
  todo = todos.find((todo) => todo.id === 1) as Todo
  console.log('as Todo', todo)
  todo = <Todo>todos.find((todo) => todo.id === 1)
  console.log('generics <Todo>', todo)
}

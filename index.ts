import axios from "axios"

// interfaces
interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

// class implements interfaces
class TODO implements ITodo {
  constructor(todo: ITodo) {
    this.userId = todo.userId
    this.id = todo.id
    this.title = todo.title
    this.completed = todo.completed
  }

  public userId: number
  public id: number
  public title: string
  public completed: boolean

  public printTodo = () => {
    console.log(`
      id: ${this.id}
      title: ${this.title}
      completed: ${this.completed}
    `)
  }
}

// simple ajax pattern
const getFunc: () => Promise<ITodo> = async () => {
  const startTime = Date.now()
  console.log("start")
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

  const endTime = Date.now()
  console.log("done during: %d ms", endTime - startTime)
  return res.data
}

// IIFE
(async () => {
  const res = new TODO(await getFunc())

  res.printTodo()
})()


// Lazyinit pattern
let lazyInit: number | boolean = false;

for (let i = 0; i < 3; i++) {
  console.log(`inside forloop ${lazyInit}`)
  lazyInit = i
}

console.log(`outside of loop ${lazyInit}`)

// type inference with functions
type addFunction = (a: number | string, b: number | string) => number | string

const add:addFunction = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }

  return `${a}${b}`
}

console.log(`add 1 + 2 = ${add(1, 2)}`) // return 3
console.log(`add 1 + 2 = ${add('1', 2)}`) // return 12
console.log(`add 1 + 2 = ${add(1, '2')}`) // return 12
console.log(`add 1 + 2 = ${add("1", '2')}`) // return 12
// console.log(`add 1 + 2 = ${add(false, '2')}`) // compile error

// object literals
const obj = {
  name: 'alex',
  age: 20,
  props: {
    propA: 'a',
    propB: 3
  }
}

const { age }: { age: number } = obj

// destructive
const { props: { propA, propB } }: { props: { propA: string, propB: number } } = obj


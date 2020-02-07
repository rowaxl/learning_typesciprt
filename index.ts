import axios from "axios"

interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

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

const getFunc: () => Promise<ITodo> = async () => {
  const startTime = Date.now()
  console.log("start")
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1")

  const endTime = Date.now()
  console.log("done during: %d ms", endTime - startTime)
  return res.data
}

(async () => {
  const res = new TODO(await getFunc())

  res.printTodo()
})()

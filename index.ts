import axios from "axios"

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res => {
  const todo: Todo = res.data

  console.log(todo)
})

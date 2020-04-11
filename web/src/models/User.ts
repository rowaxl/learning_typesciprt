import axios, { AxiosResponse } from 'axios'

interface IUserProp {
  id?: number
  name?: string
  age?: number
}

type Callback = () => void

export class User {
  // events have many keys, and various number of callbacks
  private events: { [key: string]: Callback[] } = {}

  constructor(private data: IUserProp) { }

  get(prop: 'id'| 'name'| 'age'): (string|number) {
    return this.data[prop]
  }

  set(updates: IUserProp): void {
    Object.assign(this.data, updates)
  }

  on(eventName: string, callback: Callback): void {
    // this.events[eventName] should be Callback[] or undefined
    const handlers = this.events[eventName] || []

    // assign new callback and update events
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName]

    // if theres no handler in events, do nothing
    if (!handlers || handlers.length === 0) return

    // execute all handler
    handlers.forEach((callback: Callback) => {
      callback()
    })
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data)
      })
  }

  save(): void {
    const id = this.get('id')

    if (id) {
      axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data)
    } else {
      axios.post('http://localhost:3000/users', this.data)
    }
  }
}

import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing'

interface IUserProp {
  id?: number
  name?: string
  age?: number
}

type TUserProp = 'id'| 'name'| 'age'

export class User {
  public events: Eventing = new Eventing()

  // integration option #1: events to arg of constructor
  // constructor(private data, private event)

  // integration option #2: only get args of event and set props later
  /**
   * static fromData(data) { 
   *  const user = new User(new Eventing());
   *  user.set(data)
   *  return user
   * }
   * constructor(event)
  */ 
  constructor(private data: IUserProp) { }

  get(prop: TUserProp): (string|number) {
    return this.data[prop]
  }

  set(updates: IUserProp): void {
    Object.assign(this.data, updates)
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

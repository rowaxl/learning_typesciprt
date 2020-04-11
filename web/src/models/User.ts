import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'

interface IUserProp {
  id?: number
  name?: string
  age?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<IUserProp> = new Sync(rootUrl)
  public attrs: Attributes<IUserProp> = new Attributes(this.data)

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
  constructor(private data: IUserProp) {}
}

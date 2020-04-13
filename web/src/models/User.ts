import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'

interface UserProps {
  id?: number
  name?: string
  age?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync(rootUrl)
  public attributes: Attributes<UserProps> // lazy init

  // Eventing integration option #1: events to arg of constructor
  // constructor(private data, public event) {}

  // Eventing integration option #2: only get args of event and set props later
  /**
   * static fromData(data) { 
   *  const user = new User(new Eventing());
   *  user.set(data)
   *  return user
   * }
   * constructor(event)
  */
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs)
  }

  // directly delegated from composed subclasses
  get get() {
    return this.attributes.get
  }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }
}

import { UserProps } from '../interfaces'
import { User } from '../models/User'
import { View } from './View'

export class UserShow extends View<User, UserProps> {
  constructor(
    public parent: Element,
    public model: User
  ) {
    super(parent, model)
  }

  eventsMap(): { [key:string]: () => void } {
    return {}
  }

  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <div class="user-name">User Name: ${this.model.get('name')}</div>
        <div class="user-age">User Age : ${this.model.get('age')}</div>
      </div>
    `
  }
}

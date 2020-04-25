import { UserProps } from '../interfaces'
import { User } from '../models/User'
import { UserForm } from './UserForm'
import { UserShow } from './UserShow'
import { View } from './View'

export class UserEdit extends View<User, UserProps> {
  regionsMap = (): { [key: string]: string } => {
    return {
      userShow: '#user-show',
      userForm: '#user-form',
    }
  }

  beforeRender() {
    // do nesting with regionsMap and render it
    new UserShow(this.regions['userShow'], this.model).render()
    new UserForm(this.regions['userForm'], this.model).render()
  }

  template(): string {
    return `
      <div>
        <div id="user-show"></div>
        <div id="user-form"></div>
      </div>
    `
  }

}

import { UserProps } from '../interfaces'
import { User } from '../models/User'
import { View } from './View'

export class UserForm extends View<UserProps> {
  constructor(
    public parent: Element,
    public model: User
  ) {
    super(parent, model)
  }

  // mappping like react onClick function
  eventsMap(): { [key:string]: () => void } {
    return {
      'click:.button-set-name': this.onSetNameClick,
      'click:.button-set-age': this.onSetAgeClick
    }
  }

  public onSetNameClick = (): void => {
    const input = this.parent.querySelector('#input-user-name')

    if (input) {
      this.model.set({ name: (input as HTMLInputElement).value })
    }

  }

  public onSetAgeClick = (): void =>  {
    this.model.setRandomAge()
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>

        <div class="user-name">User Name: ${this.model.get('name')}</div>
        <div class="user-age">User Age : ${this.model.get('age')}</div>
        <input id="input-user-name" type="text" />
        <button class="button-set-name">Set Name</button>
        <button class="button-set-age">Set Random Age</button>
        <button class="button-save">Save</button>
      </div>
    `
  }

}
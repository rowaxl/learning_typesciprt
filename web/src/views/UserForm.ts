import { UserProps } from '../interfaces'
import { User } from '../models/User'
import { View } from './View'

export class UserForm extends View<User, UserProps> {
  constructor(
    public parent: Element,
    public model: User
  ) {
    super(parent, model)
  }

  // mappping like react onClick function
  eventsMap = (): { [key:string]: () => void } => {
    return {
      'click:.button-set-name': this.onSetNameClick,
      'click:.button-set-age': this.onSetAgeClick,
      'click:.button-save': this.onSaveClick,
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

  public onSaveClick = (): void => {
    this.model.save()
  }

  template(): string {
    return `
      <div>
        <input id="input-user-name" autocomplete="off" placeholder="${this.model.get('name')}" />
        <button class="button-set-name">Set Name</button>
        <button class="button-set-age">Set Random Age</button>
        <button class="button-save">Save</button>
      </div>
    `
  }

}
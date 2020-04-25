import { User } from '../models/User'

export class UserForm {
  constructor(
    public parent: Element,
    public model: User
  ) {
    this.bindModel()
  }

  bindModel = (): void => {
    this.model.on('change', () => {
      this.render()
    })
  }

  // mappping like react onClick function
  private eventsMap(): { [key:string]: () => void } {
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

  private template(): string {
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

  // find all element inside in fragemnt and mapping events.
  private bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')

      fragment.querySelectorAll(selector)
        .forEach((element: Element) => {
          element.addEventListener(eventName, eventsMap[eventKey])
        })
    }
  }

  // parse string to HTML and insert event
  public render(): void {
    // empty parent element
    this.parent.innerHTML = '';

    // create html element and rendering template
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)

    // append to parent to show
    this.parent.append(templateElement.content)
  }
}
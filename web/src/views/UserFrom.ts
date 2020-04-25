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
      'click:.button-save': this.onSaveButtonClick,
      'click:.button-set-age': this.onSetAgeClick
    }
  }

  public onSaveButtonClick = (): void => {
    console.log('clicked!')
  }

  public onSetAgeClick = (): void =>  {
    this.model.setRandomAge()
  }

  private template(): string {
    return `
      <div>
        <h1>User Form</h1>

        <div class="user_name">User Name: ${this.model.get('name')}</div>
        <div class="user_age">User Age : ${this.model.get('age')}</div>
        <input type="text" />
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
    // create html element and rendering template
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)

    // append to parent to show
    this.parent.append(templateElement.content)
  }
}
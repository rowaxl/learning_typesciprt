export class UserForm {
  constructor(public parent: Element) { }

  // mappping like react onClick function
  private eventsMap(): { [key:string]: () => void } {
    return {
      'click:button': this.onButtonClick
    }
  }

  public onButtonClick(): void {
    console.log('clicked!')
  }

  private template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input type="text" />
        <button>Click</button>
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
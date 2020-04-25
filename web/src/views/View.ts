import { Model } from '../models/Model'

export abstract class View<T> {
  constructor(
    public parent: Element,
    public model: Model<T>,
  ) {
    this.bindModel()
  }

  bindModel = (): void => {
    this.model.on('change', () => {
      this.render()
    })
  }

  abstract template(): string
  abstract eventsMap(): { [key:string]: () => void }

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
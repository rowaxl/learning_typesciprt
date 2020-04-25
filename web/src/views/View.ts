import { Model } from '../models/Model'

// option: export abstract class View<T extends Model<K>, K>
// and child extends View<User, UserProps>
export abstract class View<T extends Model<K>, K> {
  public regions: { [key: string]: Element } = {}

  constructor(
    public parent: Element,
    public model: T,
  ) {
    this.bindModel()
  }

  bindModel = (): void => {
    this.model.on('change', () => {
      this.render()
    })
  }

  abstract template(): string
  eventsMap(): { [key: string]: () => void } {
    return {}
  }

  public regionsMap = (): { [key: string]: string } => { return {} }

  public mapRegions = (fragment: DocumentFragment): void => {
    const regionsMap = this.regionsMap()

    for (let key in regionsMap) {
      const selector = regionsMap[key]
      const element = fragment.querySelector(selector)

      if (element) {
        this.regions[key] = element
      }
    }
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

  beforeRender(): void {}

  // parse string to HTML and insert event
  public render(): void {
    // empty parent element
    this.parent.innerHTML = '';

    // create html element and rendering template
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()

    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)

    this.beforeRender()

    // append to parent to show
    this.parent.append(templateElement.content)
  }
}
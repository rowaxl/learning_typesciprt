type Callback = () => void

export class Eventing {
  // events have many keys, and various number of callbacks
  private events: { [key: string]: Callback[] } = {}

  on = (eventName: string, callback: Callback): void => {
    // this.events[eventName] should be Callback[] or undefined
    const handlers = this.events[eventName] || []

    // assign new callback and update events
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName]

    // if theres no handler in events, do nothing
    if (!handlers || handlers.length === 0) return

    // execute all handler
    handlers.forEach((callback: Callback) => {
      callback()
    })
  }
}
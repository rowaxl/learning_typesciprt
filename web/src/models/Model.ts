import { AxiosPromise, AxiosResponse } from 'axios'
import { HasID } from '../interfaces'

export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K]
  getAll(): T
  set(updates: T): void
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise
}

export interface Events {
  on(eventName: string, callback: () => void): void
  trigger(eventName: string): void
}


export class Model<T extends HasID> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) { }

  // directly delegated from composed subclasses
  get get() {
    return this.attributes.get
  }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  set(updates: T): void {
    this.attributes.set(updates)
    this.events.trigger('change')
  }

  fetch = () => {
    const id: number | undefined = this.attributes.get('id')

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch with invalid ID')
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.attributes.set(res.data)
    })
  }

  save = (): void => {
    console.log(this.attributes.getAll())
    this.sync.save(this.attributes.getAll())
      .then((res: AxiosResponse) => {
        this.events.trigger('saved')
      })
      .catch((error: Error) => {
        console.error(error)
      })
  }
}
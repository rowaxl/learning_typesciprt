import { Eventing } from './Eventing'
import axios, { AxiosResponse } from 'axios'

export class Collection<T, K> {
  models: T[] = []
  events: Eventing = new Eventing()

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => T
  ) { }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  public fetch = (): void => {
    axios.get(this.rootUrl).then(
      (res: AxiosResponse) => {
        res.data.forEach((value: K) => {
          const record = this.deserialize(value)
          this.models.push(record)
        });

        this.events.trigger('change')
      })
  }
}
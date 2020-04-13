import { User } from './User'
import { Eventing } from './Eventing'
import { UserProps } from '../interfaces'
import axios, { AxiosResponse } from 'axios'

export class Collection {
  public models: User[] = []
  public events: Eventing = new Eventing()

  constructor(public rootUrl: string) { }

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  public fetch = (): void => {
    axios.get(this.rootUrl).then(
      (res: AxiosResponse) => {
        res.data.forEach((value: UserProps) => {
          const user = User.buildUser(value)
          this.models.push(user)
        });

        this.events.trigger('change')
      })
  }
}
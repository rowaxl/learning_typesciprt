import { name, address } from 'faker'
import { IMappable } from './IMapperble'

export class User implements IMappable {
  public name: string
  public location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = name.findName()

    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.latitude())
    }
  }
}
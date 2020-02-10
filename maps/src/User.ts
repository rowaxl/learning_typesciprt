import { name, address } from 'faker'

export class User {
  public name: string
  public location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = name.findName()
    this.location.lat = parseInt(address.latitude())
    this.location.lng = parseInt(address.latitude())
  }
}
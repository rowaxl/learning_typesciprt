import { company, address } from 'faker'
import { IMappable } from './IMapperble'

export class Company implements IMappable {
  public name: string
  public catchPhrase: string
  public location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = company.companyName()
    this.catchPhrase = company.catchPhrase()

    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.latitude())
    }
  }
}
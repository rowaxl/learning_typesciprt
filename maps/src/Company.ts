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

  content = () => `
<div>
<h2>Company</h2>
<h3>${this.name}</h3>
<p>${this.catchPhrase}</p>
</div>
`
}
import { User } from './User'
import { Company } from './Company'

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    // render google map
    this.googleMap = new google.maps.Map(
      document.getElementById(divId),
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      }
    )
  }

  public addMarker(mappable: User | Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      label: mappable.name
    })
  }
}
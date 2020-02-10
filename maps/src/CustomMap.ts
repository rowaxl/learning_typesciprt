import { IMappable } from './IMapperble'

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

  public addMarker(mappable: IMappable) {
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
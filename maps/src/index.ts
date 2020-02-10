import { User } from './User'
import { Company } from './Company'

const newUser = new User()
console.log('user: ', newUser)

const newCompany = new Company()
console.log('company: ', newCompany)

// render google map
new google.maps.Map(document.getElementById('map'), {
  zoom: 5,
  center: {
    lat: newUser.location.lat,
    lng: newUser.location.lng
  }
})

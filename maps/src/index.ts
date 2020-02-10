import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const newUser = new User()
console.log('user: ', newUser)

const newCompany = new Company()
console.log('company: ', newCompany)

const googleMap = new CustomMap('map')
googleMap.addMarker(newUser)
googleMap.addMarker(newCompany)
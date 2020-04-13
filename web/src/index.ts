import { User } from './models/User'

const user = new User({ name: 'Niki', age: 23 })

console.log(user.get('name'))
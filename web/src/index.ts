import { Collection } from './models/Collection'
import { User } from './models/User'
import { UserProps } from './interfaces'

const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  User.buildUser
)

collection.on('change', () => {
  console.log(collection.models)
})

collection.fetch()
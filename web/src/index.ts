import { Collection } from './models/Collection'
import { User } from './models/User'

const collection = new Collection(
  'http://localhost:3000/users',
  User.buildUser
)

collection.on('change', () => {
  console.log(collection.models)
})

collection.fetch()
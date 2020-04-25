import { UserProps } from './interfaces'
import { User } from './models/User'
import { Collection } from './models/Collection'

import { UserEdit } from './views/UserEdit'
import { UserList } from './views/UserList'

const rootElement = document.getElementById('root')
const user = User.buildUser({ name: 'Blare', age: 31 })

if (rootElement) {
  const userEdit = new UserEdit(rootElement, user)
  userEdit.render()
} else {
  throw new Error('Root element not found')
}

const users = new Collection('http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json)
  })

users.on('change', () => {
  console.log('users changed')
  const userCollection = document.getElementById('users')

  if (userCollection) {
    new UserList(userCollection, users).render()
  }
})

users.fetch()

import { UserEdit } from './views/UserEdit'
import { User } from './models/User'

const rootElement = document.getElementById('root')
const user = User.buildUser({ name: 'Blare', age: 31 })

if (rootElement) {
  const userEdit = new UserEdit(rootElement, user)
  userEdit.render()
} else {
  throw new Error('Root element not found')
}

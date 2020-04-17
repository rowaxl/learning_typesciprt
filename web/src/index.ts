import { UserForm } from './views/UserFrom'
import { User } from './models/User'

const rootElement = document.getElementById('root')
const user = User.buildUser({ name: 'Blare', age: 31 })

if (rootElement) {
  const userForm = new UserForm(rootElement, user)

  userForm.render()
}

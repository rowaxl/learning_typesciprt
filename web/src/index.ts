import { UserForm } from './views/UserFrom'

const rootElement = document.getElementById('root')

if (rootElement) {
  const userForm = new UserForm(rootElement)

  userForm.render()
}

import { User } from './models/User'

const user1 = User.buildUser({ id: 1 })
const user2 = User.buildUser({ name: 'Michael', age: 30 })

user2.on('change', () => {
  console.log('changed')
})

user2.set({ age: 31 })

user2.save()
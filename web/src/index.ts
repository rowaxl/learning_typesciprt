import { User } from './models/User'

const user = new User({ id: 1 })

user.on('change', () => {
  console.log('user changed', user.attributes)
})

user.on('saved', () => {
  console.log('user saved', user.attributes)
})

// user.fetch()

user.set({ name: 'David Web', age: 35 })

user.save()
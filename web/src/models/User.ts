import { Model } from './Model'
import { UserProps } from '../interfaces'
import { Attributes } from './Attributes'
import { APISync } from './APISync'
import { Eventing } from './Eventing'

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new APISync<UserProps>(rootUrl),
      new Eventing()
    )
  }
}

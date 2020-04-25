import { CollectionView } from "./CollectionView";
import { User } from "../models/User";
import { UserProps } from "../interfaces";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem = (model: User, wrapper: Element) => {
    new UserShow(wrapper, model).render()
  }
}
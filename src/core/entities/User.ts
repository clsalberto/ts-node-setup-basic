import { Entity } from './Entity'

export interface UserProps {
  name: string
  email: string
  password: string
  avatar?: string
  createdAt?: Date
  updatedAt?: Date
  active?: boolean
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id)
  }

  static create(props: UserProps, id?: string) {
    return new User(props, id)
  }
}

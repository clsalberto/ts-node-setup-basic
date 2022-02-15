import crypto from 'crypto'

import { Entity } from './entity'

export interface UserProps {
  avatar?: string
  name: string
  email: string
  passwordHash: string
  token?: string
  expiresIn?: Date
  createdIn?: Date
  activated?: boolean
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id)
  }

  static create(props: UserProps, id?: string) {
    const now = new Date()

    const user = new User(
      {
        ...props,
        createdIn: new Date(),
        expiresIn: new Date(now.setHours(now.getHours() + 6)),
        token: crypto.randomBytes(20).toString('hex'),
        activated: props.activated ?? false
      },
      id
    )

    return user
  }
}

import { hashSync } from 'bcryptjs'
import crypto from 'crypto'

import { Entity } from './entity'

export interface UserProps {
  imageId?: string
  name: string
  email: string
  password: string
  token: string
  roleId: string
  expiresIn: Date
  createdIn?: Date
  active?: boolean
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id)
  }

  static create(props: UserProps, id?: string) {
    const user = new User(props, id)

    return user
  }
}

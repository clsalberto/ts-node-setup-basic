import { table } from 'console'

import { IAppError } from '~/core/contracts'

export class UserAlreadyExists implements IAppError {
  type: string
  name: string
  status: number
  message: string
  metadata?: object
  stack?: string

  constructor() {
    this.type = 'error'
    this.status = 401
    this.name = 'UserAlreadyExists'
    this.message = 'User already exists'
  }
}

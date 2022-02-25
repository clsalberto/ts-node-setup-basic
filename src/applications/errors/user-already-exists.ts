import { IAppError } from '~/applications/contracts'

export class UserAlreadyExists implements IAppError {
  name: string
  code: number
  message: string
  metadata?: object
  stack?: string

  constructor() {
    this.code = 401
    this.name = 'UserAlreadyExists'
    this.message = 'User already exists'
  }
}

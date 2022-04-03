import { AppError } from '~/core/contracts'

export class UserAlreadyExists implements AppError {
  type: string
  statusCode: number
  data?: object
  name: string
  message: string
  stack?: string
  cause?: Error

  constructor() {
    this.type = 'error'
    this.statusCode = 401
    this.name = 'UserAlreadyExists'
    this.message = 'User already exists'
  }
}

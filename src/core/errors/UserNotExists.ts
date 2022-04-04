import { AppError } from '~/core/contracts'

export class UserNotExists implements AppError {
  type: string
  statusCode: number
  data?: object
  name: string
  message: string
  stack?: string
  cause?: Error

  constructor() {
    this.type = 'error'
    this.statusCode = 400
    this.name = 'UserNotExists'
    this.message = 'User does not exist'
  }
}

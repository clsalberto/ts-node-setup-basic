import { IAppError } from '~/core/contracts'

export class AcountAlreadyExists implements IAppError {
  type: string
  name: string
  status: number
  message: string
  metadata?: object
  stack?: string

  constructor() {
    this.type = 'error'
    this.status = 401
    this.name = 'AcountAlreadyExists'
    this.message = 'Acount already exists'
  }
}

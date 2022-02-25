import { IAppError } from '~/applications/contracts'

export class AcountAlreadyExists implements IAppError {
  name: string
  code: number
  message: string
  metadata?: object
  stack?: string

  constructor() {
    this.code = 401
    this.name = 'AcountAlreadyExists'
    this.message = 'Acount already exists'
  }
}

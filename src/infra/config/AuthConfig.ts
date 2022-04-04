import { get } from 'env-var'

export class AuthConfig {
  public static readonly JWT_SECRET: string = get('JWT_SECRET')
    .required()
    .asString()
}

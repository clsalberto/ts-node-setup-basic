import { get } from 'env-var'

export class ServerConfig {
  public static readonly APP_NAME: string = get('APP_NAME')
    .required()
    .asString()

  public static readonly APP_URL: string = get('APP_URL').required().asString()

  public static readonly FRONT_URL: string = get('FRONT_URL')
    .required()
    .asString()

  public static readonly NODE_ENV: string = get('NODE_ENV')
    .required()
    .asString()

  public static readonly PORT: number = get('PORT').required().asPortNumber()
}

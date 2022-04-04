import { get } from 'env-var'

export class MailConfig {
  public static readonly MAIL_HOST: string = get('MAIL_HOST')
    .required()
    .asString()

  public static readonly MAIL_PORT: number = get('MAIL_PORT')
    .required()
    .asPortNumber()

  public static readonly MAIL_USER: string = get('MAIL_USER')
    .required()
    .asString()

  public static readonly MAIL_PASS: string = get('MAIL_PASS')
    .required()
    .asString()
}

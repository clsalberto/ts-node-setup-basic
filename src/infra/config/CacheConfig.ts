import { get } from 'env-var'

export class CacheConfig {
  public static readonly CACHE_DB_URL: string = get('CACHE_DB_URL')
    .required()
    .asString()

  public static readonly CACHE_EXPIRATION: number = get('CACHE_EXPIRATION')
    .required()
    .asInt()
}

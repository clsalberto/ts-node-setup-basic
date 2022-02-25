import { CacheProvider } from '~/applications/contracts'

import { redis } from '~/infrastructure/database'

export class RedisCacheProvider implements CacheProvider<unknown> {
  async set(key: string, value: unknown, expiredIn?: number): Promise<void> {
    redis.set(
      key,
      JSON.stringify(value),
      'EX',
      expiredIn ?? parseInt(process.env.CACHE_EXPIRATION)
    )
  }

  async get(key: string): Promise<unknown> {
    const cacheResponse = await redis.get(key)
    return JSON.parse(cacheResponse)
  }
}

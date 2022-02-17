import { User } from '~/domain/entities/user'

import { CacheProvider } from '~/applications/contracts'

interface CacheData {
  key: string
  value: User[]
}

export class FakeCacheProvider implements CacheProvider<User[]> {
  private data: CacheData[] = []

  async set(key: string, value: User[]): Promise<void> {
    const cache = { key, value }
    this.data.push(cache)
  }

  async get(key: string): Promise<User[]> {
    const cache = this.data.find(c => c.key === key)
    return cache?.value
  }
}

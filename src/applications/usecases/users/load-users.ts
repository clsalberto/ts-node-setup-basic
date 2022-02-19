import { User } from '~/domain/entities/user'

import { CacheProvider, UsersRepository } from '~/applications/contracts'

export class LoadUserUseCase {
  private cacheKey: string

  constructor(
    private usersRepository: UsersRepository,
    private cacheProvider: CacheProvider<User[]>
  ) {
    this.cacheKey = 'users:load-user'
  }

  async execute(): Promise<User[]> {
    const cache = await this.cacheProvider.get(this.cacheKey)

    if (cache) {
      return cache
    }

    const users = await this.usersRepository.load()

    await this.cacheProvider.set(this.cacheKey, users)

    return users
  }
}

import { User } from '~/domain/entities/user'

import { CacheProvider, UsersRepository } from '~/applications/contracts'

export class LoadUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private cacheProvider: CacheProvider<User[]>
  ) {}

  async execute(): Promise<User[]> {
    const cache = await this.cacheProvider.get('load-user')

    if (cache) {
      return cache
    }

    const users = await this.usersRepository.load()

    await this.cacheProvider.set('load-user', users)

    return users
  }
}

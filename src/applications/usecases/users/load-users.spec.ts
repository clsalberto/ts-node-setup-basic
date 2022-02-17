import { LoadUserUseCase } from '~/applications/usecases'

import { FakeCacheProvider } from '~/infra/providers'
import { FakeUsersRepository } from '~/infra/repositories'

describe('Load Users Use Case', () => {
  it('should be able to list users', async () => {
    const usersRepository = new FakeUsersRepository()
    const cacheProvider = new FakeCacheProvider()
    const sut = new LoadUserUseCase(usersRepository, cacheProvider)

    const response = await sut.execute()

    expect(response).toBeTruthy()
  })
})

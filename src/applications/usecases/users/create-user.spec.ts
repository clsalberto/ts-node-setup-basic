import { CreateUserUseCase } from '~/applications/usecases'

import { FakeUsersRepository } from '~/infra/repositories'

describe('Create User Use Case', () => {
  it('should be able to create a new user', async () => {
    const usersRepository = new FakeUsersRepository()
    const sut = new CreateUserUseCase(usersRepository)

    const response = await sut.execute({
      name: 'Giovanna Liz',
      email: 'gioliz.og@outlook.com',
      password: 'gl3110og'
    })

    expect(response).toBeTruthy()
  })
})

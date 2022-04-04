import { CreateUserUseCase } from '~/core/usecases'

import { PrismaUsersRepository } from '~/infra/repositories'

import { CreateUserController } from '~/app/controllers'

export const createUserFactory = () => {
  const usersRepository = new PrismaUsersRepository()
  const createUserUseCase = new CreateUserUseCase(usersRepository)
  const createUserController = new CreateUserController(createUserUseCase)
  return createUserController
}

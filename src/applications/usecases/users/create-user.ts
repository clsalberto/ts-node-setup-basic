import { User } from '~/domain/entities/user'

import { UserRequestDto, UsersRepository } from '~/applications/contracts'

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: UserRequestDto) {
    const userExists = await this.usersRepository.findByEmail(email)

    if (userExists) {
      throw new Error('User already exists')
    }

    const user = await this.usersRepository.create(
      User.create({ name, email, password })
    )

    return user
  }
}

import { hash } from 'bcryptjs'

import { User } from '~/domain/entities/user'

import { UsersRepository } from '~/applications/contracts'

export interface CreateUserRequest {
  name: string
  email: string
  password: string
}
export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: CreateUserRequest) {
    const userExists = await this.usersRepository.findByEmail(email)

    if (userExists) {
      throw new Error('User already exists')
    }

    const passwordHash = await hash(password, 8)

    const user = await this.usersRepository.create(
      User.create({ name, email, passwordHash })
    )

    return user
  }
}

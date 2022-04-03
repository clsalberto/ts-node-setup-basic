import { hash } from 'bcryptjs'

import { UseCase, UsersRepository } from '~/core/contracts'
import { User, UserProps } from '~/core/entities'
import { UserAlreadyExists } from '~/core/errors'

export class CreateUserUseCase implements UseCase<UserProps, User> {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: UserProps): Promise<User> {
    const { email, password } = data

    const userExists = await this.usersRepository.findByEmail(email)

    if (userExists) {
      throw new UserAlreadyExists()
    }

    const passwordHash = await hash(password, 10)

    const user = await this.usersRepository.create({
      ...data,
      password: passwordHash
    })

    // TODO: Send email to user using queue

    return user
  }
}

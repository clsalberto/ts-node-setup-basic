import { UserRequestDto, UsersRepository } from '~/applications/contracts'

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(id: string, { name, email, password }: UserRequestDto) {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new Error('User not found')
    }

    const updatedUser = await this.usersRepository.update(user, {
      name,
      email,
      password
    })

    return updatedUser
  }
}

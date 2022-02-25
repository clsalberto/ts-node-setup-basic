import { hash } from 'bcryptjs'
import crypto from 'crypto'

import { User } from '~/domain/entities'

import {
  IUsersRepository,
  IUserRequestDto,
  IRolesRepository
} from '~/applications/contracts'
import { UserAlreadyExists } from '~/applications/errors'

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private rolesRepository: IRolesRepository
  ) {}

  async execute(data: IUserRequestDto): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(data.email)

    if (userExists) {
      throw new UserAlreadyExists()
    }

    const { name, email, role } = data

    const password = await hash(data.password, 8)

    const token = crypto.randomBytes(20).toString('hex')

    const now = new Date()
    const expiresIn = new Date(now.setHours(now.getHours() + 12))

    const roleId = (await this.rolesRepository.findBySlug(role)).id

    const user = await this.usersRepository.create(
      User.create({
        name,
        email,
        password,
        token,
        expiresIn,
        roleId
      })
    )

    // TODO: Send email to user using queue

    return user
  }
}

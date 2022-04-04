import { UsersRepository } from '~/core/contracts'
import { User, UserProps } from '~/core/entities'

import { prisma } from '~/infra/database'

export class PrismaUsersRepository implements UsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findUnique({ where: { email } })
    return user ? User.create({ ...user }, user.id) : null
  }

  async create(data: UserProps): Promise<User> {
    const user = User.create({ ...data })

    const { props, id } = user
    await prisma.user.create({ data: { ...props, id } })

    return user
  }
}

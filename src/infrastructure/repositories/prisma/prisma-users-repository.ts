import { User } from '~/domain/entities'

import {
  CreateUser,
  DeleteUser,
  FindUserByEmail,
  FindUserById,
  FindUserBySlug,
  FindUserByToken,
  UpdateUser,
  UserRequestDto
} from '~/applications/contracts'

export class PrismaUsersRepository
  implements
    CreateUser,
    UpdateUser,
    DeleteUser,
    FindUserById,
    FindUserByEmail,
    FindUserByToken,
    FindUserBySlug
{
  create(data: UserRequestDto): Promise<User> {
    throw new Error('Method not implemented.')
  }

  update(id: string, data: UserRequestDto): Promise<User> {
    throw new Error('Method not implemented.')
  }

  delete(id: string): Promise<unknown> {
    throw new Error('Method not implemented.')
  }

  findById(id: string): Promise<User> {
    throw new Error('Method not implemented.')
  }

  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.')
  }

  findByToken(token: string): Promise<User> {
    throw new Error('Method not implemented.')
  }

  findBySlug(slug: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
}

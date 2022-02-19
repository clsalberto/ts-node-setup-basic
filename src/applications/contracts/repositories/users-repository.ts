import { User } from '~/domain/entities/user'

import { UserRequestDto } from '..'

export interface UsersRepository {
  create(user: User): Promise<User>
  update(user: User, data: UserRequestDto): Promise<User>
  delete(user: User): Promise<any>
  load(page?: number, limit?: number): Promise<User[]>
  findById(id: string): Promise<User>
  findByEmail(email: string): Promise<User>
  findByToken(token: string): Promise<User>
}

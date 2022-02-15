import { User } from '~/domain/entities/user'

export interface UsersRepository {
  findByEmail(email: string): Promise<User>
  create(user: User): Promise<User>
}

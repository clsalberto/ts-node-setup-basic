import { User } from '~/domain/entities'

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>
  create(user: User): Promise<User>
}

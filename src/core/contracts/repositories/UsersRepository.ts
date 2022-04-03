import { User, UserProps } from '~/core/entities'

export interface UsersRepository {
  findByEmail(email: string): Promise<User>
  create(data: UserProps): Promise<User>
}

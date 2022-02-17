import { User } from '~/domain/entities/user'

import { UsersRepository } from '~/applications/contracts'

export class FakeUsersRepository implements UsersRepository {
  private users: User[] = []

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.props.email === email)

    return user
  }

  async create(user: User): Promise<User> {
    this.users.push(user)

    return user
  }

  async load(): Promise<User[]> {
    return this.users
  }
}

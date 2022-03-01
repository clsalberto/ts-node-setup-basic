import { Entity } from './entity'

export interface RoleProps {
  slug: string
  name: string
  description?: string
}

export class Role extends Entity<RoleProps> {
  private constructor(props: RoleProps, id?: string) {
    super(props, id)
  }

  static create(props: RoleProps, id?: string) {
    const role = new Role(props, id)

    return role
  }
}

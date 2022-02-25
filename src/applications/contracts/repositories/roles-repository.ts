import { Role } from '~/domain/entities'

export interface IRolesRepository {
  findBySlug(slug: string): Promise<Role>
}

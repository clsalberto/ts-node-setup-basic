import { Entity } from './entity'

export interface ModuleProps {
  role: string
  owner?: string
  name: string
  description?: string
  value?: number
}

export class Module extends Entity<ModuleProps> {
  private constructor(props: ModuleProps, id?: string) {
    super(props, id)
  }

  static create(props: ModuleProps, id?: string) {
    const module = new Module(props, id)

    return module
  }
}

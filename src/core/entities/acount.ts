import { Entity } from './entity'

export interface AcountProps {
  logo?: string
  company: string
  email: string
  cnpj: string
  domain: string
  createdIn?: Date
  active?: boolean
}

export class Acount extends Entity<AcountProps> {
  private constructor(props: AcountProps, id?: string) {
    super(props, id)
  }

  static create(props: AcountProps, id?: string) {
    const acount = new Acount(props, id)

    return acount
  }
}

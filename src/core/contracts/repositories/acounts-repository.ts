import { Acount } from '~/domain/entities'

export interface IAcountsRepository {
  findByEmail(email: string): Promise<Acount>
  create(acount: Acount): Promise<Acount>
}

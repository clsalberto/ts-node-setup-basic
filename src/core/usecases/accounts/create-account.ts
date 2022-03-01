import { IAcountsRepository, IUseCase } from '~/core/contracts'
import { Acount } from '~/core/entities'
import { AcountAlreadyExists } from '~/core/errors'

export interface Request {
  company: string
  email: string
  cnpj: string
  domain: string
}

export class CreateAcountUseCase implements IUseCase<Request, Acount> {
  constructor(private acountRepository: IAcountsRepository) {}

  async execute(data: Request): Promise<Acount> {
    const acountExists = this.acountRepository.findByEmail(data.email)

    if (acountExists) {
      throw new AcountAlreadyExists()
    }

    const acount = this.acountRepository.create(Acount.create(data))

    return acount
  }
}

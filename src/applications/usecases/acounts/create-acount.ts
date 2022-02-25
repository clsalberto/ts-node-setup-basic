import { Acount } from '~/domain/entities'

import { IAcountsRepository, IAcountRequestDto } from '~/applications/contracts'
import { AcountAlreadyExists } from '~/applications/errors'

export class CreateAcountUseCase {
  constructor(private acountRepository: IAcountsRepository) {}

  async execute(data: IAcountRequestDto): Promise<Acount> {
    const acountExists = this.acountRepository.findByEmail(data.email)

    if (acountExists) {
      throw new AcountAlreadyExists()
    }

    const acount = this.acountRepository.create(Acount.create(data))

    return acount
  }
}

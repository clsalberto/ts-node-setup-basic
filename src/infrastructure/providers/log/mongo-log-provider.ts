import { LogModel, LogProvider, TypeLog } from '~/applications/contracts'

import { Log } from '~/infrastructure/database'

export class MongoLogProvider implements LogProvider {
  async info(log: LogModel): Promise<void> {
    await Log.create({
      ...log,
      type: TypeLog.Info
    })
  }

  async error(log: LogModel): Promise<void> {
    await Log.create({
      ...log,
      type: TypeLog.Error
    })
  }
}

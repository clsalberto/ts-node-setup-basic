import { LogModel, TypeLog } from '~/applications/contracts'

import { mongoose } from '~/infrastructure/database'

const LogSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    default: TypeLog.Info
  },
  message: {
    type: String,
    required: true
  },
  author: {
    type: Object,
    require: true
  },
  data: {
    type: Object
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

const Log = mongoose.model<LogModel>('Log', LogSchema)

export { Log }

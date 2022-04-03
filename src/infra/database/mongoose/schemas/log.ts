import { mongoose } from '~/infra/database'

interface Author {
  name: string
  email: string
}

interface LogModel {
  type: string
  author: Author
  message: string
  data?: object | null
  createdAt?: Date
}

const LogSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
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

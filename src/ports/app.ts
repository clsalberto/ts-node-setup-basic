import 'dotenv/config'
import express from 'express'

import { IAppError } from '~/applications/contracts'

import { routes } from '~/ports/routes'

const app = express()

app.use(express.json())

app.use('/api', routes)

app.use(
  (
    err: IAppError,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(err.stack)
    }

    if (err instanceof Error) {
      return response.status(err.code).json({
        name: err.name,
        message: err.message,
        metadata: err.metadata ?? null
      })
    }

    return response.status(500).json({ error: 'Internal server error' })
  }
)

export { app }

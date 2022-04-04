import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import { AppError } from '~/core/contracts'

import { ServerConfig } from '~/app/config/ServerConfig'
import { routes } from '~/app/routes'

const app = express()

app.use(cors({ origin: ServerConfig.FRONT_URL }))
app.use(express.json())

app.use('/:tenant/api', routes)

app.use(
  (
    error: AppError,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    if (process.env.NODE_ENV !== 'production') {
      if (error instanceof Error) {
        return response.status(error.statusCode).json({
          error
        })
      }
    }

    return response.status(500).json({ error: 'Internal server error' })
  }
)

export { app }

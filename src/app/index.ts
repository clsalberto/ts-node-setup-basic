import 'dotenv/config'
import express from 'express'

import { routes } from '~/app/routes'

const app = express()

app.use(express.json())

app.use('/:tenant/api', routes)

app.use(
  (
    error: Error,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(error)
    }

    return response.status(500).json({ error: 'Internal server error' })
  }
)

export { app }

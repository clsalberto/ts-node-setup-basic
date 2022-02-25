import { Router } from 'express'

import { routes as userRoutes } from '~/ports/routes/users'

const routes = Router()

routes.get('/', (request, response) => {
  response.status(200).json({ message: 'Welcome to project NodeJs' })
})

routes.use('/users', userRoutes)

export { routes }

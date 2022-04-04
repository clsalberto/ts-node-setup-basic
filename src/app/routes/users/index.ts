import { Router } from 'express'

import { createUserFactory } from '~/app/factories'

const routes = Router()

routes.get('/', (request, response) => {
  response.status(200).json({ message: 'Load Users' })
})

routes.post('/', (request, response) =>
  createUserFactory().handle(request, response)
)

routes.put('/:id', (request, response) => {
  response.status(200).json({ message: 'Update User' })
})

routes.delete('/:id', (request, response) => {
  response.status(200).json({ message: 'Delete User' })
})

export { routes }

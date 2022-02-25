import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  response.status(200).json({ message: 'Load Users' })
})

routes.post('/', (request, response) => {
  response.status(201).json({ message: 'Create User' })
})

routes.put('/:id', (request, response) => {
  response.status(200).json({ message: 'Update User' })
})

routes.delete('/:id', (request, response) => {
  response.status(200).json({ message: 'Delete User' })
})

export { routes }

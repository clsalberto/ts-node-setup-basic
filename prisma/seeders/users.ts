import { hashSync } from 'bcryptjs'
import cuid from 'cuid'

export const users = [
  {
    id: cuid(),
    name: 'Carlos Alberto',
    email: 'clsalberto@outlook.com',
    password: hashSync('ca0105gx', 10),
    active: true
  }
]

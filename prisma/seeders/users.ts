import { hashSync } from 'bcryptjs'

import { roles } from './roles'

const root = roles.find(role => role.slug === 'root')

export const users = [
  {
    id: 'a5afbe7e-c763-4826-949d-74e0979e3743',
    name: 'Carlos Alberto',
    email: 'clsalberto@outlook.com',
    password: hashSync('1q2w!Q@W', 8),
    roleId: root.id,
    active: true
  },
  {
    id: '47be5ee9-ab9b-4fc3-9a7f-e12dac357c70',
    name: 'Ana Kariny',
    email: 'kariny.oliveira@outlook.com',
    password: hashSync('1q2w!Q@W', 8),
    roleId: root.id,
    active: true
  }
]

import { PrismaClient } from '@prisma/client'

import { modules } from './modules'
import { roles } from './roles'
import { users } from './users'

const prisma = new PrismaClient()

async function main() {
  if (roles) {
    for (const role of roles) {
      await prisma.role.create({
        data: role
      })
    }
    console.log('Role records created')
  }

  if (modules) {
    for (const module of modules) {
      await prisma.module.create({
        data: module
      })
    }
    console.log('Module records created')
  }

  if (users) {
    for (const user of users) {
      await prisma.user.create({
        data: user
      })
    }
    console.log('User records created')
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })

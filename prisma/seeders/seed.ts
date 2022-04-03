import { PrismaClient } from '@prisma/client'

import { users } from './users'

const prisma = new PrismaClient()

async function main() {
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
  .finally(async () => {
    await prisma.$disconnect()
  })

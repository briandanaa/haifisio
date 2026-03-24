import { PrismaClient, Role, Prisma } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!
  })
})

async function main() {

  const users: Prisma.UserCreateManyInput[] = []

  for (let i = 1; i <= 100; i++) {
    users.push({
      email: `user${i}@test.com`,
      password: '123456',
      name: `User ${i}`,
      role: Role.PATIENT
    })
  }

  users.push({
    email: 'admin@haifisio.com',
    password: '123456',
    name: 'Admin',
    role: Role.ADMIN
  })

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true
  })

  console.log('✅ Seed berhasil 100 user')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
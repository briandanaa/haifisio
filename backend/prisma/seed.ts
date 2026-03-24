import { PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

 await prisma.user.createMany({
  data: [
   {
    email: 'admin@haifisio.com',
    password: '123456',
    name: 'Admin',
    role: Role.ADMIN
   },
   {
    email: 'dana@haifisio.com',
    password: '123456',
    name: 'Dana',
    role: Role.ADMIN
   },
   {
    email: 'user1@test.com',
    password: '123456',
    name: 'User One',
    role: Role.PATIENT
   },
   {
    email: 'user2@test.com',
    password: '123456',
    name: 'User Two',
    role: Role.PATIENT
   },
   {
    email: 'user3@test.com',
    password: '123456',
    name: 'User Three',
    role: Role.PATIENT
   }
  ],
  skipDuplicates: true
 })

 console.log('Seed user created')

}

main()
 .catch((e) => {
  console.error(e)
  process.exit(1)
 })
 .finally(async () => {
  await prisma.$disconnect()
 })
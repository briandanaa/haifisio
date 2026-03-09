import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async createUser() {
    return this.prisma.user.create({
      data: {
        name: "Dana",
        email: "dana@test.com",
        password: "123",
        role: "ADMIN"
      }
    })
  }

}
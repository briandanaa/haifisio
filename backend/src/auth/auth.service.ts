import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(data: any) {

    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "ADMIN"
      }
    })

    return user

  }

  async login(data: any) {

    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    })

    if (!user) {
      return { message: "User tidak ditemukan" }
    }

    const token = this.jwtService.sign({
      userId: user.id,
      email: user.email
    })

    return {
      token
    }

  }

}
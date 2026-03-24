import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class UsersRepository {

 constructor(private prisma: PrismaService) {}

 async findMany(params:any){

 return this.prisma.user.findMany({
  skip: params.skip,
  take: params.take
 })

}

async count(){

 return this.prisma.user.count()

}

 async findById(id:number){
  return this.prisma.user.findUnique({
   where:{id}
  })
 }

 async create(data:any){
  return this.prisma.user.create({
   data
  })
 }

 async update(id:number,data:any){
  return this.prisma.user.update({
   where:{id},
   data
  })
 }

}
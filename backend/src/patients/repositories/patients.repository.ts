import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class PatientsRepository {

 constructor(private prisma: PrismaService) {}

 create(data:any){
  return this.prisma.patient.create({
   data
  })
 }

 findAll(){
  return this.prisma.patient.findMany({
   include:{
    user:true
   }
  })
 }

 findById(id:number){
  return this.prisma.patient.findUnique({
   where:{id},
   include:{
    user:true
   }
  })
 }

 findByUserId(userId: number) {
  return this.prisma.patient.findFirst({
    where: {
      userId: userId
    }
  })
}

}
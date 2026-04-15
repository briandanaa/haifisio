import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class TherapistsRepository {

 constructor(private prisma: PrismaService) {}

 create(data:any){
  return this.prisma.therapist.create({
   data
  })
 }

 findAll(){
  return this.prisma.therapist.findMany({
   include:{
    user:true
   }
  })
 }

 findById(id:number){
  return this.prisma.therapist.findUnique({
   where:{id},
   include:{
    user:true
   }
  })
 }

 verify(id:number){
  return this.prisma.therapist.update({
   where:{id},
   data:{
    statusVerification:true
   }
  })
 }

}
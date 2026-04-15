import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BookingStatus } from '@prisma/client' 

@Injectable()
export class BookingsRepository {

 constructor(private prisma: PrismaService) {}

 create(data:any){
  return this.prisma.booking.create({
   data
  })
 }

 findAll(){
  return this.prisma.booking.findMany({
   include:{
    patient:true,
    therapist:true
   }
  })
 }

 updateStatus(id:number,status:string){
  return this.prisma.booking.update({
   where:{id},
   data:{status: status as BookingStatus}
  })
 }

}
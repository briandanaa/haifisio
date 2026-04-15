import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class SessionsRepository {

 constructor(private prisma: PrismaService) {}

 findByBookingId(bookingId:number){
  return this.prisma.therapySession.findMany({
   where:{bookingId},
   include:{
    report:true
   }
  })
 }

}
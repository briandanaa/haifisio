import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ReportsRepository {

 constructor(private prisma: PrismaService) {}

 create(data:any){
  return this.prisma.therapyReport.create({
   data
  })
 }

 findBySession(sessionId:number){
  return this.prisma.therapyReport.findMany({
   where:{sessionId}
  })
 }

}
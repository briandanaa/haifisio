import { Injectable } from '@nestjs/common'
import { ReportsRepository } from './reports.repository'

@Injectable()
export class ReportsService {

 constructor(private repo:ReportsRepository){}

 create(therapistId:number,dto:any){
  return this.repo.create({
   sessionId: dto.sessionId,
   therapistId,
   painScale: dto.painScale,
   notes: dto.notes
  })
 }

 findBySession(sessionId:number){
  return this.repo.findBySession(sessionId)
 }

}
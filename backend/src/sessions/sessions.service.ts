import { Injectable } from '@nestjs/common'
import { SessionsRepository } from './sessions.repository'

@Injectable()
export class SessionsService {

 constructor(private repo: SessionsRepository){}

 findByBookingId(bookingId:number){
  return this.repo.findByBookingId(bookingId)
 }

}
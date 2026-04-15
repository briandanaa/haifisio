import { Injectable } from '@nestjs/common'
import { BookingsRepository } from '../repositories/bookings.repository'

@Injectable()
export class UpdateStatusUseCase {

 constructor(private bookingRepo:BookingsRepository){}

 async execute(id:number, status:string){
  return this.bookingRepo.updateStatus(id,status)
 }

}
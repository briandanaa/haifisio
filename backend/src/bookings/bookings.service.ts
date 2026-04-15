import { Injectable } from '@nestjs/common'
import { CreateBookingUseCase } from './usecases/create-booking.usecase'
import { UpdateStatusUseCase } from './usecases/update-status.usecase'
import { BookingsRepository } from './repositories/bookings.repository'

@Injectable()
export class BookingsService {

 constructor(
  private createBookingUseCase:CreateBookingUseCase,
  private updateStatusUseCase:UpdateStatusUseCase,
  private repo:BookingsRepository
 ){}

 create(userId:number,dto:any){
  return this.createBookingUseCase.execute(userId,dto)
 }

 findAll(){
  return this.repo.findAll()
 }

 updateStatus(id:number,status:string){
  return this.updateStatusUseCase.execute(id,status)
 }

}
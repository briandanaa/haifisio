import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { BookingsRepository } from '../repositories/bookings.repository'
import { TherapistsRepository } from '../../therapists/repositories/therapists.repository'
import { PatientsRepository } from '../../patients/repositories/patients.repository'

@Injectable()
export class CreateBookingUseCase {

constructor(
  private bookingRepo: BookingsRepository,
  private therapistRepo: TherapistsRepository,
  private patientRepo: PatientsRepository,
  private prisma: PrismaService
){}
 async execute(userId:number, dto:any){

  const patient = await this.patientRepo.findByUserId(userId)
  if(!patient){
   throw new Error("Patient tidak ditemukan")
  }

  const therapist = await this.therapistRepo.findById(dto.therapistId)
  if(!therapist){
   throw new Error("Therapist tidak ditemukan")
  }

  const booking = await this.bookingRepo.create({
   patientId: patient.id,
   therapistId: dto.therapistId,
   bookingDate: new Date(dto.bookingDate),
   location: dto.location
  })

  // 🔥 generate sessions
  for(let i=1;i<=dto.totalSession;i++){
   await this.prisma.therapySession.create({
    data:{
     bookingId: booking.id,
     sessionNumber: i
    }
   })
  }

  return booking
 }

}
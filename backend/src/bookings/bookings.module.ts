import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'

import { BookingsController } from './bookings.controller'
import { BookingsService } from './bookings.service'
import { BookingsRepository } from './repositories/bookings.repository'

import { CreateBookingUseCase } from './usecases/create-booking.usecase'
import { UpdateStatusUseCase } from './usecases/update-status.usecase'

// 👉 IMPORT MODULE LAIN (WAJIB)
import { PatientsModule } from '../patients/patients.module'
import { TherapistsModule } from '../therapists/therapists.module'

@Module({
 imports: [
  PrismaModule,
  PatientsModule,   // ✅ WAJIB
  TherapistsModule  // ✅ WAJIB
 ],
 controllers: [BookingsController],
 providers: [
  BookingsService,
  BookingsRepository,
  CreateBookingUseCase,
  UpdateStatusUseCase
 ],
})
export class BookingsModule {}
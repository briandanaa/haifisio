import { Module } from '@nestjs/common'
import { PatientsController } from './patients.controller'
import { PatientsService } from './patients.service'
import { PatientsRepository } from './repositories/patients.repository'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
 imports:[PrismaModule],
 controllers:[PatientsController],
 providers:[PatientsService, PatientsRepository],
 exports: [PatientsRepository] // ✅ WAJIB
})
export class PatientsModule {}
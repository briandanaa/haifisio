import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { TherapistsController } from './therapists.controller'
import { TherapistsService } from './therapists.service'
import { TherapistsRepository } from './repositories/therapists.repository'

@Module({
 imports: [PrismaModule],
 controllers: [TherapistsController],
 providers: [TherapistsService, TherapistsRepository],
 exports: [TherapistsRepository]
})
export class TherapistsModule {}
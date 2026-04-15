import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { PatientsModule } from './patients/patients.module'
import { TherapistsModule } from './therapists/therapists.module'
import { BookingsModule } from './bookings/bookings.module'
import { SessionsModule } from './sessions/sessions.module'
import { ReportsModule } from './reports/reports.module'

@Module({
 imports: [
   ConfigModule.forRoot({
     isGlobal: true,
   }),
   AuthModule,
   UsersModule,
   PatientsModule,
    TherapistsModule,
    BookingsModule,
    SessionsModule,
    ReportsModule
 ],
})
export class AppModule {}
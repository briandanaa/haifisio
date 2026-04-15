import {
 Controller,
 Get,
 Param,
 UseGuards
} from '@nestjs/common'

import { SessionsService } from './sessions.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'

@ApiTags('Sessions')
@Controller('sessions')
export class SessionsController {

 constructor(private service: SessionsService){}

 @Get(':bookingId')
 @ApiBearerAuth()
 @UseGuards(JwtAuthGuard)
 findByBooking(@Param('bookingId') bookingId:string){
  return this.service.findByBookingId(Number(bookingId))
 }

}
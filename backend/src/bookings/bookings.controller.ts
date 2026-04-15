import {
 Controller,
 Post,
 Get,
 Patch,
 Param,
 Body,
 UseGuards,
 Request
} from '@nestjs/common'

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'

import { BookingsService } from './bookings.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../auth/guards/roles.guard'
import { Roles } from '../auth/decorators/roles.decorator'

import { CreateBookingDto } from './dto/create-booking.dto'
import { UpdateStatusDto } from './dto/update-status.dto'

@ApiTags('Bookings')
@Controller('bookings')
export class BookingsController {

 constructor(private service:BookingsService){}

 @Post()
 @ApiBearerAuth()
 @UseGuards(JwtAuthGuard, RolesGuard)
 @Roles('PATIENT')
 create(@Request() req,@Body() dto:CreateBookingDto){
  return this.service.create(req.user.userId,dto)
 }

 @Get()
 findAll(){
  return this.service.findAll()
 }

 @Patch(':id/status')
 @UseGuards(JwtAuthGuard, RolesGuard)
 @Roles('THERAPIST','ADMIN')
 updateStatus(
  @Param('id') id:string,
  @Body() dto:UpdateStatusDto
 ){
  return this.service.updateStatus(Number(id),dto.status)
 }

}
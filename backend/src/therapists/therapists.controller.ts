import {
 Controller,
 Post,
 Get,
 Param,
 Patch,
 Body,
 UseGuards,
 Request
} from '@nestjs/common'

import { TherapistsService } from './therapists.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../auth/guards/roles.guard'
import { Roles } from '../auth/decorators/roles.decorator'
import { CreateTherapistDto } from './dto/create-therapist.dto'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { Role } from '@prisma/client'

@ApiTags('Therapists')
@Controller('therapists')
export class TherapistsController {

 constructor(private service:TherapistsService){}

 @Post()
 @ApiBearerAuth()
 @UseGuards(JwtAuthGuard, RolesGuard)
 @Roles(Role.THERAPIST)
 create(
  @Request() req,
  @Body() dto: CreateTherapistDto
 ){
    console.log('USER LOGIN:', req.user)
  return this.service.create(req.user.userId, dto)
 }

 @Get()
 findAll(){
  return this.service.findAll()
 }

 @Get(':id')
 findById(@Param('id') id:string){
  return this.service.findById(Number(id))
 }

 @Patch(':id/verify')
 @UseGuards(JwtAuthGuard, RolesGuard)
 @Roles(Role.ADMIN)
 verify(@Param('id') id:string){
  return this.service.verify(Number(id))
 }

}
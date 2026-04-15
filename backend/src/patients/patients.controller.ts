import {
 Controller,
 Post,
 Get,
 Param,
 Body,
 UseGuards,
 Request
} from '@nestjs/common'

import { PatientsService } from './patients.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CreatePatientDto } from './dto/create-patient.dto'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'

@ApiTags('Patients')
@Controller('patients')
export class PatientsController {

 constructor(private patientsService:PatientsService){}

 @Post()
 @ApiBearerAuth()
 @UseGuards(JwtAuthGuard)
 create(
  @Request() req,
  @Body() dto: CreatePatientDto
 ){
  return this.patientsService.create(
   req.user.userId,
   dto
  )
 }

 @Get()
 findAll(){
  return this.patientsService.findAll()
 }

 @Get(':id')
 findById(@Param('id') id:string){
  return this.patientsService.findById(Number(id))
 }

}
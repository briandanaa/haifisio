import {
 Controller,
 Post,
 Get,
 Body,
 Param,
 Request,
 UseGuards
} from '@nestjs/common'

import { ReportsService } from './reports.service'
import { CreateReportDto } from './dto/create-report.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../auth/guards/roles.guard'
import { Roles } from '../auth/decorators/roles.decorator'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'

@ApiTags('Reports')
@Controller('reports')
export class ReportsController {

 constructor(private service:ReportsService){}

 @Post()
 @ApiBearerAuth()
 @UseGuards(JwtAuthGuard, RolesGuard)
 @Roles('THERAPIST')
 create(@Request() req, @Body() dto:CreateReportDto){
  return this.service.create(req.user.userId,dto)
 }

 @Get(':sessionId')
 find(@Param('sessionId') sessionId:string){
  return this.service.findBySession(Number(sessionId))
 }

}
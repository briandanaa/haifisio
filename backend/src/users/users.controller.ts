import {
 Controller,
 Get,
 UseGuards,
 Request,
 Param,
 Patch,
 Body,
  Query
} from '@nestjs/common'
import { UsersService } from './users.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { UpdateUserDto } from './dto/update-user.dto'
import { ApiTags } from '@nestjs/swagger'
import { PaginationDto } from '../common/dto/pagination.dto'

@ApiTags('Users')
@Controller('users')
export class UsersController {

 constructor(private usersService:UsersService){}

//  @Get()
//  async getUsers(){
//   return this.usersService.findAll()
//  }

@Get()
getUsers(@Query() query: PaginationDto) {
 return this.usersService.findAll(query)
}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req){
  return this.usersService.findById(req.user.userId)
  }

  @Patch(':id')
@UseGuards(JwtAuthGuard)
updateUser(
 @Param('id') id:string,
 @Body() body:UpdateUserDto
){
 return this.usersService.updateUser(
  Number(id),
  body
 )
}

}
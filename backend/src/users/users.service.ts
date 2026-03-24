import { Injectable } from '@nestjs/common'
import { UsersRepository } from './repositories/users.repository'
import { PaginationDto } from '../common/dto/pagination.dto'

@Injectable()
export class UsersService {

 constructor(private usersRepository:UsersRepository){}

 async findAll(query: PaginationDto){

  const page = query.page ?? 1
  const limit = query.limit ?? 10
  const skip = (page - 1) * limit

  const users = await this.usersRepository.findMany({
 skip,
 take: limit
})

  const total = await this.usersRepository.count()

  return {
   data: users,
   meta: {
    page,
    limit,
    total
   }
  }

 }

 async findById(id:number){
  return this.usersRepository.findById(id)
 }

 async updateUser(id:number,data:any){
  return this.usersRepository.update(id,data)
 }

}
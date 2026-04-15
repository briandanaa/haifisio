import { Injectable } from '@nestjs/common'
import { TherapistsRepository } from './repositories/therapists.repository'

@Injectable()
export class TherapistsService {

 constructor(private repo:TherapistsRepository){}

 create(userId:number, dto:any){
  return this.repo.create({
   ...dto,
   userId
  })
 }

 findAll(){
  return this.repo.findAll()
 }

 findById(id:number){
  return this.repo.findById(id)
 }

 verify(id:number){
  return this.repo.verify(id)
 }

}
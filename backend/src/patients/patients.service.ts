import { Injectable } from '@nestjs/common'
import { PatientsRepository } from './repositories/patients.repository'

@Injectable()
export class PatientsService {

 constructor(private patientsRepository:PatientsRepository){}

 create(userId:number, dto:any){
  return this.patientsRepository.create({
   ...dto,
   userId
  })
 }

 findAll(){
  return this.patientsRepository.findAll()
 }

 findById(id:number){
  return this.patientsRepository.findById(id)
 }

}
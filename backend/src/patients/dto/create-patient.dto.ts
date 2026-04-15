import { IsString, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreatePatientDto {

 @ApiProperty()
 @IsString()
 address: string

 @ApiProperty()
 @IsOptional()
 @IsString()
 gender?: string

}
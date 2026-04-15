import { IsString, IsOptional, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateTherapistDto {

 @ApiProperty()
 @IsString()
 licenseNumber: string

 @ApiProperty()
 @IsOptional()
 @IsString()
 specialization?: string

 @ApiProperty()
 @IsOptional()
 @IsNumber()
 experienceYears?: number

 @ApiProperty()
 @IsOptional()
 @IsString()
 clinicAddress?: string

}
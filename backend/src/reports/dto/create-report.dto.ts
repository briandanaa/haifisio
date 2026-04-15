import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateReportDto {

 @ApiProperty()
 @IsNumber()
 sessionId: number

 @ApiProperty()
 @IsNumber()
 painScale: number

 @ApiProperty()
 @IsString()
 notes: string

}
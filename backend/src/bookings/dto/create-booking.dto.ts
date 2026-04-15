import { IsNumber, IsDateString, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateBookingDto {

 @ApiProperty()
 @IsNumber()
 therapistId: number

 @ApiProperty()
 @IsDateString()
 bookingDate: string

 @ApiProperty()
 @IsString()
 location: string

 @ApiProperty()
 @IsNumber()
 totalSession: number

}
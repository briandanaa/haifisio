import { IsOptional, IsString } from 'class-validator'

export class SearchUserDto {

 @IsOptional()
 @IsString()
 search?: string

}
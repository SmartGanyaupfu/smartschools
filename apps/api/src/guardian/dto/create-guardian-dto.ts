import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateGuardianDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}

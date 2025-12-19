import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSchoolDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  code: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  logoUrl?: string;
}

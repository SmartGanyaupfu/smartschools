import { IsEmail, IsOptional } from 'class-validator';

export class UpdateSchoolDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  logoUrl?: string;
}

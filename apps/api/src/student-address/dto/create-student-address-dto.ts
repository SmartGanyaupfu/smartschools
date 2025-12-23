import { IsEnum, IsOptional, IsString } from 'class-validator';
import { AddressType } from 'generated/prisma/client';

export class CreateStudentAddressDto {
  @IsEnum(AddressType)
  type: AddressType;

  @IsString()
  line1: string;

  @IsOptional()
  @IsString()
  line2?: string;

  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  province?: string;

  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  postalCode?: string;
}

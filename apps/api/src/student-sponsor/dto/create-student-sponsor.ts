import { IsEnum, IsOptional, IsString } from 'class-validator';
import { SponsorType } from 'generated/prisma/client';

export class CreateStudentSponsorDto {
  @IsString()
  name: string;

  @IsEnum(SponsorType)
  type: SponsorType;

  @IsOptional()
  @IsString()
  contact?: string;
}

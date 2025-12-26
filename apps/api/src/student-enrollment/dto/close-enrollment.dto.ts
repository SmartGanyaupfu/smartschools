import { IsDateString, IsEnum, IsOptional, IsString } from 'class-validator';
import { EnrollmentStatus } from 'generated/prisma/client';

export class CloseEnrollmentDto {
  @IsDateString()
  endDate: string;

  @IsEnum(EnrollmentStatus)
  status: EnrollmentStatus;

  @IsOptional()
  @IsString()
  reason?: string;
}

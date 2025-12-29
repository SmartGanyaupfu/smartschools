import { IsEnum, IsOptional, IsString } from 'class-validator';
import { AttendanceStatus } from 'generated/prisma/client';

export class UpdateAttendanceDto {
  @IsEnum(AttendanceStatus)
  status: AttendanceStatus;

  @IsOptional()
  @IsString()
  remarks?: string;
}

import { IsDateString, IsOptional, IsUUID } from 'class-validator';

export class EnrollStudentDto {
  @IsUUID()
  gradeId: string;

  @IsUUID()
  academicYearId: string;

  @IsOptional()
  @IsUUID()
  termId?: string;

  @IsDateString()
  startDate: string;
}

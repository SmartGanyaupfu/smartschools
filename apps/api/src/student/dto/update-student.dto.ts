import { IsOptional, IsEnum, IsDateString } from 'class-validator';
import { GenderEnum } from './create-student.dto';

export class UpdateStudentDto {
  @IsOptional()
  firstName?: string;

  @IsOptional()
  lastName?: string;

  @IsOptional()
  @IsEnum(GenderEnum)
  gender?: GenderEnum;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  gradeId?: string;
}

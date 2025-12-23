import { IsNotEmpty, IsOptional, IsDateString, IsEnum } from 'class-validator';

export enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export class CreateStudentDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsOptional()
  @IsEnum(GenderEnum)
  gender?: GenderEnum;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  admissionNo?: string;

  @IsNotEmpty()
  gradeId: string;
}

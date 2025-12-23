import { IsOptional, IsString } from 'class-validator';

export class CreateStudentMedicalProfileDto {
  @IsOptional()
  @IsString()
  medicalAidName?: string;

  @IsOptional()
  @IsString()
  medicalAidNumber?: string;

  @IsOptional()
  @IsString()
  bloodType?: string;

  @IsOptional()
  @IsString()
  allergies?: string;

  @IsOptional()
  @IsString()
  chronicConditions?: string;
}

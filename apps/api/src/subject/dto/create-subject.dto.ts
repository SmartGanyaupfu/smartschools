import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSubjectDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  code?: string;

  @IsOptional()
  gradeId?: string;
}

import { IsOptional, IsInt } from 'class-validator';

export class UpdateGradeDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsInt()
  level?: number;
}

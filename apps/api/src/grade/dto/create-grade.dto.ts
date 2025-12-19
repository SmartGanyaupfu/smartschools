import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateGradeDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  level?: number;
}

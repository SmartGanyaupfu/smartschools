import { IsBoolean, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateAdmissionNumberSequenceDto {
  @IsString()
  prefix: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  padding?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

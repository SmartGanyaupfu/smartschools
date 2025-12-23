import { IsBoolean, IsInt, IsOptional, Min } from 'class-validator';

export class UpdateAdmissionNumberSequenceDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  padding?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

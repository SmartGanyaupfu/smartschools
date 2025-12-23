import { IsOptional, IsString } from 'class-validator';

export class UpdateStudentSponsorDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  contact?: string;
}

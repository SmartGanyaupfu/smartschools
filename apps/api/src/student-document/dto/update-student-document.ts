import { IsOptional, IsBoolean, IsString } from 'class-validator';

export class UpdateStudentDocumentDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsBoolean()
  isVerified?: boolean;
}

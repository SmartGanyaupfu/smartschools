import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class LinkGuardianDto {
  @IsString()
  relationship: string;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;
}

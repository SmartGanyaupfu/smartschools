import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateTermDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}

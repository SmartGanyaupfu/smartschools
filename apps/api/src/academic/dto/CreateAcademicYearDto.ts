import { IsNotEmpty } from 'class-validator';

export class CreateAcademicYearDto {
  @IsNotEmpty()
  name: string;
}

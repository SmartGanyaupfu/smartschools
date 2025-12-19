import { IsNotEmpty } from 'class-validator';

export class SetActiveAcademicYearDto {
  @IsNotEmpty()
  academicYearId: string;
}

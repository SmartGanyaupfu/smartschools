import { IsEnum, IsInt, IsString } from 'class-validator';
import { StudentDocumentType } from 'generated/prisma/enums';

export class CreateStudentDocumentDto {
  @IsEnum(StudentDocumentType)
  type: StudentDocumentType;

  @IsString()
  title: string;

  @IsString()
  fileUrl: string;

  @IsString()
  mimeType: string;

  @IsInt()
  fileSize: number;
}

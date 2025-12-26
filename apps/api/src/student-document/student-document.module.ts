import { Module } from '@nestjs/common';
import { StudentDocumentService } from './student-document.service';
import { StudentDocumentController } from './student-document.controller';

@Module({
  providers: [StudentDocumentService],
  controllers: [StudentDocumentController]
})
export class StudentDocumentModule {}

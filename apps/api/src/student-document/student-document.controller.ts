import {
  Controller,
  UseGuards,
  Post,
  Param,
  Req,
  Body,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateStudentDocumentDto } from './dto/create-student-document';
import { UpdateStudentDocumentDto } from './dto/update-student-document';
import { StudentDocumentService } from './student-document.service';

@Controller('students/:studentId/documents')
@UseGuards(JwtAuthGuard)
export class StudentDocumentController {
  constructor(private readonly service: StudentDocumentService) {}

  @Post()
  create(
    @Param('studentId') studentId: string,
    @Req() req: any,
    @Body() dto: CreateStudentDocumentDto,
  ) {
    console.log('Authenticated user:', req.user);
    return this.service.create(studentId, req.user.userId, dto);
  }

  @Get()
  findAll(@Param('studentId') studentId: string) {
    return this.service.findAll(studentId);
  }

  @Patch(':id')
  update(
    @Param('studentId') studentId: string,
    @Param('id') id: string,
    @Body() dto: UpdateStudentDocumentDto,
  ) {
    return this.service.update(id, studentId, dto);
  }

  @Delete(':id')
  remove(@Param('studentId') studentId: string, @Param('id') id: string) {
    return this.service.softDelete(id, studentId);
  }
}

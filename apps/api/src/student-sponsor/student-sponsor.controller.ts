import {
  Controller,
  UseGuards,
  Put,
  Param,
  Body,
  Get,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateStudentSponsorDto } from './dto/create-student-sponsor';
import { StudentSponsorService } from './student-sponsor.service';

@Controller('students/:studentId/sponsor')
@UseGuards(JwtAuthGuard)
export class StudentSponsorController {
  constructor(private readonly service: StudentSponsorService) {}

  @Put()
  upsert(
    @Param('studentId') studentId: string,
    @Body() dto: CreateStudentSponsorDto,
  ) {
    return this.service.upsert(studentId, dto);
  }

  @Get()
  find(@Param('studentId') studentId: string) {
    return this.service.findByStudent(studentId);
  }

  @Delete()
  remove(@Param('studentId') studentId: string) {
    return this.service.remove(studentId);
  }
}

import {
  Controller,
  UseGuards,
  Post,
  Param,
  Req,
  Body,
  Get,
  Patch,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StudentEnrollmentService } from './student-enrollment.service';
import { CloseEnrollmentDto } from './dto/close-enrollment.dto';
import { EnrollStudentDto } from './dto/enroll-student.dto';

@Controller('students/:studentId/enrollments')
@UseGuards(JwtAuthGuard)
export class StudentEnrollmentController {
  constructor(private readonly service: StudentEnrollmentService) {}

  @Post()
  enroll(
    @Param('studentId') studentId: string,
    @Req() req: any,
    @Body() dto: EnrollStudentDto,
  ) {
    return this.service.enroll(studentId, req.user.schoolId, dto);
  }

  @Get()
  history(@Param('studentId') studentId: string) {
    return this.service.history(studentId);
  }

  @Patch(':enrollmentId/close')
  close(
    @Param('studentId') studentId: string,
    @Param('enrollmentId') enrollmentId: string,
    @Body() dto: CloseEnrollmentDto,
  ) {
    return this.service.close(enrollmentId, studentId, dto);
  }
}

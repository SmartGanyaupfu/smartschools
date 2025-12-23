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
import { CreateStudentMedicalProfileDto } from './dto/create-student-medical-profile';
import { StudentMedicalProfileService } from './student-medical-profile.service';

@Controller('students/:studentId/medical-profile')
@UseGuards(JwtAuthGuard)
export class StudentMedicalProfileController {
  constructor(private readonly service: StudentMedicalProfileService) {}

  @Put()
  upsert(
    @Param('studentId') studentId: string,
    @Body() dto: CreateStudentMedicalProfileDto,
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

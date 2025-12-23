import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Req() req: any, @Body() dto: CreateStudentDto) {
    return this.studentService.create(req.user.schoolId, dto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.studentService.findAllBySchool(req.user.schoolId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Req() req: any,
    @Body() dto: UpdateStudentDto,
  ) {
    return this.studentService.update(id, req.user.schoolId, dto);
  }
}

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance-dto';
import { UpdateAttendanceDto } from './dto/update-attendance-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('attendance')
@UseGuards(JwtAuthGuard)
export class AttendanceController {
  constructor(private readonly service: AttendanceService) {}

  @Post()
  markAttendance(@Req() req: any, @Body() dto: CreateAttendanceDto) {
    return this.service.markAttendance(req.user.userId, dto);
  }

  @Get('student/:studentId')
  getStudentAttendance(@Param('studentId') studentId: string) {
    return this.service.getStudentAttendance(studentId);
  }

  @Get('date/:date')
  getAttendanceByDate(@Param('date') date: string) {
    return this.service.getAttendanceByDate(date);
  }

  @Patch(':id')
  updateAttendance(@Param('id') id: string, @Body() dto: UpdateAttendanceDto) {
    return this.service.updateAttendance(id, dto);
  }
}

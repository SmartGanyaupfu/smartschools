import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAttendanceDto } from './dto/create-attendance-dto';
import { UpdateAttendanceDto } from './dto/update-attendance-dto';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  async markAttendance(userId:string, dto: CreateAttendanceDto) {
    return this.prisma.attendance.create({
      data: {
        studentId: dto.studentId,
        date: new Date(dto.date),
        recordedById: userId,
        status: dto.status,
        remarks: dto.remarks,
      },
    });
  }

  async getStudentAttendance(studentId: string) {
    return this.prisma.attendance.findMany({
      where: { studentId },
      orderBy: { date: 'desc' },
    });
  }

  async getAttendanceByDate(date: string) {
    return this.prisma.attendance.findMany({
      where: {
        date: new Date(date),
      },
      include: {
        student: true,
      },
    });
  }

  async updateAttendance(id: string, dto: UpdateAttendanceDto) {
    return this.prisma.attendance.update({
      where: { id },
      data: dto,
    });
  }
}

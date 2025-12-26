import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloseEnrollmentDto } from './dto/close-enrollment.dto';
import { EnrollStudentDto } from './dto/enroll-student.dto';

@Injectable()
export class StudentEnrollmentService {
  constructor(private prisma: PrismaService) {}

  async enroll(studentId: string, schoolId: string, dto: EnrollStudentDto) {
    return this.prisma.$transaction(async (tx) => {
      // 1️ Close any active enrollment
      await tx.studentEnrollment.updateMany({
        where: {
          studentId,
          schoolId,
          status: 'ACTIVE',
        },
        data: {
          status: 'COMPLETED',
          endDate: new Date(dto.startDate),
        },
      });

      // 2 Create new enrollment
      const enrollment = await tx.studentEnrollment.create({
        data: {
          studentId,
          schoolId,
          gradeId: dto.gradeId,
          academicYearId: dto.academicYearId,
          termId: dto.termId,
          startDate: new Date(dto.startDate),
        },
      });

      // 3 Update student current grade
      await tx.student.update({
        where: { id: studentId },
        data: { gradeId: dto.gradeId },
      });

      return enrollment;
    });
  }

  async close(
    enrollmentId: string,
    studentId: string,
    dto: CloseEnrollmentDto,
  ) {
    return this.prisma.studentEnrollment.update({
      where: { id: enrollmentId },
      data: {
        status: dto.status,
        endDate: new Date(dto.endDate),
        reason: dto.reason,
      },
    });
  }

  async history(studentId: string) {
    return this.prisma.studentEnrollment.findMany({
      where: { studentId },
      include: {
        grade: true,
        academicYear: true,
        term: true,
      },
      orderBy: { startDate: 'desc' },
    });
  }
}

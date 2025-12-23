import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentMedicalProfileDto } from './dto/create-student-medical-profile';

@Injectable()
export class StudentMedicalProfileService {
  constructor(private prisma: PrismaService) {}

  async upsert(studentId: string, dto: CreateStudentMedicalProfileDto) {
    return this.prisma.studentMedicalProfile.upsert({
      where: { studentId },
      update: {
        ...dto,
      },
      create: {
        studentId,
        ...dto,
      },
    });
  }

  async findByStudent(studentId: string) {
    return this.prisma.studentMedicalProfile.findUnique({
      where: { studentId },
    });
  }

  async remove(studentId: string) {
    return this.prisma.studentMedicalProfile.delete({
      where: { studentId },
    });
  }
}

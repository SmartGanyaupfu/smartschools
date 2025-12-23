import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGuardianDto } from './dto/create-guardian-dto';
import { LinkGuardianDto } from './dto/link-guardian-dto';
import { UpdateGuardianDto } from './dto/update-guardian-dto';

@Injectable()
export class GuardianService {
  constructor(private prisma: PrismaService) {}

  async createGuardian(dto: CreateGuardianDto) {
    return this.prisma.guardian.create({ data: dto });
  }

  async updateGuardian(id: string, dto: UpdateGuardianDto) {
    return this.prisma.guardian.update({
      where: { id },
      data: dto,
    });
  }

  async linkGuardianToStudent(
    studentId: string,
    guardianId: string,
    dto: LinkGuardianDto,
  ) {
    if (dto.isPrimary) {
      await this.prisma.studentGuardian.updateMany({
        where: { studentId },
        data: { isPrimary: false },
      });
    }

    return this.prisma.studentGuardian.create({
      data: {
        studentId,
        guardianId,
        relationship: dto.relationship,
        isPrimary: dto.isPrimary ?? false,
      },
    });
  }

  async unlinkGuardian(studentId: string, guardianId: string) {
    return this.prisma.studentGuardian.delete({
      where: {
        studentId_guardianId: {
          studentId,
          guardianId,
        },
      },
    });
  }

  async getStudentGuardians(studentId: string) {
    return this.prisma.studentGuardian.findMany({
      where: { studentId },
      include: { guardian: true },
      orderBy: { isPrimary: 'desc' },
    });
  }
}

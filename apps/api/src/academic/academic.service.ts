import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTermDto } from './dto/CreateTermDto';
import { CreateAcademicYearDto } from './dto/CreateAcademicYearDto';

@Injectable()
export class AcademicService {
  constructor(private prisma: PrismaService) {}

  async createYear(schoolId: string, dto: CreateAcademicYearDto) {
    return this.prisma.academicYear.create({
      data: {
        name: dto.name,
        schoolId,
      },
    });
  }

  async setActiveYear(schoolId: string, academicYearId: string) {
    await this.prisma.academicYear.updateMany({
      where: { schoolId },
      data: { isActive: false },
    });

    return this.prisma.academicYear.update({
      where: { id: academicYearId },
      data: { isActive: true },
    });
  }

  async createTerm(academicYearId: string, dto: CreateTermDto) {
    return this.prisma.term.create({
      data: {
        name: dto.name,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        academicYearId,
      },
    });
  }
}

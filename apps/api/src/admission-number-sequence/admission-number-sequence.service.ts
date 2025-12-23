import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdmissionNumberSequenceDto } from './dto/create-admission-number-sequence.dto';

@Injectable()
export class AdmissionNumberSequenceService {
  constructor(private prisma: PrismaService) {}

  async create(schoolId: string, dto: CreateAdmissionNumberSequenceDto) {
    if (dto.isActive === true) {
      await this.prisma.admissionNumberSequence.updateMany({
        where: { schoolId },
        data: { isActive: false },
      });
    }

    return this.prisma.admissionNumberSequence.create({
      data: {
        schoolId,
        prefix: dto.prefix,
        padding: dto.padding ?? 5,
        isActive: dto.isActive ?? false, // 🔴 FIXED
      },
    });
  }

  async findAll(schoolId: string) {
    return this.prisma.admissionNumberSequence.findMany({
      where: { schoolId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async activate(id: string, schoolId: string) {
    await this.prisma.admissionNumberSequence.updateMany({
      where: { schoolId },
      data: { isActive: false },
    });

    return this.prisma.admissionNumberSequence.update({
      where: { id },
      data: { isActive: true },
    });
  }
}

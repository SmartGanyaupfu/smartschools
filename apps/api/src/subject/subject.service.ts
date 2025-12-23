import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  async create(schoolId: string, dto: CreateSubjectDto) {
    return this.prisma.subject.create({
      data: {
        name: dto.name,
        code: dto.code,
        gradeId: dto.gradeId,
        schoolId,
      },
    });
  }

  async findAllBySchool(schoolId: string) {
    return this.prisma.subject.findMany({
      where: { schoolId },
      include: {
        grade: true,
      },
      orderBy: { name: 'asc' },
    });
  }

  async update(id: string, schoolId: string, dto: UpdateSubjectDto) {
    const subject = await this.prisma.subject.findFirst({
      where: { id, schoolId },
    });

    if (!subject) {
      throw new NotFoundException('Subject not found');
    }

    return this.prisma.subject.update({
      where: { id },
      data: dto,
    });
  }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';

@Injectable()
export class GradeService {
  constructor(private prisma: PrismaService) {}

  async create(schoolId: string, dto: CreateGradeDto) {
    return this.prisma.grade.create({
      data: {
        name: dto.name,
        level: dto.level,
        schoolId,
      },
    });
  }

  async findAllBySchool(schoolId: string) {
    return this.prisma.grade.findMany({
      where: { schoolId },
      orderBy: { level: 'asc' },
    });
  }

  async update(id: string, schoolId: string, dto: UpdateGradeDto) {
    const grade = await this.prisma.grade.findFirst({
      where: { id, schoolId },
    });

    if (!grade) {
      throw new NotFoundException('Grade not found');
    }

    return this.prisma.grade.update({
      where: { id },
      data: dto,
    });
  }
}

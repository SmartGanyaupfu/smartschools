import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSchoolDto) {
    return this.prisma.school.create({ data });
  }

  async findById(id: string) {
    const school = await this.prisma.school.findUnique({
      where: { id },
    });

    if (!school) {
      throw new NotFoundException('School not found');
    }

    return school;
  }

  async update(id: string, data: UpdateSchoolDto) {
    return this.prisma.school.update({
      where: { id },
      data,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDocumentDto } from './dto/create-student-document';
import { UpdateStudentDocumentDto } from './dto/update-student-document';

@Injectable()
export class StudentDocumentService {
  constructor(private prisma: PrismaService) {}

  async create(
    studentId: string,
    userId: string,
    dto: CreateStudentDocumentDto,
  ) {
    return this.prisma.studentDocument.create({
      data: {
        studentId,
        uploadedById: userId,
        ...dto,
      },
    });
  }

  async findAll(studentId: string) {
    return this.prisma.studentDocument.findMany({
      where: {
        studentId,
        deletedAt: null,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async update(id: string, studentId: string, dto: UpdateStudentDocumentDto) {
    return this.prisma.studentDocument.update({
      where: { id },
      data: dto,
    });
  }

  async softDelete(id: string, studentId: string) {
    return this.prisma.studentDocument.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}

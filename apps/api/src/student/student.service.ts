import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(schoolId: string, dto: CreateStudentDto) {
    return this.prisma.$transaction(async (tx) => {

      const grade = await tx.grade.findFirst({
        where: {
          id: dto.gradeId,
          schoolId,
        },
      });

      if (!grade) {
        throw new BadRequestException('Invalid grade');
      }

      let admissionNo = dto.admissionNo;

      // 1️⃣ Manual override
      if (admissionNo) {
        const exists = await tx.student.findFirst({
          where: { schoolId, admissionNo },
        });

        if (exists) {
          throw new BadRequestException(
            'Admission number already exists for this school',
          );
        }
      }

      // 2️⃣ Auto-generate
      if (!admissionNo) {
        const sequence = await tx.admissionNumberSequence.findFirst({
          where: {
            schoolId,
            isActive: true,
          },
        });

        if (!sequence) {
          throw new BadRequestException(
            'No active admission number sequence configured for this school',
          );
        }

        const nextCounter = sequence.currentCounter + 1;

        admissionNo =
          sequence.prefix +
          nextCounter.toString().padStart(sequence.padding, '0');

        await tx.admissionNumberSequence.update({
          where: { id: sequence.id },
          data: { currentCounter: nextCounter },
        });
      }

      // 3️⃣ Create student
      return tx.student.create({
        data: {
          firstName: dto.firstName,
          lastName: dto.lastName,
          gender: dto.gender,
          dateOfBirth: dto.dateOfBirth
            ? new Date(dto.dateOfBirth)
            : undefined,
          admissionNo,
          gradeId: dto.gradeId,
          schoolId,
        },
      });
    });
  }

  async findAllBySchool(schoolId: string) {
    return this.prisma.student.findMany({
      where: { schoolId, deletedAt: null },
      include: { grade: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async update(id: string, schoolId: string, dto: UpdateStudentDto) {
    const student = await this.prisma.student.findFirst({
      where: { id, schoolId },
    });

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    // 🔒 Admission number intentionally NOT updatable
    delete (dto as any).admissionNo;

    return this.prisma.student.update({
      where: { id },
      data: {
        ...dto,
        dateOfBirth: dto.dateOfBirth
          ? new Date(dto.dateOfBirth)
          : undefined,
      },
    });
  }
}

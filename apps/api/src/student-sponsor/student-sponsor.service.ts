import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentSponsorDto } from './dto/create-student-sponsor';

@Injectable()
export class StudentSponsorService {
  constructor(private prisma: PrismaService) {}

  async upsert(studentId: string, dto: CreateStudentSponsorDto) {
    return this.prisma.$transaction(async (tx) => {
      const sponsor = await tx.sponsor.create({
        data: {
          name: dto.name,
          type: dto.type,
          contact: dto.contact,
        },
      });

      return tx.studentSponsor.upsert({
        where: { studentId },
        update: {
          sponsorId: sponsor.id,
        },
        create: {
          studentId,
          sponsorId: sponsor.id,
        },
        include: {
          sponsor: true,
        },
      });
    });
  }

  async findByStudent(studentId: string) {
    return this.prisma.studentSponsor.findUnique({
      where: { studentId },
      include: { sponsor: true },
    });
  }

  async remove(studentId: string) {
    return this.prisma.studentSponsor.delete({
      where: { studentId },
    });
  }
}

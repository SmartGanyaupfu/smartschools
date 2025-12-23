import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentAddressDto } from './dto/create-student-address-dto';
import { AddressType } from 'generated/prisma/client';

@Injectable()
export class StudentAddressService {
  constructor(private prisma: PrismaService) {}

  async addOrUpdateAddress(studentId: string, dto: CreateStudentAddressDto) {
    const existing = await this.prisma.studentAddress.findFirst({
      where: {
        studentId,
        type: dto.type,
      },
      include: { address: true },
    });

    if (existing) {
      return this.prisma.address.update({
        where: { id: existing.addressId },
        data: {
          line1: dto.line1,
          line2: dto.line2,
          city: dto.city,
          province: dto.province,
          country: dto.country,
          postalCode: dto.postalCode,
        },
      });
    }

    const address = await this.prisma.address.create({
      data: {
        line1: dto.line1,
        line2: dto.line2,
        city: dto.city,
        province: dto.province,
        country: dto.country,
        postalCode: dto.postalCode,
      },
    });

    return this.prisma.studentAddress.create({
      data: {
        studentId,
        addressId: address.id,
        type: dto.type,
      },
    });
  }

  async getStudentAddresses(studentId: string) {
    return this.prisma.studentAddress.findMany({
      where: { studentId },
      include: { address: true },
    });
  }

  async removeAddress(studentId: string, type: AddressType) {
    const link = await this.prisma.studentAddress.findFirst({
      where: { studentId, type },
    });

    if (!link) return;

    return this.prisma.studentAddress.delete({
      where: { id: link.id },
    });
  }
}

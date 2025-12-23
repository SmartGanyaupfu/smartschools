import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSchoolConfigDto } from './dto/create-school-config.dto';
import { UpdateSchoolConfigDto } from './dto/update-school-config.dto';
import { SessionType } from 'src/common/enums/session-type.enum';
@Injectable()
export class SchoolConfigurationService {
  constructor(private prisma: PrismaService) {}

  async create(schoolId: string, dto: CreateSchoolConfigDto) {
    if (dto.sessionType === SessionType.SINGLE && dto.sessionRotation) {
      throw new BadRequestException(
        'Session rotation is not applicable for SINGLE session schools',
      );
    }

    return this.prisma.schoolConfiguration.create({
      data: {
        ...dto,
        schoolId,
      },
    });
  }

  async findBySchool(schoolId: string) {
    const config = await this.prisma.schoolConfiguration.findUnique({
      where: { schoolId },
    });

    if (!config) {
      throw new NotFoundException('School configuration not found');
    }

    return config;
  }

  async update(schoolId: string, dto: UpdateSchoolConfigDto) {
    if (dto.sessionType === SessionType.SINGLE && dto.sessionRotation) {
      throw new BadRequestException(
        'Session rotation is not applicable for SINGLE session schools',
      );
    }

    return this.prisma.schoolConfiguration.update({
      where: { schoolId },
      data: dto,
    });
  }
}

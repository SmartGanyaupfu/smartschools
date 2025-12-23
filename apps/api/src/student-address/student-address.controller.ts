import {
  Controller,
  UseGuards,
  Post,
  Param,
  Body,
  Get,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateStudentAddressDto } from './dto/create-student-address-dto';
import { StudentAddressService } from './student-address.service';
import { AddressType } from 'generated/prisma/client';

@Controller('students/:studentId/addresses')
@UseGuards(JwtAuthGuard)
export class StudentAddressController {
  constructor(private readonly service: StudentAddressService) {}

  @Post()
  upsert(
    @Param('studentId') studentId: string,
    @Body() dto: CreateStudentAddressDto,
  ) {
    return this.service.addOrUpdateAddress(studentId, dto);
  }

  @Get()
  findAll(@Param('studentId') studentId: string) {
    return this.service.getStudentAddresses(studentId);
  }

  @Delete(':type')
  remove(
    @Param('studentId') studentId: string,
    @Param('type') type: AddressType,
  ) {
    return this.service.removeAddress(studentId, type);
  }
}

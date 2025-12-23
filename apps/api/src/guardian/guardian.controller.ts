import {
  Controller,
  UseGuards,
  Post,
  Body,
  Patch,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateGuardianDto } from './dto/create-guardian-dto';
import { LinkGuardianDto } from './dto/link-guardian-dto';
import { UpdateGuardianDto } from './dto/update-guardian-dto';
import { GuardianService } from './guardian.service';

@Controller('guardians')
@UseGuards(JwtAuthGuard)
export class GuardianController {
  constructor(private readonly service: GuardianService) {}

  @Post()
  create(@Body() dto: CreateGuardianDto) {
    return this.service.createGuardian(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGuardianDto) {
    return this.service.updateGuardian(id, dto);
  }

  @Post('students/:studentId/:guardianId')
  link(
    @Param('studentId') studentId: string,
    @Param('guardianId') guardianId: string,
    @Body() dto: LinkGuardianDto,
  ) {
    return this.service.linkGuardianToStudent(studentId, guardianId, dto);
  }

  @Get('students/:studentId')
  findByStudent(@Param('studentId') studentId: string) {
    return this.service.getStudentGuardians(studentId);
  }

  @Delete('students/:studentId/:guardianId')
  unlink(
    @Param('studentId') studentId: string,
    @Param('guardianId') guardianId: string,
  ) {
    return this.service.unlinkGuardian(studentId, guardianId);
  }
}

import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SchoolConfigurationService } from './school-configuration.service';
import { CreateSchoolConfigDto } from './dto/create-school-config.dto';
import { UpdateSchoolConfigDto } from './dto/update-school-config.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('school-configuration')
export class SchoolConfigurationController {
  constructor(private readonly service: SchoolConfigurationService) {}

  @Post()
  create(@Req() req: any, @Body() dto: CreateSchoolConfigDto) {
    return this.service.create(req.user.schoolId, dto);
  }

  @Get('me')
  findMySchoolConfig(@Req() req: any) {
    return this.service.findBySchool(req.user.schoolId);
  }

  @Patch('me')
  updateMySchoolConfig(@Req() req: any, @Body() dto: UpdateSchoolConfigDto) {
    return this.service.update(req.user.schoolId, dto);
  }
}

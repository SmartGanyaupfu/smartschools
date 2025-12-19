import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('schools')
@UseGuards(JwtAuthGuard)
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  // SYSTEM / SUPER ADMIN ONLY (later)
  @Post()
  create(@Body() dto: CreateSchoolDto) {
    return this.schoolService.create(dto);
  }

  // Tenant scoped
  @Get('me')
  getMySchool(@Req() req: any) {
    return this.schoolService.findById(req.user.schoolId);
  }

  @Patch('me')
  updateMySchool(@Req() req: any, @Body() dto: UpdateSchoolDto) {
    return this.schoolService.update(req.user.schoolId, dto);
  }
}

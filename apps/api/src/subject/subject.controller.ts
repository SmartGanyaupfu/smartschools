import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectService } from './subject.service';

@UseGuards(JwtAuthGuard)
@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  create(@Req() req: any, @Body() dto: CreateSubjectDto) {
    return this.subjectService.create(req.user.schoolId, dto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.subjectService.findAllBySchool(req.user.schoolId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Req() req: any,
    @Body() dto: UpdateSubjectDto,
  ) {
    return this.subjectService.update(id, req.user.schoolId, dto);
  }
}

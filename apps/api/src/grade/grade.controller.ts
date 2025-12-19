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
import { GradeService } from './grade.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('grades')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Post()
  create(@Req() req: any, @Body() dto: CreateGradeDto) {
    return this.gradeService.create(req.user.schoolId, dto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.gradeService.findAllBySchool(req.user.schoolId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Req() req: any,
    @Body() dto: UpdateGradeDto,
  ) {
    return this.gradeService.update(id, req.user.schoolId, dto);
  }
}

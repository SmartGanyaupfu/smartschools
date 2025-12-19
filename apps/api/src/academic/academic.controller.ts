import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AcademicService } from './academic.service';
import { CreateAcademicYearDto } from './dto/CreateAcademicYearDto';
import { CreateTermDto } from './dto/CreateTermDto';
import { SetActiveAcademicYearDto } from './dto/SetActiveAcademicYearDto';

@UseGuards(JwtAuthGuard)
@Controller('academic')
export class AcademicController {
  constructor(private readonly academicService: AcademicService) {}

  @Post('years')
  createAcademicYear(@Req() req: any, @Body() dto: CreateAcademicYearDto) {
    console.log('✅ Database seeded');
    return this.academicService.createYear(req.user.schoolId, dto);
  }

  @Patch('years/active')
  setActiveAcademicYear(
    @Req() req: any,
    @Body() dto: SetActiveAcademicYearDto,
  ) {
    return this.academicService.setActiveYear(
      req.user.schoolId,
      dto.academicYearId,
    );
  }

  @Post('years/:id/terms')
  createTerm(@Param('id') academicYearId: string, @Body() dto: CreateTermDto) {
    return this.academicService.createTerm(academicYearId, dto);
  }
}

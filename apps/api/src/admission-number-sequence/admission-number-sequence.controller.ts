import {
  Controller,
  Post,
  Req,
  Body,
  Get,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AdmissionNumberSequenceService } from './admission-number-sequence.service';
import { CreateAdmissionNumberSequenceDto } from './dto/create-admission-number-sequence.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('admission-number-sequences')
@UseGuards(JwtAuthGuard)
export class AdmissionNumberSequenceController {
  constructor(private service: AdmissionNumberSequenceService) {}

  @Post()
  create(@Req() req, @Body() dto: CreateAdmissionNumberSequenceDto) {
    return this.service.create(req.user.schoolId, dto);
  }

  @Get()
  findAll(@Req() req) {
    return this.service.findAll(req.user.schoolId);
  }

  @Patch(':id/activate')
  activate(@Param('id') id: string, @Req() req) {
    return this.service.activate(id, req.user.schoolId);
  }
}

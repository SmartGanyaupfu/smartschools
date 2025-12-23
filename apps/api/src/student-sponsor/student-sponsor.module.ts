import { Module } from '@nestjs/common';
import { StudentSponsorService } from './student-sponsor.service';
import { StudentSponsorController } from './student-sponsor.controller';

@Module({
  providers: [StudentSponsorService],
  controllers: [StudentSponsorController]
})
export class StudentSponsorModule {}

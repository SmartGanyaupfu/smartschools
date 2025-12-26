import { Module } from '@nestjs/common';
import { StudentEnrollmentService } from './student-enrollment.service';
import { StudentEnrollmentController } from './student-enrollment.controller';

@Module({
  providers: [StudentEnrollmentService],
  controllers: [StudentEnrollmentController]
})
export class StudentEnrollmentModule {}

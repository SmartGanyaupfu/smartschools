import { Module } from '@nestjs/common';
import { StudentMedicalProfileService } from './student-medical-profile.service';
import { StudentMedicalProfileController } from './student-medical-profile.controller';

@Module({
  providers: [StudentMedicalProfileService],
  controllers: [StudentMedicalProfileController],
})
export class StudentMedicalProfileModule {}

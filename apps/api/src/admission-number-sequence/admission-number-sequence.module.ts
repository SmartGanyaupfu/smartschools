import { Module } from '@nestjs/common';
import { AdmissionNumberSequenceService } from './admission-number-sequence.service';
import { AdmissionNumberSequenceController } from './admission-number-sequence.controller';

@Module({
  providers: [AdmissionNumberSequenceService],
  controllers: [AdmissionNumberSequenceController],
})
export class AdmissionNumberSequenceModule {}

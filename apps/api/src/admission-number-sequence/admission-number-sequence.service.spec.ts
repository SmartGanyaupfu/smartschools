import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionNumberSequenceService } from './admission-number-sequence.service';

describe('AdmissionNumberSequenceService', () => {
  let service: AdmissionNumberSequenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdmissionNumberSequenceService],
    }).compile();

    service = module.get<AdmissionNumberSequenceService>(AdmissionNumberSequenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

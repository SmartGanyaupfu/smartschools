import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionNumberSequenceController } from './admission-number-sequence.controller';

describe('AdmissionNumberSequenceController', () => {
  let controller: AdmissionNumberSequenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdmissionNumberSequenceController],
    }).compile();

    controller = module.get<AdmissionNumberSequenceController>(AdmissionNumberSequenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

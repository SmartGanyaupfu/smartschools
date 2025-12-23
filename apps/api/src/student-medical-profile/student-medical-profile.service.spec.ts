import { Test, TestingModule } from '@nestjs/testing';
import { StudentMedicalProfileService } from './student-medical-profile.service';

describe('StudentMedicalProfileService', () => {
  let service: StudentMedicalProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentMedicalProfileService],
    }).compile();

    service = module.get<StudentMedicalProfileService>(StudentMedicalProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

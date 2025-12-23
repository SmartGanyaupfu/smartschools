import { Test, TestingModule } from '@nestjs/testing';
import { StudentSponsorService } from './student-sponsor.service';

describe('StudentSponsorService', () => {
  let service: StudentSponsorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentSponsorService],
    }).compile();

    service = module.get<StudentSponsorService>(StudentSponsorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

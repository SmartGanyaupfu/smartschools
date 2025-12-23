import { Test, TestingModule } from '@nestjs/testing';
import { StudentAddressService } from './student-address.service';

describe('StudentAddressService', () => {
  let service: StudentAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentAddressService],
    }).compile();

    service = module.get<StudentAddressService>(StudentAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

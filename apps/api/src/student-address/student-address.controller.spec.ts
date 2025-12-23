import { Test, TestingModule } from '@nestjs/testing';
import { StudentAddressController } from './student-address.controller';

describe('StudentAddressController', () => {
  let controller: StudentAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentAddressController],
    }).compile();

    controller = module.get<StudentAddressController>(StudentAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

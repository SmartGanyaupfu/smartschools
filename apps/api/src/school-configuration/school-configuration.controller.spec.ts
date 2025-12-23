import { Test, TestingModule } from '@nestjs/testing';
import { SchoolConfigurationController } from './school-configuration.controller';

describe('SchoolConfigurationController', () => {
  let controller: SchoolConfigurationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolConfigurationController],
    }).compile();

    controller = module.get<SchoolConfigurationController>(SchoolConfigurationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

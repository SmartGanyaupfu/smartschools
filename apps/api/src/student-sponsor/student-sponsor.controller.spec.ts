import { Test, TestingModule } from '@nestjs/testing';
import { StudentSponsorController } from './student-sponsor.controller';

describe('StudentSponsorController', () => {
  let controller: StudentSponsorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentSponsorController],
    }).compile();

    controller = module.get<StudentSponsorController>(StudentSponsorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

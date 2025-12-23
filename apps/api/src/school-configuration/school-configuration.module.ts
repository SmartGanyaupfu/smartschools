import { Module } from '@nestjs/common';
import { SchoolConfigurationService } from './school-configuration.service';
import { SchoolConfigurationController } from './school-configuration.controller';

@Module({
  providers: [SchoolConfigurationService],
  controllers: [SchoolConfigurationController],
})
export class SchoolConfigurationModule {}

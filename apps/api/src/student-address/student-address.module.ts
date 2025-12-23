import { Module } from '@nestjs/common';
import { StudentAddressService } from './student-address.service';
import { StudentAddressController } from './student-address.controller';

@Module({
  providers: [StudentAddressService],
  controllers: [StudentAddressController]
})
export class StudentAddressModule {}

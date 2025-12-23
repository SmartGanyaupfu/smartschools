import { PartialType } from '@nestjs/mapped-types';
import { CreateSchoolConfigDto } from './create-school-config.dto';

export class UpdateSchoolConfigDto extends PartialType(CreateSchoolConfigDto) {}

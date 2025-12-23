import { IsEnum, IsOptional } from 'class-validator';
import { AttendanceType } from 'src/common/enums/attendance-type.enum';
import { SessionRotation } from 'src/common/enums/session-rotation.enum';
import { SessionType } from 'src/common/enums/session-type.enum';

export class CreateSchoolConfigDto {
  @IsEnum(AttendanceType)
  attendanceType: AttendanceType;

  @IsEnum(SessionType)
  sessionType: SessionType;

  @IsOptional()
  @IsEnum(SessionRotation)
  sessionRotation?: SessionRotation;
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { SchoolModule } from './school/school.module';
import { AcademicModule } from './academic/academic.module';
import { GradeModule } from './grade/grade.module';
import { SubjectModule } from './subject/subject.module';
import { SchoolConfigurationModule } from './school-configuration/school-configuration.module';
import { StudentModule } from './student/student.module';
import { AdmissionNumberSequenceModule } from './admission-number-sequence/admission-number-sequence.module';
import { GuardianController } from './guardian/guardian.controller';
import { GuardianModule } from './guardian/guardian.module';
import { StudentAddressModule } from './student-address/student-address.module';
import { StudentMedicalProfileModule } from './student-medical-profile/student-medical-profile.module';
import { StudentSponsorModule } from './student-sponsor/student-sponsor.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    SchoolModule,
    AcademicModule,
    GradeModule,
    SubjectModule,
    SchoolConfigurationModule,
    StudentModule,
    AdmissionNumberSequenceModule,
    GuardianModule,
    StudentAddressModule,
    StudentMedicalProfileModule,
    StudentSponsorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

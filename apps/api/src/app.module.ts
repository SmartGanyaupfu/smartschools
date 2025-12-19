import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { SchoolModule } from './school/school.module';
import { AcademicModule } from './academic/academic.module';
import { GradeModule } from './grade/grade.module';

@Module({
  imports: [PrismaModule, AuthModule, SchoolModule, AcademicModule, GradeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

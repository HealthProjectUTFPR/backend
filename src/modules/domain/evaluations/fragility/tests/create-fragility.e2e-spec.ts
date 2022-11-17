import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { StudentModule } from 'src/modules/domain/student/student.module';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import request from 'supertest';
import { EvaluationModule } from '../../evaluation.module';

let app: INestApplication;
let server: request.SuperTest<request.Test>;
let studentId: string;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [
      EvaluationModule,
      UserModule,
      DatabaseTestModule,
      AuthModule,
      StudentModule,
    ],
  }).compile();
});

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
let token: string;
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

  app = module.createNestApplication();
  await app.init();
  server = request(app.getHttpServer());

  await server
    .post('/auth/register')
    .send({ email: 'test@fragility.com', name: 'teste', password: '12345678' })
    .expect(201);

  const login = await server
    .post('/auth/login')
    .send({ email: 'test@fragility.com', password: '12345678' })
    .expect(200);

  token = login.text;

  const student = await server
    .post('/student/create')
    .send({
      name: 'Estudante Testte',
      sex: 'M',
      breed: 'Branco',
      stature: 192.5,
      healthPlan: 'free',
      emergencyContact: '449994484848',
      contact: '449994484848',
      address: 'Rua 123',
      birthDate: '1980-10-12T03:00:00.000Z',
      weight: 97.6,
      note: 'sdfasd',
      flag: true,
    })
    .set('Authorization', `Bearer ${token}`);

  studentId = student.body.id;
});

afterAll(async () => {
  await app.close();
});

describe('CRiar avaliações de Fragilidade', () => {
  it(`/:studentId (CREATE) Falha na validação do resultado`, async () => {
    return await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'fragilidade',
        data: {
          date: '2022-11-10T03:00:00.000Z',
          weight: 59,
          looseWeight: 4.6,
          activityDifficultLastWeekFrequency: 5,
          KeepGoingDifficultLastWeekFrequency: 5,
          walkingDays: 2,
          walkingMinutesPerDay: 30,
          moderateActivityDays: 2,
          moderateActivityMinutesPerDay: 30,
          vigorousActivityDays: 2,
          vigorousActivityMinutesPerDay: 30,
          time: 30,
          handgripStrength: 5,
          imc: 26.2,
          mets1: 198,
          mets2: 240,
          mets3: 480,
          metsTotal: 918,
          kcal: 902.7,
          score: 5,
          result: 'frágil',
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(400);
  });

  it(`/:studentId (CREATE) Sucesso na criação`, async () => {
    return await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'fragilidade',
        data: {
          date: '2022-11-10T03:00:00.000Z',
          weight: 59,
          looseWeight: 4.6,
          activityDifficultLastWeekFrequency: 5,
          KeepGoingDifficultLastWeekFrequency: 5,
          walkingDays: 2,
          walkingMinutesPerDay: 30,
          moderateActivityDays: 2,
          moderateActivityMinutesPerDay: 30,
          vigorousActivityDays: 2,
          vigorousActivityMinutesPerDay: 30,
          time: 30,
          handgripStrength: 5,
          imc: 26.2,
          mets1: 198,
          mets2: 240,
          mets3: 480,
          metsTotal: 918,
          kcal: 902.7,
          score: 3,
          result: 'frágil',
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(201);
  });
});

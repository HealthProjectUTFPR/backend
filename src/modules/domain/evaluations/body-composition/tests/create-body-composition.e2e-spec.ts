import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { EvaluationModule } from '../../evaluation.module';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import { StudentModule } from 'src/modules/domain/student/student.module';

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
    .send({
      email: 'test@test.com',
      name: 'teste',
      password: '12345678',
    })
    .expect(201);

  const login = await server
    .post('/auth/login')
    .send({
      email: 'test@test.com',
      password: '12345678',
    })
    .expect(200);

  token = login.text;

  const student = await server
    .post('/student/create')
    .send({
      name: 'Estudante',
      sex: 'H',
      breed: 'Branco',
      stature: 192.5,
      healthPlan: 'free',
      emergencyContact: '449994484848',
      contact: '449994484848',
      address: 'Rua 123',
      birthDate: '1980-10-12T03:00:00.000Z',
      flag: true,
    })
    .set('Authorization', `Bearer ${token}`);

  studentId = student.body.id;
});

afterAll(async () => {
  await app.close();
});

describe('Criar avaliações Composição Corporal', () => {
  it(`/:studentId (CREATE) falha na validação do resultado`, async () => {
    return await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'bodyComposition',
        data: {
          date: '2022-11-18T03:00:00.000Z',
          weight: 23,
          waist: 23,
          hip: 23,
          waistEstature: 0.11948051948051948,
          waistHip: 1,
          imc: 6.206780232754258,
          scapula: 33,
          triceps: 33,
          biceps: 33,
          suprailiac: 33,
          sumPleats: 132,
          density: 1.0063072907590642,
          bodyFat: 41.89745969803944,
          mg: 9.636415730549071,
          mcm: 13.363584269450929,
          minimumWeight: 18.560533707570883,
          maximumWeight: 19.65232987090353,
          cardiovascularRisk: {
            waistCircumference: 'none',
            rcq: 'none',
          },
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(201);
  });

  it(`/:studentId (CREATE) sucesso na criação`, async () => {
    return await server
      .post(`/evaluation/${studentId}`)
      .send({
        type: 'bodyComposition',
        data: {
          date: '2022-11-18T03:00:00.000Z',
          weight: 23,
          waist: 23,
          hip: 23,
          waistEstature: 0.11948051948051948,
          waistHip: 1,
          imc: 6.206780232754258,
          scapula: 33,
          triceps: 33,
          biceps: 33,
          suprailiac: 33,
          sumPleats: 132,
          density: 1.0063072907590642,
          bodyFat: 41.89745969803944,
          mg: 9.636415730549071,
          mcm: 13.363584269450929,
          minimumWeight: 18.560533707570883,
          maximumWeight: 19.65232987090353,
          cardiovascularRisk: {
            waistCircumference: 'none',
            rcq: 'Risco aumentado',
          },
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(201);
  });
});

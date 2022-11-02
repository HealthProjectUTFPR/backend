import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { EvaluationModule } from '../../evaluation.module';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';

let app: INestApplication;
let server: request.SuperTest<request.Test>;
let token: string;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [EvaluationModule, UserModule, DatabaseTestModule, AuthModule],
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
});

afterAll(async () => {
  await app.close();
});

describe('Criar avaliações Composição Corporal', () => {
  it(`/ (CREATE) falha na validação do resultado`, async () => {
    return await server
      .post('/evaluation')
      .send({
        type: 'bodyComposition',
        data: {
          weight: 80,
          time: 10,
          date: '2022-10-12T03:00:00.000Z',
          finalFC: 150,
          vo2Lmin: 3.733740000000001,
          vo2MlKG: 46.67175000000002,
          result: 'Muito bom!',
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(400);
  });

  it(`/ (CREATE) sucesso na criação`, async () => {
    return await server
      .post('/evaluation')
      .send({
        type: 'bodyComposition',
        data: {
          weight: 75,
          time: 10,
          date: '2022-10-12T03:00:00.000Z',
          finalFC: 150,
          vo2Lmin: 3.733740000000001,
          vo2MlKG: 46.67175000000002,
          result: 'Muito bom!',
        },
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(201);
  });
});

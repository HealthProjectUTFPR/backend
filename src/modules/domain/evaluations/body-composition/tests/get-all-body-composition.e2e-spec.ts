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

describe('Buscar avaliações Composição Corporal', () => {
  it(`/ (GET) deve receber um array vazio como resultado`, async () => {
    return await server
      .get('/evaluation?page=1&limit=50&orderBy=updatedAt')
      .set('Authorization', `Bearer ${token}`)
      .expect((res) => {
        expect(res.body.data).toStrictEqual([]);
      })
      .expect(200);
  });

  it(`/ (GET) deve receber um array não vazio como resultado`, async () => {
    for (let i = 0; i < 5; i++) {
      await server
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
        .set('Authorization', `Bearer ${token}`);
    }

    return await server
      .get('/evaluation?page=1&limit=50&orderBy=updatedAt')
      .set('Authorization', `Bearer ${token}`)
      .expect((res) => {
        expect(res.body.meta.totalItems).toBe(5);
      })
      .expect(200);
  });

  it(`/ (GET) deve falhar devido a página invalida`, async () => {
    const page = -1;
    const limit = 5;
    const orderBy = 'updatedAt';

    return await server
      .get(`/evaluation?page=${page}&limit=${limit}&orderBy=${orderBy}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(400);
  });
});

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
let id: string;

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

describe('Buscar avaliação Composição Corporal', () => {
  it(`/:id?type=bodyComposition (GET) deve receber erro ao buscar id inválido`, async () => {
    id = 'aca8e3cd-2c41-4b7e-9e1f-f3d8206064a';

    return await server
      .get(`/evaluation/${id}?type=bodyComposition`)
      .set('Authorization', `Bearer ${token}`)
      .expect(400);
  });

  it(`/:id?type=bodyComposition (GET) deve receber erro ao buscar id não válido porém inexistente`, async () => {
    id = 'aca8e3cd-2c41-4b7e-9e1f-f3d8206064a9';

    return await server
      .get(`/evaluation/${id}?type=bodyComposition`)
      .set('Authorization', `Bearer ${token}`)
      .expect(404);
  });

  it(`/:id?type=bodyComposition (GET) deve retornar sucesso ao buscar id válido`, async () => {
    const response = await server
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

    id = response.body.id;

    return await server
      .get(`/evaluation/${id}?type=bodyComposition`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});

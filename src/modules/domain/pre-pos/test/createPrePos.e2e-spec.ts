import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import * as request from 'supertest';
import { PrePosModule } from '../prePos.module';

let app: INestApplication;
let appRequest: request.SuperTest<request.Test>;
let token1: string;
let token2: string;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [DatabaseTestModule, AuthModule, PrePosModule],
  }).compile();
  app = module.createNestApplication();
  await app.init();

  appRequest = request(app.getHttpServer());

  await appRequest.post('/auth/register').send({
    email: 'test1@test.com',
    password: '12345678',
  });

  const login1 = await appRequest
    .post('/auth/login')
    .send({
      email: 'test1@test.com',
      password: '12345678',
    })
    .expect(200);

  token1 = login1.text;

  await appRequest.post('/auth/register').send({
    email: 'test2@test.com',
    password: '12345678',
  });

  const login2 = await appRequest
    .post('/auth/login')
    .send({
      email: 'test2@test.com',
      password: '12345678',
    })
    .expect(200);

  token2 = login2.text;
});

afterAll(async () => {
  await app.close();
});

describe('Create PrePos', () => {
  it('/create (POST) - Fail (user not logged in)', async () => {
    return await appRequest
      .post('/prepos/create')
      .send({
        date: "2013-04-23T18:25:43.511Z",
        horarioPos: "2015-04-23T18:25:43.511Z",
        horarioPre: "2014-04-23T18:25:43.511Z",
        pasPre: 30,
        pasPro:31,
        padPre:28,
        padPro:29,
        glicemiaPro: 26,
        glicemiaPre: 27,
        horarioTreino: 20,
        pseE: 19,
        observacao: "teste",
      })
      .expect(403);
  });

  it('/create (POST) - Fail (required field missing)', async () => {
    return await appRequest
      .post('/prepos/create')
      .send({
        horarioPos: "2015-04-23T18:25:43.511Z",
        horarioPre: "2014-04-23T18:25:43.511Z",
        pasPre: 30,
        pasPro:31,
        padPre:28,
        padPro:29,
        glicemiaPro: 26,
        glicemiaPre: 27,
        horarioTreino: 20,
        pseE: 19,
        observacao: "teste",
      })
      .set('Authorization', `Bearer ${token1}`)
      .expect(400);
  });

  it('/create (POST) - Sucess', async () => {
    await appRequest
      .post('/prepos/create')
      .send({
        date: "2013-04-23T18:25:43.511Z",
        horarioPos: "2015-04-23T18:25:43.511Z",
        horarioPre: "2014-04-23T18:25:43.511Z",
        pasPre: 30,
        pasPro: 31,
        padPre: 28,
        padPro: 29,
        glicemiaPro: 26,
        glicemiaPre: 27,
        horarioTreino: 20,
        pseE: 19,
        observacao: "teste",
      })
      .set('Authorization', `Bearer ${token1}`)
      .expect(201);
  });
});

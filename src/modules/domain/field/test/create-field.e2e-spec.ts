import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import * as request from 'supertest';
import { FieldModule } from '../field.module';

let app: INestApplication;
let appRequest: request.SuperTest<request.Test>;
let token1: string;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [DatabaseTestModule, AuthModule, FieldModule],
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
});

afterAll(async () => {
  await app.close();
});

describe('Create Field', () => {
  it('/create (POST) - Fail (user not logged in)', async () => {
    return await appRequest
      .post('/field/create')
      .send({
        name: 'field integer 1',
        value:'0',
        dataType: 'int',
      })
      .expect(403);
  });

  it('/create (POST) - Fail (required field is missing)', async () => {
    return await appRequest
      .post('/field/create')
      .set('Authorization', `Bearer ${token1}`)
      .send({
        value:'0',
        dataType: 'int',
      })
      .expect(400);
  });

  it('/create (POST) - Fail (invalid enum on field type)', async () => {
    return await appRequest
      .post('/field/create')
      .set('Authorization', `Bearer ${token1}`)
      .send({
        name: 'field integer 1',
        value:'0',
        dataType: 'INTEGER',
      })
      .expect(400);
  });

  it('/create (POST) - Success (user logged in)', async () => {
    return await appRequest
      .post('/field/create')
      .send({
        name: 'field integer 1',
        value:'0',
        dataType: 'int',
      })
      .set('Authorization', `Bearer ${token1}`)
      .expect(201);
  });

});
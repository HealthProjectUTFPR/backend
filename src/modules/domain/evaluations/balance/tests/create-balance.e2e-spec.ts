import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from "@nestjs/common";
import { EvaluationModule } from '../../evaluation.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';

let app: INestApplication;
let server: request.SuperTest<request.Test>;
let token;

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

describe('Criar avaliações de Equilibrio', () => {
    it(`/ (CREATE) sucesso na criação`, async () => {
        return await server
          .post('/evaluation')
          .send({
            "type": "AEQ",
            "data": {
                "date" : "2022-11-06T03:00:00.000Z",
                "campo1" : 4,
                "campo2" : 4,
                "campo3" : 3,
                "campo4" : 1,
                "campo5" : 0,
                "campo6" : 1,
                "campo7" : 2,
                "campo8" : 4,
                "campo9" : 3,
                "campo10" : 2,
                "campo11" : 1,
                "campo12" : 4,
                "campo13" : 2,
                "campo14" : 1,
                "result" : 32
            },
          })
          .set('Authorization', `Bearer ${token}`)
          .expect(201);
      });
});
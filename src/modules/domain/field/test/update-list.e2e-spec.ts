import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { DatabaseTestModule } from 'src/modules/infrastructure/database/database-test.module';
import * as request from 'supertest';
import { FieldModule } from '../field.module';

let app: INestApplication;
let appRequest: request.SuperTest<request.Test>;
let token1: string;
let fieldId: string;

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

    const createField = await appRequest
        .post('/field/create')
        .set('Authorization', `Bearer ${token1}`)
        .send({
            name: 'Field 1',
            type: 'string',
        })
        .expect(201);
    
    fieldId = createField.body.id;
});

afterAll(async () => {
    await app.close();
});

describe('Update Field', () => {
    it('/update (PUT) - Fail (user not logged in)', async () => {
        return await appRequest
            .patch(`/field/update/${fieldId}`)
            .send({
                name: 'Field 1',
                type: 'string',
            })
            .expect(403);
    });


    it('/update (PUT) - Success', async () => {
        return await appRequest
            .patch(`/field/update/${fieldId}`)
            .set('Authorization', `Bearer ${token1}`)
            .send({
                name: 'Field 1',
                type: 'boolean',
            })
            .expect(200);
    });
});

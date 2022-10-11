import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CategoryModule } from 'src/modules/domain/category/category.module';
import { FieldModule } from 'src/modules/domain/field/field.module';
import { TestBatteriesModule } from 'src/modules/domain/test-batteries/test-batteries.module';
import { TodoItemModule } from 'src/modules/domain/todo-item/todo-item.module';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { DatabaseModule } from 'src/modules/infrastructure/database/database.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import { AppController } from './app.controller';
import { EvaluationModule } from 'src/modules/domain/evaluations/base/evaluation.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TodoItemModule,
    CategoryModule,
    FieldModule,
    EvaluationModule,
    TestBatteriesModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}

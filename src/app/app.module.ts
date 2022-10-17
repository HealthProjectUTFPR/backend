import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CategoryModule } from 'src/modules/domain/category/category.module';
import { PrePosModule } from 'src/modules/domain/pre-pos/pre-pos.module';
import { TodoItemModule } from 'src/modules/domain/todo-item/todo-item.module';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { DatabaseModule } from 'src/modules/infrastructure/database/database.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import { AppController } from './app.controller';
import { StudentModule } from 'src/modules/domain/student/student.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    StudentModule,
    TodoItemModule,
    CategoryModule,
    DatabaseModule,
    PrePosModule,
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

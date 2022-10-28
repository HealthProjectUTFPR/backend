import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from 'src/modules/infrastructure/auth/auth.module';
import { DatabaseModule } from 'src/modules/infrastructure/database/database.module';
import { UserModule } from 'src/modules/infrastructure/user/user.module';
import { EvaluationModule } from 'src/modules/domain/evaluations/evaluation.module';

@Module({
  imports: [UserModule, AuthModule, EvaluationModule, DatabaseModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}

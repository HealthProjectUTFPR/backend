import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from 'src/modules/domain/evaluations/entities/evaluation.entity';
import { User } from '../user/entities/user.entity';
import { Field } from 'src/modules/domain/evaluations/entities/field.entity';
import { TestBatteries } from 'src/modules/domain/evaluations/entities/test-batteries.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      logging: false,
      entities: [User, Evaluation, Field, TestBatteries],
      synchronize: true,
    }),
  ],
})
export class DatabaseTestModule {}

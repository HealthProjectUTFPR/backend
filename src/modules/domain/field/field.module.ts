import { Module } from '@nestjs/common';
import { FieldService } from './field.service';
import { FieldController } from './field.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Field } from './entities/field.entity';
import { Evaluation } from '../evaluations/base/entities/evaluation.entity';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { TestBatteries } from '../test-batteries/entities/test-batteries.entity';
import { TestBatteriesField } from '../test-batteries_field/entities/test-batteries_field.entity';
import { EvaluationField } from '../evaluation_field/entities/evaluation_field.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Field,
      Evaluation,
      TestBatteries,
      User,
      TestBatteriesField,
      EvaluationField,
    ]),
  ],
  controllers: [FieldController],
  providers: [FieldService],
  exports: [TypeOrmModule],
})
export class FieldModule {}

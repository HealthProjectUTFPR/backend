import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { EvaluationField } from '../evaluation_field/entities/evaluation_field.entity';
import { Field } from '../field/entities/field.entity';
import { TestBatteries } from '../test-batteries/entities/test-batteries.entity';
import { Evaluation } from './entities/evaluation.entity';
import { EvaluationController } from './evaluation.controller';
import { EvaluationService } from './evaluation.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Evaluation,
      Field,
      TestBatteries,
      User,
      EvaluationField,
    ]),
  ],
  controllers: [EvaluationController],
  providers: [EvaluationService],
  exports: [TypeOrmModule],
})
export class EvaluationModule {}

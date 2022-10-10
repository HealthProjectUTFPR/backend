import { Module } from '@nestjs/common';
import { EvaluationFieldService } from './evaluation_field.service';
import { EvaluationFieldController } from './evaluation_field.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from '../evaluation/entities/evaluation.entity';
import { Field } from '../field/entities/field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluation, Field])],
  controllers: [EvaluationFieldController],
  providers: [EvaluationFieldService],
  exports: [TypeOrmModule]
})
export class EvaluationFieldModule {}

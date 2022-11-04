import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from './entities/evaluation.entity';
import { Field } from './entities/field.entity';
import { TestBatteries } from './entities/test-batteries.entity';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { SarcopeniaFactory } from './sarcopenia/sarcopenia.factory';
import { SarcopeniaStrategy } from './sarcopenia/sarcopenia.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluation, Field, TestBatteries, User])],
  controllers: [EvaluationController],
  providers: [EvaluationService, SarcopeniaFactory, SarcopeniaStrategy],
  exports: [TypeOrmModule],
})
export class EvaluationModule {}

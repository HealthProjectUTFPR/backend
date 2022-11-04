import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Student } from '../student/entities/student.entity';
import { CardiorespiratoryCapacityFactory } from './cardiorespiratory-capacity/cardiorespiratory-capacity.factory';
import { CardiorespiratoryCapacityStrategy } from './cardiorespiratory-capacity/cardiorespiratory-capacity.strategy';
import { Evaluation } from './entities/evaluation.entity';
import { Field } from './entities/field.entity';
import { TestBatteries } from './entities/test-batteries.entity';
import { EvaluationController } from './evaluation.controller';
import { EvaluationService } from './evaluation.service';
import { SarcopeniaFactory } from './sarcopenia/sarcopenia.factory';
import { SarcopeniaStrategy } from './sarcopenia/sarcopenia.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Evaluation, Field, TestBatteries, User, Student]),
  ],
  controllers: [EvaluationController],
  providers: [
    EvaluationService,
    SarcopeniaFactory,
    SarcopeniaStrategy,
    CardiorespiratoryCapacityStrategy,
    CardiorespiratoryCapacityFactory,
  ],
  exports: [TypeOrmModule],
})
export class EvaluationModule {}

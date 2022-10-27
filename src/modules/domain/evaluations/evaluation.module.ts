import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from './entities/evaluation.entity';
import { Field } from './entities/field.entity';
import { TestBatteries } from './entities/test-batteries.entity';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { CardiorespiratoryCapacityStrategy } from './cardiorespiratory-capacity/cardiorespiratory-capacity.strategy';
import { CardiorespiratoryCapacityFactory } from './cardiorespiratory-capacity/cardiorespiratory-capacity.factory';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluation, Field, TestBatteries, User])],
  controllers: [EvaluationController],
  providers: [
    EvaluationService,
    CardiorespiratoryCapacityStrategy,
    CardiorespiratoryCapacityFactory,
  ],
  exports: [TypeOrmModule],
})
export class EvaluationModule {}

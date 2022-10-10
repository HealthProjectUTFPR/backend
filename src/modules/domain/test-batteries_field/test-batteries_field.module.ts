import { Module } from '@nestjs/common';
import { TestBatteriesFieldService } from './test-batteries_field.service';
import { Field } from '../field/entities/field.entity';
import { TestBatteries } from '../test-batteries/entities/test-batteries.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestBatteriesFieldController } from './test-batteries_field.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Field, TestBatteries])],
  controllers: [TestBatteriesFieldController],
  providers: [TestBatteriesFieldService],
  exports: [TypeOrmModule]
})
export class TestBatteriesFieldModule {}

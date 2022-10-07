import { Module } from '@nestjs/common';
import { TestBatteriesFieldService } from './test-batteries_field.service';
import { TestBatteriesFieldController } from './test-batteries_field.controller';

@Module({
  controllers: [TestBatteriesFieldController],
  providers: [TestBatteriesFieldService]
})
export class TestBatteriesFieldModule {}

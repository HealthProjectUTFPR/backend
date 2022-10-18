import { Module } from '@nestjs/common';
import { DepressaoService } from './depressao.service';
import { DepressaoController } from './depressao.controller';

@Module({
  controllers: [DepressaoController],
  providers: [DepressaoService]
})
export class DepressaoModule {}

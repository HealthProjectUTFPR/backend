import { Module } from '@nestjs/common';
import { SarcopeniaService } from './sarcopenia.service';
import { SarcopeniaController } from './sarcopenia.controller';

@Module({
  controllers: [SarcopeniaController],
  providers: [SarcopeniaService],
})
export class SarcopeniaModule {}

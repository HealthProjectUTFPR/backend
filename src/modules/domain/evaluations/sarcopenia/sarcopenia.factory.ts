import { Injectable } from '@nestjs/common';
import { Evaluation } from '../entities/evaluation.entity';
import { SarcopeniaDto } from './dto/sarcopenia.dto';

@Injectable()
export class SarcopeniaFactory {
  async createOrUpdate(input: SarcopeniaDto): Promise<Evaluation> {
    return 'test';
  }
}

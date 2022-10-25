import { Injectable } from '@nestjs/common';
import { Evaluation } from '../entities/evaluation.entity';
import { CardiorespiratoryCapacityDto } from './dto/cardiorespiratoryCapacity.dto';

@Injectable()
export class CardiorespiratoryCapacityFactory {
  async createOrUpdate(
    input: CardiorespiratoryCapacityDto,
  ): Promise<Evaluation> {
    return 'teste';
  }
}

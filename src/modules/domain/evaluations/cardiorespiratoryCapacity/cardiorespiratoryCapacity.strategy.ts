import { Injectable } from '@nestjs/common';
import { Evaluation } from '../entities/evaluation.entity';
import { CardiorespiratoryCapacityFactory } from './cardiorespiratoryCapacity.factory';
import { CardiorespiratoryCapacityDto } from './dto/cardiorespiratoryCapacity.dto';
import { calculateCardiorespiratoryCapacityResult } from './helper/calculateResult';
import { calculateVO2LMin } from './helper/calculateVO2Lmin';
import { calculateVO2MlKg } from './helper/calculateVO2MlKg';
import { ICardiorespiratoryCapacity } from './interface/cardiorespiratoryCapacity.interface';

@Injectable()
export class CardiorespiratoryCapacityStrategy {
  constructor(
    private readonly cardiorespiratoryCapacityFactory: CardiorespiratoryCapacityFactory,
  ) {}

  private recalculateResult({
    weight,
    finalFC,
    time,
    age,
    sex,
  }: Partial<ICardiorespiratoryCapacity>) {
    const vo2Lmin = calculateVO2LMin({ weight, finalFC, time, age, sex });
    const vo2MlKG = calculateVO2MlKg({ weight, vo2Lmin });

    return calculateCardiorespiratoryCapacityResult({ sex, vo2MlKG });
  }

  async create(input: CardiorespiratoryCapacityDto): Promise<Evaluation> {
    const sex = 'Homem';
    const age = 70;
    const { date, weight, time, finalFC, vo2Lmin, vo2MlKG, result } = input;

    const recalculationResult = this.recalculateResult({
      weight,
      finalFC,
      time,
      age,
      sex,
    });

    return await this.cardiorespiratoryCapacityFactory.createOrUpdate(input);
  }
}

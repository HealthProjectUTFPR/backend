import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { CardiorespiratoryCapacityFactory } from './cardiorespiratoryCapacity.factory';
import { CardiorespiratoryCapacityDto } from './dto/cardiorespiratoryCapacity.dto';
import { calculateCardiorespiratoryCapacityResult } from './helpers/calculateResult';
import { calculateVO2LMin } from './helpers/calculateVO2Lmin';
import { calculateVO2MlKg } from './helpers/calculateVO2MlKg';
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

  private validateResult(
    result: string,
    input: Partial<ICardiorespiratoryCapacity>,
  ) {
    const recalculationResult = this.recalculateResult(input);

    console.log('recalculationResult', recalculationResult);

    return recalculationResult === result;
  }

  async create(
    input: CardiorespiratoryCapacityDto,
    user: User,
  ): Promise<Evaluation> {
    const sex = 'Homem';
    const age = 70;
    const { date, weight, time, finalFC, vo2Lmin, vo2MlKG, result } = input;

    const isResultValid = this.validateResult(result, {
      weight,
      finalFC,
      time,
      age,
      sex,
    });

    if (!isResultValid)
      throw new BadRequestException(
        'Resultado inválido de acordo com os dados repassados!',
      );

    return await this.cardiorespiratoryCapacityFactory.createOrUpdate(
      {
        date,
        weight,
        time,
        finalFC,
        vo2Lmin,
        vo2MlKG,
        result,
      },
      user,
    );
  }
}

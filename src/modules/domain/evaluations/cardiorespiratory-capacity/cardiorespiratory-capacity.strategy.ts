import {
  BadRequestException,
  Body,
  Injectable,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { CardiorespiratoryCapacityFactory } from './cardiorespiratory-capacity.factory';
import { CardioRespiratoryCapacitySchema } from './dto/cardiorespiratory-capacity.dto';
import { CreateCardiorespiratoryCapacityDto } from './dto/create-cardiorespiratory-capacity.dto';
import { GetCardiorespiratoryCapacityDto } from './dto/get-cardiorespiratory-capacity.dto';
import { calculateCardiorespiratoryCapacityResult } from './helpers/calculate-result';
import { calculateVO2LMin } from './helpers/calculate-vo2-lmin';
import { calculateVO2MlKg } from './helpers/calculate-vo2-ml-kg';
import { ICardiorespiratoryCapacity } from './interface/cardiorespiratory-capacity.interface';

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
    input: CreateCardiorespiratoryCapacityDto,
    user: User,
    type: string,
  ): Promise<GetCardiorespiratoryCapacityDto> {
    await CardioRespiratoryCapacitySchema.validateAsync(input);

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

    const data: CreateCardiorespiratoryCapacityDto = {
      date,
      weight,
      time,
      finalFC,
      vo2Lmin,
      vo2MlKG,
      result,
    };

    return await this.cardiorespiratoryCapacityFactory.create(data, user, type);
  }
}

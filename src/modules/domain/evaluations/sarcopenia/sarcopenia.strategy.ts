import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { CreateSarcopeniaDTO } from './dto/create-sarcopenia';
import { GetSarcopeniaDto } from './dto/get-sarcopenia-dto';
import calculateEstimatedMuscleMass from './helpers/calculate-estimated-muscle-mass';
import calculateIndexOfEstimatedMuscleMassPerStature from './helpers/calculate-index-of-estimated-muscle-mass-per-stature';
import calculateIndexOfMeasuredMuscleMassPerStature from './helpers/calculate-index-of-measured-muscle-mass-per-stature';
import classifyResult from './helpers/classify-result';
import { ISarcopenia } from './interfaces/sarcopenia.interface';
import { SarcopeniaFactory } from './sarcopenia.factory';

@Injectable()
export class SarcopeniaStrategy {
  constructor(private readonly sarcopeniaFactory: SarcopeniaFactory) {}

  private recalculateResult(input: Partial<ISarcopenia>) {
    const {
      sex,
      age,
      weight,
      race,
      height,
      walkingSpeed,
      handGripStrength,
      measuredMuscleMass,
    } = input;

    let muscleMassIndex;

    if (measuredMuscleMass) {
      muscleMassIndex = calculateIndexOfMeasuredMuscleMassPerStature({
        measuredMuscleMass,
        height,
      });
    } else {
      const estimatedMuscleMass = calculateEstimatedMuscleMass({
        weight,
        sex,
        race,
        height,
        age,
      });

      muscleMassIndex = calculateIndexOfEstimatedMuscleMassPerStature({
        estimatedMuscleMass,
        height,
      });
    }

    const classifiedResult = classifyResult({
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      sex,
    });

    return classifiedResult;
  }

  private validateResult(
    hasSarcopenia: boolean,
    input: Partial<ISarcopenia>,
  ): boolean {
    const recalculatedResult = this.recalculateResult(input);

    return recalculatedResult === hasSarcopenia;
  }

  async create(
    input: CreateSarcopeniaDTO,
    user: User,
    type: string,
  ): Promise<GetSarcopeniaDto> {
    try {
      const sex = 'homem';
      const age = 70;
      const race = '';
      const height = 1.74;
      const {
        date,
        weight,
        measuredMuscleMass,
        estimatedMuscleMass,
        walkingSpeed,
        handGripStrength,
        muscleMassIndex,
        calfCircumference,
        result,
        hasSarcopenia,
      } = input;

      const isResultValid = this.validateResult(hasSarcopenia, {
        sex,
        age,
        weight,
        race,
        height,
        measuredMuscleMass,
        walkingSpeed,
        handGripStrength,
        muscleMassIndex,
        calfCircumference,
        result,
      });

      if (!isResultValid)
        throw new BadRequestException(
          'Resultado da avaliação inválido de acordo com os dados repassados!',
        );

      const data: CreateSarcopeniaDTO = {
        date,
        weight,
        measuredMuscleMass,
        estimatedMuscleMass,
        walkingSpeed,
        handGripStrength,
        muscleMassIndex,
        calfCircumference,
        result,
        hasSarcopenia,
      };

      return await this.sarcopeniaFactory.create(data, user, type);
    } catch (error) {
      throw new InternalServerErrorException(
        'Algo de errado ocorreu na criação da avaliação.',
      );
    }
  }
}

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

  private recalculateResult({
    sex,
    age,
    weight,
    race,
    height,
    walkingSpeed,
    handGripStrength,
    muscleMassIndex,
    measuredMuscleMass,
  }: Partial<ISarcopenia>) {
    const estimatedMuscleMass = calculateEstimatedMuscleMass({
      weight,
      sex,
      race,
      height,
      age,
    });

    const indexOfEstimatedMuscleMassPerStature =
      calculateIndexOfEstimatedMuscleMassPerStature({
        estimatedMuscleMass,
        height,
      });

    const indexOfMeasuredMuscleMassPerStature =
      calculateIndexOfMeasuredMuscleMassPerStature({
        measuredMuscleMass,
        height,
      });

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
      });

      if (!isResultValid)
        throw new BadRequestException(
          'Resultado da avaliação inválido de acordo com os dados repassados!',
        );

      return await this.sarcopeniaFactory.create(input, user, type);
    } catch (error) {
      throw new InternalServerErrorException(
        'Algo de errado ocorreu na criação da avaliação.',
      );
    }
  }
}

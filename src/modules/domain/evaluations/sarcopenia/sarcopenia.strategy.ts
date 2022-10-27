import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Evaluation } from '../entities/evaluation.entity';
import { SarcopeniaDto } from './dto/sarcopenia.dto';
import { ISarcopenia } from './interfaces/sarcopenia.interface';
import { SarcopeniaFactory } from './sarcopenia.factory';

@Injectable()
export class SarcopeniaStrategy {
  constructor(private readonly sarcopeniaFactory: SarcopeniaFactory) {}

  private recalculateResult({
    sex,
    age,
    weight,
    measuredMuscleMass,
    usualWalkingSpeed,
    handGripStrength,
    muscleMassIndex,
    calfCircumference,
  }: Partial<ISarcopenia>): Partial<ISarcopenia> {}

  private validateResult(result: string, input: Partial<ISarcopenia>): boolean {
    const recalculateResult = this.recalculateResult(input);

    return recalculateResult === result;
  }

  async create(input: SarcopeniaDto): Promise<Evaluation> {
    try {
      const sex = 'homem';
      const age = 70;
      const {
        date,
        weight,
        measuredMuscleMass,
        usualWalkingSpeed,
        handGripStrength,
        muscleMassIndex,
        calfCircumference,
        result,
      } = input;

      const isResultValid = this.validateResult(result, {
        weight,
        measuredMuscleMass,
        usualWalkingSpeed,
        handGripStrength,
        muscleMassIndex,
        calfCircumference,
      });

      if (!isResultValid)
        throw new BadRequestException(
          'Resultado da avaliação inválido de acordo com os dados repassados!',
        );

      return await this.sarcopeniaFactory.createOrUpdate({
        date,
        weight,
        measuredMuscleMass,
        usualWalkingSpeed,
        handGripStrength,
        muscleMassIndex,
        calfCircumference,
        result,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Algo de errado ocorreu na criação da avaliação.',
      );
    }
  }
}

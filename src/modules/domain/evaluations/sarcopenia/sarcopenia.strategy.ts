import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { SarcopeniaDto } from './dto/sarcopenia.dto';

@Injectable()
export class SarcopeniaStrategy {
  async recalculateResult({
    weight,
    measuredMuscleMass,
    usualWalkingSpeed,
    handGripStrength,
    muscleMassIndex,
    calfCircumference,
    result,
  }) {}

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

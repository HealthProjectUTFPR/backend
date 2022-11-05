import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { parseType } from 'src/common/utils/parse-type.util';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { EvaluationOrderBy } from '../enums/order-by.enum';
import { CreateSarcopeniaDTO } from './dto/create-sarcopenia.dto';
import { GetAllSarcponiaDTO } from './dto/get-all-sarcopenia.dto';
import { GetSarcopeniaDto } from './dto/get-sarcopenia.dto';
import { SarcopeniaSchema } from './dto/sarcopenia.dto';
import { UpdateSarcopeniaDTO } from './dto/update-sarcopenia.dto';
import calculateEstimatedMuscleMass from './helpers/calculate-estimated-muscle-mass';
import calculateIndexOfEstimatedMuscleMassPerStature from './helpers/calculate-index-of-estimated-muscle-mass-per-stature';
import calculateIndexOfMeasuredMuscleMassPerStature from './helpers/calculate-index-of-measured-muscle-mass-per-stature';
import classifyResult from './helpers/classify-result';
import { ISarcopenia } from './interfaces/sarcopenia.interface';
import { SarcopeniaFactory } from './sarcopenia.factory';

@Injectable()
export class SarcopeniaStrategy {
  @InjectRepository(Evaluation)
  private readonly evaluationRepository: Repository<Evaluation>;

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

    let muscleMassIndex: number;

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
    student: Student,
  ): Promise<GetSarcopeniaDto> {
    try {
      const { sex: studentSex, birthDate } = student;

      const sex = studentSex === 'H' ? 'Homem' : 'Mulher';
      const age = dayjs(new Date()).diff(birthDate, 'year');
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

      return await this.sarcopeniaFactory.create(data, user, type, student);
    } catch (error) {
      throw new InternalServerErrorException(
        'Algo de errado ocorreu na criação da avaliação.',
      );
    }
  }

  async update(
    id: string,
    type: string,
    input: UpdateSarcopeniaDTO,
  ): Promise<GetSarcopeniaDto> {
    try {
      const validation = SarcopeniaSchema.validate(input);

      if (validation?.error) {
        throw new BadRequestException(validation.error.message);
      }

      const evaluation = await this.evaluationRepository.findOne({
        where: { id, deletedAt: null },
        relations: ['fields', 'student'],
      });

      if (!evaluation) {
        throw new NotFoundException(`Avaliação com o id ${id} não encontrada.`);
      }

      const { sex: studentSex, birthDate } = evaluation.student;

      const sex = studentSex === 'H' ? 'Homem' : 'Mulher';
      const age = dayjs(new Date()).diff(birthDate, 'year');
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

      const newData: UpdateSarcopeniaDTO = {
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

      return await this.sarcopeniaFactory.update(id, type, newData, evaluation);
    } catch (error) {
      throw new InternalServerErrorException(
        'Algo deu errado na atualiazação da avaliação.',
      );
    }
  }

  async getAll(
    orderBy: EvaluationOrderBy,
    paginationParams: PaginationParams,
    studentID: string,
  ): Promise<GetAllSarcponiaDTO> {
    const evaluations = await this.sarcopeniaFactory.getAll(
      orderBy,
      paginationParams,
      studentID,
    );

    const returnedData: GetAllSarcponiaDTO = {
      evaluations,
      count: evaluations.length,
    };

    return returnedData;
  }
}

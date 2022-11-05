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

  private parseFieldsToCorrectType(data: Evaluation): GetSarcopeniaDto {
    const { id, name, createdAt, updatedAt, result, deletedAt, fields } = data;

    const parsedFields: Partial<ISarcopenia> = {};

    fields.forEach(({ name, value, dataType }) => {
      const formattedValue = parseType(dataType, value);

      parsedFields[name] = formattedValue;
    });

    const {
      date,
      weight,
      measuredMuscleMass,
      estimatedMuscleMass,
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      calfCircumference,
      hasSarcopenia,
    } = parsedFields;

    const returnedValues: GetSarcopeniaDto = {
      id,
      name,
      date,
      weight,
      measuredMuscleMass,
      estimatedMuscleMass,
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      calfCircumference,
      hasSarcopenia,
      result,
      createdAt,
      updatedAt,
      deletedAt,
    };

    return returnedValues;
  }

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
  ): Promise<GetSarcopeniaDto[]> {
    try {
      const { page, limit } = paginationParams;

      const evaluations = await this.evaluationRepository.find({
        where: {
          name: 'sarcopenia',
          deletedAt: null,
          student: { id: studentID },
        },
        skip: (page - 1) * limit,
        take: limit,
        relations: ['fields'],
        order: { [orderBy]: 'DESC' },
      });

      const parsedEvaluations: GetSarcopeniaDto[] = evaluations.map((item) => {
        return this.parseFieldsToCorrectType(item);
      });

      return parsedEvaluations;
    } catch (error) {
      throw new InternalServerErrorException(
        'Algo deu errado na busca das avaliações.',
      );
    }
  }
}

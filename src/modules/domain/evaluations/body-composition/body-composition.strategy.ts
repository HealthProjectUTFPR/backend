import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { EvaluationOrderBy } from '../enums/order-by.enum';
import { BodyCompositionFactory } from './body-composition.factory';
import { BodyCompositionSchema } from './dto/body-composition.dto';
import { CreateBodyCompositionDto } from './dto/create-body-composition.dto';
import { GetAllBodyCompositionDto } from './dto/get-all-body-composition.dto';
import { GetBodyCompositionDto } from './dto/get-body-composition.dto';
import { UpdateBodyCompositionDto } from './dto/update-body-composition.dto';
import { calculateCardiorespiratoryCapacityResult } from './helpers/calculate-result';
import { calculateVO2LMin } from './helpers/calculate-vo2-lmin';
import { calculateVO2MlKg } from './helpers/calculate-vo2-ml-kg';
import { IBodyComposition } from './interface/body-composition.interface';

@Injectable()
export class BodyCompositionStrategy {
  @InjectRepository(Evaluation)
  private readonly evaluationRepository: Repository<Evaluation>;

  constructor(
    private readonly bodyCompositionFactory: BodyCompositionFactory,
  ) {}

  private recalculateResult({
    weight,
    finalFC,
    time,
    age,
    sex,
  }: Partial<IBodyComposition>) {
    const vo2Lmin = calculateVO2LMin({ weight, finalFC, time, age, sex });
    const vo2MlKG = calculateVO2MlKg({ weight, vo2Lmin });

    return calculateCardiorespiratoryCapacityResult({ sex, vo2MlKG });
  }

  private validateResult(result: string, input: Partial<IBodyComposition>) {
    const recalculationResult = this.recalculateResult(input);

    return recalculationResult === result;
  }

  async create(
    input: CreateBodyCompositionDto,
    user: User,
    type: string,
    student: Student,
  ): Promise<GetBodyCompositionDto> {
    const validation = BodyCompositionSchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

    const { sex: studentSex, birthDate, stature } = student;

    const sex = studentSex === 'H' ? 'Homem' : 'Mulher';
    const age = dayjs(new Date()).diff(birthDate, 'year');
    const height = stature;

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
        'Resultado inválido de acordo com os dados repassados',
      );

    const data: CreateBodyCompositionDto = {
      date,
      weight,
      time,
      finalFC,
      vo2Lmin,
      vo2MlKG,
      result,
    };

    return await this.bodyCompositionFactory.create(data, user, type);
  }

  async update(
    id: string,
    type: string,
    input: UpdateBodyCompositionDto,
  ): Promise<GetBodyCompositionDto> {
    const validation = BodyCompositionSchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

    const evaluation = await this.evaluationRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
      relations: ['fields', 'student'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
    }

    const { sex: studentSex, birthDate, stature } = evaluation.student;

    const sex = studentSex === 'H' ? 'Homem' : 'Mulher';
    const age = dayjs(new Date()).diff(birthDate, 'year');
    const height = stature;

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
        'Resultado inválido de acordo com os dados repassados',
      );

    const newData: UpdateBodyCompositionDto = {
      date,
      weight,
      time,
      finalFC,
      vo2Lmin,
      vo2MlKG,
      result,
    };

    return await this.bodyCompositionFactory.update(
      id,
      type,
      newData,
      evaluation,
    );
  }

  async getAll(
    orderBy: EvaluationOrderBy,
    paginationParams: PaginationParams,
  ): Promise<GetAllBodyCompositionDto> {
    const evaluations = await this.bodyCompositionFactory.getAll(
      orderBy,
      paginationParams,
    );

    const returnedData: GetAllBodyCompositionDto = {
      evaluations,
      count: evaluations.length,
    };

    return returnedData;
  }

  async getByID(id: string): Promise<GetBodyCompositionDto> {
    const evaluation = await this.evaluationRepository.findOne({
      where: { id, deletedAt: null },
      relations: ['fields'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
    }

    return this.bodyCompositionFactory.getOne(evaluation);
  }
}

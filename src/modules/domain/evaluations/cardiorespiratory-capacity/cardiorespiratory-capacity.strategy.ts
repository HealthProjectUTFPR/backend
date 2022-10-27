import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Evaluation } from '../entities/evaluation.entity';
import { CardiorespiratoryCapacityFactory } from './cardiorespiratory-capacity.factory';
import { CardioRespiratoryCapacitySchema } from './dto/cardiorespiratory-capacity.dto';
import { CreateCardiorespiratoryCapacityDto } from './dto/create-cardiorespiratory-capacity.dto';
import { GetAllCardiorespiratoryCapacityDto } from './dto/get-all-cardiorespiratory-capacity.dto';
import { GetCardiorespiratoryCapacityDto } from './dto/get-cardiorespiratory-capacity.dto';
import { UpdateCardiorespiratoryCapacityDto } from './dto/update-cardiorespiratory-capacity.dto';
import { calculateCardiorespiratoryCapacityResult } from './helpers/calculate-result';
import { calculateVO2LMin } from './helpers/calculate-vo2-lmin';
import { calculateVO2MlKg } from './helpers/calculate-vo2-ml-kg';
import { ICardiorespiratoryCapacity } from './interface/cardiorespiratory-capacity.interface';

@Injectable()
export class CardiorespiratoryCapacityStrategy {
  @InjectRepository(Evaluation)
  private readonly evaluationRepository: Repository<Evaluation>;

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

    return recalculationResult === result;
  }

  async create(
    input: CreateCardiorespiratoryCapacityDto,
    user: User,
    type: string,
  ): Promise<GetCardiorespiratoryCapacityDto> {
    const validation = CardioRespiratoryCapacitySchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

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
        'Resultado inválido de acordo com os dados repassados',
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

  async update(
    id: string,
    type: string,
    input: UpdateCardiorespiratoryCapacityDto,
  ): Promise<GetCardiorespiratoryCapacityDto> {
    const validation = CardioRespiratoryCapacitySchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

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
        'Resultado inválido de acordo com os dados repassados',
      );

    const evaluation = await this.evaluationRepository.findOne({
      where: {
        id,
        deletedAt: null,
      },
      relations: ['fields'],
    });

    if (!evaluation) {
      throw new NotFoundException(`Avaliação com id ${id} não encontrada`);
    }

    const newData: UpdateCardiorespiratoryCapacityDto = {
      date,
      weight,
      time,
      finalFC,
      vo2Lmin,
      vo2MlKG,
      result,
    };

    return await this.cardiorespiratoryCapacityFactory.update(
      id,
      type,
      newData,
      evaluation,
    );
  }

  async getAll(
    orderBy: string,
    paginationParams: PaginationParams,
  ): Promise<GetAllCardiorespiratoryCapacityDto> {
    const evaluations = await this.cardiorespiratoryCapacityFactory.getAll(
      orderBy,
      paginationParams,
    );

    const returnedData: GetAllCardiorespiratoryCapacityDto = {
      evaluations,
      count: evaluations.length,
    };

    return returnedData;
  }
}

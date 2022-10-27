import { Injectable } from '@nestjs/common';
import { PaginationResponseDto } from 'src/common/dtos/pagination.dto';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { CardiorespiratoryCapacityStrategy } from './cardiorespiratory-capacity/cardiorespiratory-capacity.strategy';
import { CreateCardiorespiratoryCapacityDto } from './cardiorespiratory-capacity/dto/create-cardiorespiratory-capacity.dto';
import { UpdateCardiorespiratoryCapacityDto } from './cardiorespiratory-capacity/dto/update-cardiorespiratory-capacity.dto';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { FindAllEvaluationDto } from './dto/findall-evaluation.dto';
import { FindOneEvaluationDto } from './dto/findone-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';
import { ResponseEvaluation } from './types/response-evaluation.type';

@Injectable()
export class EvaluationService {
  constructor(
    private readonly cardiorespiratoryCapacityStrategy: CardiorespiratoryCapacityStrategy,
  ) {}

  async create(
    input: CreateEvaluationDto,
    user: User,
  ): Promise<ResponseEvaluation> {
    const { data, type } = input;

    switch (type) {
      case 'ACR':
        return await this.cardiorespiratoryCapacityStrategy.create(
          data as CreateCardiorespiratoryCapacityDto,
          user,
          type,
        );
      default:
        break;
    }
    return;
  }

  async findAll(
    input: FindAllEvaluationDto,
    paginationParams: PaginationParams,
    user: User,
  ): Promise<PaginationResponseDto<ResponseEvaluation[]>> {
    const { orderBy } = input;

    const { evaluations: cardioEvaluation, count: countCardioEvaluation } =
      await this.cardiorespiratoryCapacityStrategy.getAll(
        orderBy,
        paginationParams,
      );

    const meta = {
      itemsPerPage: +paginationParams.limit,
      totalItems: +countCardioEvaluation,
      currentPage: +paginationParams.page,
      totalPages: +Math.ceil(countCardioEvaluation / paginationParams.limit),
    };

    return {
      meta: meta,
      data: cardioEvaluation,
    };
  }

  async findOne(input: FindOneEvaluationDto): Promise<Evaluation> {
    const { type, id } = input;

    switch (type) {
      case 'sarcopenia':
        console.log('Alguma Coisa');
        break;
      default:
        break;
    }
    return;
  }

  async update(
    id: string,
    input: UpdateEvaluationDto,
  ): Promise<ResponseEvaluation> {
    const { type, data } = input;

    switch (type) {
      case 'ACR':
        return await this.cardiorespiratoryCapacityStrategy.update(
          id,
          type,
          data as UpdateCardiorespiratoryCapacityDto,
        );
      default:
        break;
    }
    return;
  }
}

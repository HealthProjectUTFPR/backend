import { BadRequestException, Injectable } from '@nestjs/common';
import Joi from 'joi';
import { PaginationResponseDto } from 'src/common/dtos/pagination.dto';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { CardiorespiratoryCapacityStrategy } from './cardiorespiratory-capacity/cardiorespiratory-capacity.strategy';
import { CreateCardiorespiratoryCapacityDto } from './cardiorespiratory-capacity/dto/create-cardiorespiratory-capacity.dto';
import { UpdateCardiorespiratoryCapacityDto } from './cardiorespiratory-capacity/dto/update-cardiorespiratory-capacity.dto';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { EvaluationOrderBy } from './enums/order-by.enum';
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
  }

  async findAll(
    orderBy: EvaluationOrderBy,
    paginationParams: PaginationParams,
    user: User,
  ): Promise<PaginationResponseDto<ResponseEvaluation[]>> {
    const isOrderByValid = orderBy in EvaluationOrderBy;

    if (!isOrderByValid)
      throw new BadRequestException(`Campo ${orderBy} inválido para orderBy.`);

    const { evaluations: cardioEvaluation, count: countCardioEvaluation } =
      await this.cardiorespiratoryCapacityStrategy.getAll(
        orderBy as EvaluationOrderBy,
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

  async getByID(id: string, type: string): Promise<ResponseEvaluation> {
    const scheme = Joi.string().guid().required();
    const isValidUUID = scheme.validate(id);

    if (Boolean(isValidUUID.error))
      throw new BadRequestException('ID inválido.');

    switch (type) {
      case 'ACR':
        return await this.cardiorespiratoryCapacityStrategy.getByID(id);
      default:
        break;
    }
  }

  async update(
    id: string,
    input: UpdateEvaluationDto,
  ): Promise<ResponseEvaluation> {
    const scheme = Joi.string().guid().required();
    const isValidUUID = scheme.validate(id);

    if (Boolean(isValidUUID.error))
      throw new BadRequestException('ID inválido.');

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
  }
}

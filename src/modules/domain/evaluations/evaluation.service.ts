import { Injectable } from '@nestjs/common';
import {
  PaginationParams,
  PaginationResult,
} from 'src/common/interfaces/pagination.interface';
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
  ): Promise<PaginationResult<Evaluation>> {
    const { type, where } = input;

    switch (type) {
      case 'sarcopenia':
        console.log('Alguma Coisa');
        break;
      default:
        break;
    }
    return;
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

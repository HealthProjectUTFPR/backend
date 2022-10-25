import { Injectable } from '@nestjs/common';
import {
  PaginationParams,
  PaginationResult,
} from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { CardiorespiratoryCapacityStrategy } from './cardiorespiratoryCapacity/cardiorespiratoryCapacity.strategy';
import { CardiorespiratoryCapacityDto } from './cardiorespiratoryCapacity/dto/cardiorespiratoryCapacity.dto';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { FindAllEvaluationDto } from './dto/findall-evaluation.dto';
import { FindOneEvaluationDto } from './dto/findone-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';

@Injectable()
export class EvaluationService {
  constructor(
    private readonly cardiorespiratoryCapacityStrategy: CardiorespiratoryCapacityStrategy,
  ) {}

  async create(input: CreateEvaluationDto, user: User): Promise<string> {
    const { data, type } = input;

    switch (type) {
      case 'ACR':
        return await this.cardiorespiratoryCapacityStrategy.create(
          data as CardiorespiratoryCapacityDto,
          user,
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
    user: User,
  ): Promise<Evaluation> {
    const { type, data } = input;

    switch (type) {
      case 'sarcopenia':
        console.log('Alguma Coisa');
        break;
      default:
        break;
    }
    return;
  }
}

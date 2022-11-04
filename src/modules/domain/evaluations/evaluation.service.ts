import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  PaginationParams,
  PaginationResult,
} from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { FindAllEvaluationDto } from './dto/findall-evaluation.dto';
import { FindOneEvaluationDto } from './dto/findone-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';
import { CreateSarcopeniaDTO } from './sarcopenia/dto/create-sarcopenia';
import { SarcopeniaStrategy } from './sarcopenia/sarcopenia.strategy';
import { ResponseEvaluation } from './types/response-evaluation.type';

@Injectable()
export class EvaluationService {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  constructor(private readonly sarcopeniaStrategy: SarcopeniaStrategy) {}

  async create(
    input: CreateEvaluationDto,
    user: User,
  ): Promise<ResponseEvaluation> {
    const { data, type } = input;
    switch (type) {
      case 'sarcopenia':
        return await this.sarcopeniaStrategy.create(
          data as CreateSarcopeniaDTO,
          user,
          type,
        );
      default:
        break;
    }
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

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  PaginationParams,
  PaginationResult,
} from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { FindAllEvaluationDto } from './dto/findall-evaluation.dto';
import { FindOneEvaluationDto } from './dto/findone-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';

@Injectable()
export class EvaluationService {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  async create(input: CreateEvaluationDto, user: User): Promise<Evaluation> {
    const { data, type } = input;
    switch (type) {
      case 'sarcopenia':
        console.log('sarcopenia');
        break;
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

  async delete(id: FindOneOptions<Evaluation>): Promise<Evaluation> {
    try {
      const evaluation = await this.evaluationsRepository.findOne(id);

      if (!evaluation) {
        throw new NotFoundException('Cannot find evaluation with this id.');
      }

      await this.evaluationsRepository.softRemove(evaluation);
      return evaluation;
    } catch (error) {
      throw new BadRequestException(
        'Something went wrong. Could not remove evaluation.',
      );
    }
  }
}

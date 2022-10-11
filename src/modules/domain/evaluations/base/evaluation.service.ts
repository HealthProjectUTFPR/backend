import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  PaginationParams,
  PaginationResult,
} from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';


@Injectable()
export class EvaluationService {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  async create(
    createEvaluationDto: CreateEvaluationDto,
    user: User,
    ): Promise<Evaluation> {
    const evaluation = this.evaluationsRepository.create({
      ...createEvaluationDto,
    });

    return await this.evaluationsRepository.save(evaluation);
  }

  async findAll(
    paginationParams: PaginationParams,
    ): Promise<PaginationResult<Evaluation>> {
    const evaluations = await this.evaluationsRepository.findAndCount({
      skip: (paginationParams.page - 1) * paginationParams.limit,
      take: paginationParams.limit,
      relations: ['fields', 'testBatteries'],
    });

    const meta = {
      itemsPerPage: +paginationParams.limit,
      totalItems: +evaluations[1],
      currentPage: +paginationParams.page,
      totalPages: +Math.ceil(evaluations[1] / paginationParams.limit),
    };

    return {
      data: evaluations[0],
      meta: meta,
    };
  }

  async findOne(id: string): Promise<Evaluation> {
      const evaluation = await this.evaluationsRepository.findOne({
          where: { id: id },
      });
      if (!evaluation) throw new NotFoundException();
      return evaluation;
  }

  async update(
      id: string,
      updateEvaluationDto: UpdateEvaluationDto,
  ): Promise<Evaluation> {
      const evaluation = await this.evaluationsRepository.findOne({
        where: { id: id },
      });
      if (!evaluation) throw new NotFoundException();
      await this.evaluationsRepository.update(id, updateEvaluationDto);
      return await this.evaluationsRepository.findOneBy({ id: id });
  }
}

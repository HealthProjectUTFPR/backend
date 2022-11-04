import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Joi from 'joi';
import { PaginationResponseDto } from 'src/common/dtos/pagination.dto';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../student/entities/student.entity';
import { BodyCompositionStrategy } from './body-composition/body-composition.strategy';
import { CreateBodyCompositionDto } from './body-composition/dto/create-body-composition.dto';
import { UpdateBodyCompositionDto } from './body-composition/dto/update-body-composition.dto';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';
import { EvaluationOrderBy } from './enums/order-by.enum';
import { ResponseEvaluation } from './types/response-evaluation.type';

@Injectable()
export class EvaluationService {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  @InjectRepository(Student)
  private readonly studentRepository: Repository<Student>;

  constructor(
    private readonly bodyCompositionStrategy: BodyCompositionStrategy,
  ) {}

  async create(
    input: CreateEvaluationDto,
    user: User,
    studentId: string,
  ): Promise<ResponseEvaluation> {
    const { data, type } = input;

    const student = await this.studentRepository.findOne({
      where: { id: studentId },
    });

    if (!student) {
      throw new BadRequestException(
        `Estudante com id ${studentId} não encontrado.`,
      );
    }

    switch (type) {
      case 'bodyComposition':
        return await this.bodyCompositionStrategy.create(
          data as CreateBodyCompositionDto,
          user,
          type,
          student,
        );
      default:
        break;
    }
  }

  async findAll(
    orderBy: EvaluationOrderBy,
    paginationParams: PaginationParams,
    studentId: string,
  ): Promise<PaginationResponseDto<ResponseEvaluation[]>> {
    const student = await this.studentRepository.findOne({
      where: { id: studentId },
    });

    if (!student) {
      throw new BadRequestException(
        `Estudante com id ${studentId} não encontrado.`,
      );
    }

    const isOrderByValid = orderBy in EvaluationOrderBy;

    if (!isOrderByValid)
      throw new BadRequestException(`Campo ${orderBy} inválido para orderBy.`);

    const { evaluations: cardioEvaluation, count: countCardioEvaluation } =
      await this.bodyCompositionStrategy.getAll(
        orderBy as EvaluationOrderBy,
        paginationParams,
        studentId,
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
      case 'bodyComposition':
        return await this.bodyCompositionStrategy.getByID(id);
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
      case 'bodyComposition':
        return await this.bodyCompositionStrategy.update(
          id,
          type,
          data as UpdateBodyCompositionDto,
        );
      default:
        break;
    }
  }

  async delete(id: string): Promise<Evaluation> {
    try {
      const evaluation = await this.evaluationsRepository.findOne({
        where: { id },
      });

      if (!evaluation) {
        throw new NotFoundException(`Avaliação com id ${id} não encontrada.`);
      }

      await this.evaluationsRepository.softRemove(evaluation);
      return evaluation;
    } catch (error) {
      throw new BadRequestException(
        'Algo deu errado. Não conseguimos remover a avaliação.',
      );
    }
  }
}

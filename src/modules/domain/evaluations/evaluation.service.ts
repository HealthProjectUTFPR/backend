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
import { avdStrategy } from './avd/avd.strategy';
import { CreateAvdDto } from './avd/dto/create-avd.dto';
import { UpdateAvdDto } from './avd/dto/update-avd.dto';
import { BalanceStrategy } from './balance/balance.strategy';
import { CreateBalanceDto } from './balance/dto/create-balance.dto';
import { UpdateBalanceDto } from './balance/dto/update-balance.dto';
import { BodyCompositionStrategy } from './body-composition/body-composition.strategy';
import { CreateBodyCompositionDto } from './body-composition/dto/create-body-composition.dto';
import { UpdateBodyCompositionDto } from './body-composition/dto/update-body-composition.dto';
import { CardiorespiratoryCapacityStrategy } from './cardiorespiratory-capacity/cardiorespiratory-capacity.strategy';
import { CreateCardiorespiratoryCapacityDto } from './cardiorespiratory-capacity/dto/create-cardiorespiratory-capacity.dto';
import { UpdateCardiorespiratoryCapacityDto } from './cardiorespiratory-capacity/dto/update-cardiorespiratory-capacity.dto';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';
import { EvaluationOrderBy } from './enums/order-by.enum';
import { CreateFragilityDTO } from './fragility/dto/create-fragility.dto';
import { UpdateFragilityDTO } from './fragility/dto/update-fragility.dto';
import { FragilityStrategy } from './fragility/fragility.strategy';
import { CreateSarcopeniaDTO } from './sarcopenia/dto/create-sarcopenia.dto';
import { UpdateSarcopeniaDTO } from './sarcopenia/dto/update-sarcopenia.dto';
import { SarcopeniaStrategy } from './sarcopenia/sarcopenia.strategy';
import { ResponseEvaluation } from './types/response-evaluation.type';

@Injectable()
export class EvaluationService {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  @InjectRepository(Student)
  private readonly studentRepository: Repository<Student>;

  constructor(
    private readonly bodyCompositionStrategy: BodyCompositionStrategy,
    private readonly cardiorespiratoryCapacityStrategy: CardiorespiratoryCapacityStrategy,
    private readonly sarcopeniaStrategy: SarcopeniaStrategy,
    private readonly avdStrategy: avdStrategy,
    private readonly balanceStrategy: BalanceStrategy,
    private readonly fragilityStrategy: FragilityStrategy,
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
      case 'sarcopenia':
        return await this.sarcopeniaStrategy.create(
          data as CreateSarcopeniaDTO,
          user,
          type,
          student,
        );
      case 'ACR':
        return await this.cardiorespiratoryCapacityStrategy.create(
          data as CreateCardiorespiratoryCapacityDto,
          user,
          type,
          student,
        );
      case 'bodyComposition':
        return await this.bodyCompositionStrategy.create(
          data as CreateBodyCompositionDto,
          user,
          type,
          student,
        );
      case 'AVD':
        return await this.avdStrategy.create(
          data as CreateAvdDto,
          user,
          type,
          student,
        );
      case 'AEQ':
        return await this.balanceStrategy.create(
          data as CreateBalanceDto,
          user,
          type,
          student,
        );

      case 'fragilidade':
        return await this.fragilityStrategy.create(
          data as CreateFragilityDTO,
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
    studentID: string,
  ): Promise<PaginationResponseDto<ResponseEvaluation[]>> {
    const student = await this.studentRepository.findOne({
      where: { id: studentID },
    });

    if (!student) {
      throw new BadRequestException(
        `Estudante com id ${studentID} não encontrado.`,
      );
    }

    const isOrderByValid = orderBy in EvaluationOrderBy;

    if (!isOrderByValid)
      throw new BadRequestException(`Campo ${orderBy} inválido para orderBy.`);

    const { evaluations: bodyEvaluation, count: countBodyEvaluation } =
      await this.bodyCompositionStrategy.getAll(
        orderBy as EvaluationOrderBy,
        paginationParams,
        studentID,
      );

    const { evaluations: cardioEvaluation, count: countCardioEvaluation } =
      await this.cardiorespiratoryCapacityStrategy.getAll(
        orderBy as EvaluationOrderBy,
        paginationParams,
        studentID,
      );

    const {
      evaluations: sarcopeniaEvaluation,
      count: countSarcopeniaEvaluation,
    } = await this.sarcopeniaStrategy.getAll(
      orderBy as EvaluationOrderBy,
      paginationParams,
      studentID,
    );

    const { evaluations: avdEvaluation, count: countAvdEvaluation } =
      await this.avdStrategy.getAll(
        orderBy as EvaluationOrderBy,
        paginationParams,
        studentID,
      );

    const { evaluations: balanceEvaluation, count: countBalanceEvaluation } =
      await this.balanceStrategy.getAll(
        orderBy as EvaluationOrderBy,
        paginationParams,
        studentID,
      );

    const {
      evaluations: fragilityEvaluation,
      count: countFragilityEvaluation,
    } = await this.fragilityStrategy.getAll(
      orderBy as EvaluationOrderBy,
      paginationParams,
      studentID,
    );

    const amountOfEvaluations =
      countSarcopeniaEvaluation +
      countBodyEvaluation +
      countCardioEvaluation +
      countAvdEvaluation +
      countBalanceEvaluation +
      countFragilityEvaluation;

    const meta = {
      itemsPerPage: +paginationParams.limit,
      totalItems: +amountOfEvaluations,
      currentPage: +paginationParams.page,
      totalPages: +Math.ceil(amountOfEvaluations / paginationParams.limit),
    };

    return {
      meta: meta,
      data: [
        ...cardioEvaluation,
        ...sarcopeniaEvaluation,
        ...bodyEvaluation,
        ...balanceEvaluation,
        ...avdEvaluation,
        ...fragilityEvaluation,
      ],
    };
  }

  async getById(id: string, type: string): Promise<ResponseEvaluation> {
    const scheme = Joi.string().guid().required();
    const isValidUUID = scheme.validate(id);

    if (Boolean(isValidUUID.error))
      throw new BadRequestException('ID inválido.');

    switch (type) {
      case 'sarcopenia':
        return await this.sarcopeniaStrategy.getByID(id);
      case 'ACR':
        return await this.cardiorespiratoryCapacityStrategy.getByID(id);
      case 'bodyComposition':
        return await this.bodyCompositionStrategy.getByID(id);
      case 'AVD':
        return await this.avdStrategy.getByID(id);
      case 'AEQ':
        return await this.balanceStrategy.getById(id);
      case 'fragilidade':
        return await this.fragilityStrategy.getById(id);
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
      case 'sarcopenia':
        return await this.sarcopeniaStrategy.update(
          id,
          type,
          data as UpdateSarcopeniaDTO,
        );
      case 'ACR':
        return await this.cardiorespiratoryCapacityStrategy.update(
          id,
          type,
          data as UpdateCardiorespiratoryCapacityDto,
        );
      case 'bodyComposition':
        return await this.bodyCompositionStrategy.update(
          id,
          type,
          data as UpdateBodyCompositionDto,
        );
      case 'AVD':
        return await this.avdStrategy.update(id, type, data as UpdateAvdDto);
      case 'AEQ':
        return await this.balanceStrategy.update(
          id,
          type,
          data as UpdateBalanceDto,
        );
      case 'fragilidade':
        return await this.fragilityStrategy.update(
          id,
          type,
          data as UpdateFragilityDTO,
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

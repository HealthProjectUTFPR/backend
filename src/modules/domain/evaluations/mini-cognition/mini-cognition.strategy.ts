import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { EvaluationOrderBy } from '../enums/order-by.enum';

import { MiniCognitionFactory } from './mini-cognition.factory';
import { MiniCognitionSchema } from './dto/mini-cognition.dto';
import { CreateMiniCognitionDto } from './dto/create-mini-cognition.dto';
import { GetMiniCognitionDto } from './dto/get-mini-cognition.dto';
import { GetAllMiniCognitionDto } from './dto/get-all-mini-cognition.dto';
import { UpdateMiniCognitionDto } from './dto/update-mini-cognition.dto';

@Injectable()
export class MiniCognitionStrategy {
  @InjectRepository(Evaluation)
  private readonly evaluationRepository: Repository<Evaluation>;

  constructor(
    private readonly MiniCognitionFactory: MiniCognitionFactory,
  ) {}

  async create(
    input: CreateMiniCognitionDto,
    user: User,
    type: string,
    student: Student,
  ): Promise<GetMiniCognitionDto> {
    const validation = MiniCognitionSchema.validate(input);

    if (validation?.error) {
      throw new BadRequestException(validation.error.message);
    }

    return await this.MiniCognitionFactory.create(input, user, type, student);
  }
}
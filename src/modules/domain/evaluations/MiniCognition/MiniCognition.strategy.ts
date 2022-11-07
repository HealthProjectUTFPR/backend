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

import { MiniCognitionFactory } from './MiniCognition.factory';
import { MiniCognitionSchema } from './dto/MiniCognition.dto';
import { CreateMiniCognitionDto } from './dto/create-MiniCognition.dto';
import { GetAllMiniCognitionDto } from './dto/get-all-MiniCognition.dto';
import { GetMiniCognitionDto } from './dto/get-MiniCognition.dto';
import { UpdateMiniCognitionDto } from './dto/update-MiniCognition.dto';

@Injectable()
export class BodyCompositionStrategy {
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
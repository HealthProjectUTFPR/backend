import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JoiPipe } from 'nestjs-joi';
import { AuthUser } from 'src/common/decorators/auth-user.decorator';
import { Pagination } from 'src/common/decorators/pagination.decorator';
import { PaginationResponseDto } from 'src/common/dtos/pagination.dto';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { JwtAuthGuard } from 'src/modules/infrastructure/auth/auth.guard';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { FindAllEvaluationDto } from './dto/findall-evaluation.dto';
import { FindOneEvaluationDto } from './dto/findone-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';
import { EvaluationService } from './evaluation.service';

@Controller('evaluation')
@UseGuards(JwtAuthGuard)
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post('create')
  async create(
    @AuthUser() user: User,
    @Body(new JoiPipe({ group: 'CREATE' }))
    createEvaluationDto: CreateEvaluationDto,
  ): Promise<string> {
    if (!user) throw new ForbiddenException('User not logged in');

    return await this.evaluationService.create(createEvaluationDto, user);
  }

  @Get('list')
  async findAll(
    @AuthUser() user: User,
    @Pagination() paginationParams: PaginationParams,
    @Body(new JoiPipe({ group: 'FIND' }))
    input: FindAllEvaluationDto,
  ): Promise<PaginationResponseDto<Evaluation>> {
    return new PaginationResponseDto<Evaluation>(
      await this.evaluationService.findAll(input, paginationParams, user),
    );
  }

  @Get('get/:id')
  async findOne(
    @Param('id') id: string,
    @Body(new JoiPipe({ group: 'FIND' }))
    input: FindOneEvaluationDto,
  ): Promise<Evaluation> {
    return await this.evaluationService.findOne(input);
  }

  @Patch('update/:id')
  async update(
    @AuthUser() user: User,
    @Param('id') id: string,
    @Body(new JoiPipe({ group: 'UPDATE' }))
    input: UpdateEvaluationDto,
  ): Promise<Evaluation> {
    return await this.evaluationService.update(id, input, user);
  }
}
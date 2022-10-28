import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JoiPipe } from 'nestjs-joi';
import { AuthUser } from 'src/common/decorators/auth-user.decorator';
import { Pagination } from 'src/common/decorators/pagination.decorator';
import { PaginationResponseDto } from 'src/common/dtos/pagination.dto';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { JwtAuthGuard } from 'src/modules/infrastructure/auth/auth.guard';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { EvaluationService } from './evaluation.service';
import { ResponseEvaluation } from './types/response-evaluation.type';

@ApiTags('evaluation')
@Controller('evaluation')
@UseGuards(JwtAuthGuard)
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post('/')
  async create(
    @AuthUser() user: User,
    @Body(new JoiPipe({ group: 'CREATE' }))
    input: CreateEvaluationDto,
  ): Promise<ResponseEvaluation> {
    if (!user) throw new ForbiddenException('Sessão de usuário inválida');

    return await this.evaluationService.create(input, user);
  }

  @Get('/')
  async findAll(
    @AuthUser() user: User,
    @Pagination() paginationParams: PaginationParams,
    @Query('orderBy') orderBy: string,
  ): Promise<PaginationResponseDto<ResponseEvaluation[]>> {
    if (!user) throw new ForbiddenException('Sessão de usuário inválida');

    return new PaginationResponseDto<ResponseEvaluation[]>(
      await this.evaluationService.findAll(orderBy, paginationParams, user),
    );
  }

  @Get('/:id')
  async findOne(
    @AuthUser() user: User,
    @Param('id') id: string,
    @Query('type') type: string,
  ): Promise<ResponseEvaluation> {
    if (!user) throw new ForbiddenException('Sessão de usuário inválida');

    return await this.evaluationService.getByID(id, type);
  }

  @Patch('/:id')
  async update(
    @AuthUser() user: User,
    @Param('id') id: string,
    @Body(new JoiPipe({ group: 'UPDATE' }))
    input: UpdateEvaluationDto,
  ): Promise<ResponseEvaluation> {
    if (!user) throw new ForbiddenException('Sessão de usuário inválida');

    return await this.evaluationService.update(id, input);
  }
}

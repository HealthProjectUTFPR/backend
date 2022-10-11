import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JoiPipe } from 'nestjs-joi';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';
import { FieldService } from './field.service';
import { JwtAuthGuard } from 'src/modules/infrastructure/auth/auth.guard';
import { Field } from './entities/field.entity';
import { Pagination } from 'src/common/decorators/pagination.decorator';
import { PaginationParams } from 'src/common/interfaces/pagination.interface';
import { PaginationResponseDto } from 'src/common/dtos/pagination.dto';

@Controller('field')
@UseGuards(JwtAuthGuard)
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Post('create')
  async create(
    @Body(new JoiPipe({ group: 'CREATE' }))
    createFieldDto: CreateFieldDto,
  ): Promise<Field> {
    return await this.fieldService.create(createFieldDto);
  }

  @Get('list')
  async findAll(
    @Pagination() paginationParams: PaginationParams,
  ): Promise<PaginationResponseDto<Field>> {
    return new PaginationResponseDto<Field>(
      await this.fieldService.findAll(paginationParams),
    );
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string): Promise<Field> {
    return await this.fieldService.findOne(id);
  }

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body(new JoiPipe({ group: 'UPDATE' }))
    updateFieldDto: UpdateFieldDto,
  ): Promise<Field> {
    return await this.fieldService.update(id, updateFieldDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string): Promise<Field> {
    return await this.fieldService.remove(id);
  }
}

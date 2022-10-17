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
import { JwtAuthGuard } from 'src/modules/infrastructure/auth/auth.guard';
import { PrePosService } from './pre-pos.service';
import { CreatePrePosDto } from './dto/create-pre_pos.dto';
import { UpdatePrePosDto } from './dto/update-pre_pos.dto';

@Controller('prepos')
@UseGuards(JwtAuthGuard)
export class PrePosController {
  constructor(private readonly prePosService: PrePosService) {}

  @Post('create')
  create(@Body() createPrePosDto: CreatePrePosDto) {
    return this.prePosService.create(createPrePosDto);
  }

  @Get('get')
  findAll() {
    return this.prePosService.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.prePosService.findOne(id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updatePrePosDto: UpdatePrePosDto,
  ) {
    return this.prePosService.update(id, updatePrePosDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.prePosService.remove(id);
  }
}

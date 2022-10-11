import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SarcopeniaService } from './sarcopenia.service';
import { CreateSarcopeniaDto } from './dto/create-sarcopenia.dto';
import { UpdateSarcopeniaDto } from './dto/update-sarcopenia.dto';

@Controller('sarcopenia')
export class SarcopeniaController {
  constructor(private readonly sarcopeniaService: SarcopeniaService) {}

  @Post()
  create(@Body() createSarcopeniaDto: CreateSarcopeniaDto) {
    return this.sarcopeniaService.create(createSarcopeniaDto);
  }

  @Get()
  findAll() {
    return this.sarcopeniaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sarcopeniaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSarcopeniaDto: UpdateSarcopeniaDto,
  ) {
    return this.sarcopeniaService.update(+id, updateSarcopeniaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sarcopeniaService.remove(+id);
  }
}

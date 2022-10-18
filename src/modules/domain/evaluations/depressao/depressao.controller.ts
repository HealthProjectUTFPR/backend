import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepressaoService } from './depressao.service';
import { CreateDepressaoDto } from './dto/create-depressao.dto';

@Controller('depressao')
export class DepressaoController {
  constructor(private readonly depressaoService: DepressaoService) {}

  @Post()
  create(@Body() createDepressaoDto: CreateDepressaoDto) {
    return this.depressaoService.create(createDepressaoDto);
  }

  @Get()
  findAll() {
    return this.depressaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depressaoService.findOne(+id);
  }
}

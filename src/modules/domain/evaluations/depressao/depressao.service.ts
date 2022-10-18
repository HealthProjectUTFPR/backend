import { Injectable } from '@nestjs/common';
import { CreateDepressaoDto } from './dto/create-depressao.dto';

@Injectable()
export class DepressaoService {
  create(createDepressaoDto: CreateDepressaoDto) {
    return 'This action adds a new depressao';
  }

  findAll() {
    return `This action returns all depressao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} depressao`;
  }
}

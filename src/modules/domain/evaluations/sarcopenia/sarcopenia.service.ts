import { Injectable } from '@nestjs/common';
import { CreateSarcopeniaDto } from './dto/create-sarcopenia.dto';
import { UpdateSarcopeniaDto } from './dto/update-sarcopenia.dto';

@Injectable()
export class SarcopeniaService {
  create(createSarcopeniaDto: CreateSarcopeniaDto) {
    return 'This action adds a new sarcopenia';
  }

  findAll() {
    return `This action returns all sarcopenia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sarcopenia`;
  }

  update(id: number, updateSarcopeniaDto: UpdateSarcopeniaDto) {
    return `This action updates a #${id} sarcopenia`;
  }

  remove(id: number) {
    return `This action removes a #${id} sarcopenia`;
  }
}

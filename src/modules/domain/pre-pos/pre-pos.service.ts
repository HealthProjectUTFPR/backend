import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePrePosDto } from './dto/create-pre_pos.dto';
import { UpdatePrePosDto } from './dto/update-pre_pos.dto';
import { PrePos } from './entities/pre-pos.entity';

@Injectable()
export class PrePosService {
  @InjectRepository(PrePos)
  private readonly prePosRepository: Repository<PrePos>;

  async create(createPrePosDto: CreatePrePosDto) {
    const prePos = this.prePosRepository.create(createPrePosDto);
    return await this.prePosRepository.save(prePos);
  }

  async findAll() {
    return await this.prePosRepository.find();
  }

  async findOne(id: string) {
    return await this.prePosRepository.findOneBy({ id });
  }

  async update(id: string, updatePrePosDto: UpdatePrePosDto) {
    const prePos = await this.findOne(id);
    prePos.date = updatePrePosDto.date
    prePos.horarioPos = updatePrePosDto.horarioPos
    prePos.horarioPre = updatePrePosDto.horarioPre
    prePos.pasPre = updatePrePosDto.pasPre
    prePos.pasPos = updatePrePosDto.pasPos
    prePos.padPre = updatePrePosDto.padPre
    prePos.padPos = updatePrePosDto.padPos
    prePos.glicemiaPos = updatePrePosDto.glicemiaPos
    prePos.glicemiaPre = updatePrePosDto.glicemiaPre
    prePos.horarioTreino = updatePrePosDto.horarioTreino
    prePos.pseE = updatePrePosDto.pseE
    prePos.observacao = updatePrePosDto.observacao
    return await this.prePosRepository.save(prePos);
  }

  async remove(id: string) {
    const prePos = await this.findOne(id);
    await this.prePosRepository.softRemove(prePos);
    return prePos;
  }
}
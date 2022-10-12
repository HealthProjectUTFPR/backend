import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  @InjectRepository(Student)
  private readonly studentRepository: Repository<Student>;

  async create(createStudentDto: CreateStudentDto) {
    console.log(createStudentDto);
    const student = this.studentRepository.create(createStudentDto);
    return await this.studentRepository.save(student);
  }
  // async findAll() {
  //   return await this.prePosRepository.find();
  // }

  // async findOne(id: string) {
  //   return await this.prePosRepository.findOneBy({ id });
  // }

  // async update(id: string, updatePrePosDto: UpdatePrePosDto) {
  //   const prePos = await this.findOne(id);
  //   prePos.date = updatePrePosDto.date
  //   prePos.horarioPos = updatePrePosDto.horarioPos
  //   prePos.horarioPre = updatePrePosDto.horarioPre
  //   prePos.pasPre = updatePrePosDto.pasPre
  //   prePos.pasPro = updatePrePosDto.pasPro
  //   prePos.padPre = updatePrePosDto.padPre
  //   prePos.padPro = updatePrePosDto.padPro
  //   prePos.glicemiaPro = updatePrePosDto.glicemiaPro
  //   prePos.glicemiaPre = updatePrePosDto.glicemiaPre
  //   prePos.horarioTreino = updatePrePosDto.horarioTreino
  //   prePos.pseE = updatePrePosDto.pseE
  //   prePos.observacao = updatePrePosDto.observacao
  //   return await this.prePosRepository.save(prePos);
  // }

  // async remove(id: string) {
  //   const prePos = await this.findOne(id);
  //   await this.prePosRepository.softRemove(prePos);
  //   return prePos;
  // }
}

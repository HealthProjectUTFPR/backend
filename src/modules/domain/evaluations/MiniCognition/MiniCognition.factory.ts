import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { Field } from '../entities/field.entity';

import { CreateMiniCognitionDto } from './dto/create-MiniCognition.dto';
import { GetMiniCognitionDto } from './dto/get-MiniCognition.dto';
dayjs.extend(customParseFormat);

@Injectable()
export class MiniCognitionFactory {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  @InjectRepository(Field)
  private readonly fieldRepository: Repository<Field>;

  async create(
    input: CreateMiniCognitionDto,
    user: User,
    type: string,
    student: Student,
  ): Promise<GetMiniCognitionDto> {
    const { result, ...rest } = input;

    const inputs = [];
    Object.entries(rest).forEach(([key, value]) => {
      let type: string = typeof value;
      if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';
      else if (type === 'string') type = dayjs(value.toString()).isValid() ? 'date' : 'string';
      
      inputs.push({
        name: key,
        value: String(value),
        dataType: type,
      });
    });

    let evaluation = this.evaluationsRepository.create({
      name: type,
      result: result.toString(),
      createdBy: user,
      student,
    });

    evaluation = await this.evaluationsRepository.save(evaluation);

    const fields: Field[] = await Promise.all(
      inputs.map(async (field) => {
        const entityField = this.fieldRepository.create({
          ...field,
          evaluation,
        } as Field);

        return await this.fieldRepository.save(entityField);
      }),
    );

    evaluation.fields = fields;
    const { id } = evaluation;

    await evaluation.save();

    console.log(evaluation);


    const returnEvaluation: GetMiniCognitionDto = {
      id: id,
      name: evaluation.name,
      createdAt: evaluation.createdAt,
      updatedAt: evaluation.updatedAt,
      result: Number(evaluation.result),
    };

    return returnEvaluation;
  }
}

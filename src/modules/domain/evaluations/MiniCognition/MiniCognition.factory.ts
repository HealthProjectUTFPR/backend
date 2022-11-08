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



    const returnEvaluation: GetMiniCognitionDto = {
      id: id,
      name: evaluation.name,
      createdAt: evaluation.createdAt,
      updatedAt: evaluation.updatedAt,
      checked1_1: evaluation.fields[0].value === 'true',
      checked1_2: evaluation.fields[1].value === 'true',
      checked1_3: evaluation.fields[2].value === 'true',
      checked1_4: evaluation.fields[3].value === 'true',
      checked1_5: evaluation.fields[4].value === 'true',
      checked2_1: evaluation.fields[5].value === 'true',
      checked2_2: evaluation.fields[6].value === 'true',
      checked2_3: evaluation.fields[7].value === 'true',
      checked2_4: evaluation.fields[8].value === 'true',
      checked2_5: evaluation.fields[9].value === 'true',
      checked3_1: evaluation.fields[10].value === 'true',
      checked3_2: evaluation.fields[11].value === 'true',
      checked3_3: evaluation.fields[12].value === 'true',
      checked4_1: evaluation.fields[13].value === 'true',
      checked4_2: evaluation.fields[14].value === 'true',
      checked4_3: evaluation.fields[15].value === 'true',
      checked4_4: evaluation.fields[16].value === 'true',
      checked4_5: evaluation.fields[17].value === 'true',
      checked5_1: evaluation.fields[18].value === 'true',
      checked5_2: evaluation.fields[19].value === 'true',
      checked5_3: evaluation.fields[20].value === 'true',
      checked5_4: evaluation.fields[21].value === 'true',
      checked5_5: evaluation.fields[22].value === 'true',
      checked6_1: evaluation.fields[23].value === 'true',
      checked6_2: evaluation.fields[24].value === 'true',
      checked6_3: evaluation.fields[25].value === 'true',
      checked7_1: evaluation.fields[26].value === 'true',
      checked7_2: evaluation.fields[27].value === 'true',
      checked8_1: evaluation.fields[28].value === 'true',
      checked9_1: evaluation.fields[29].value === 'true',
      checked9_2: evaluation.fields[30].value === 'true',
      checked9_3: evaluation.fields[31].value === 'true',
      checked10_1: evaluation.fields[32].value === 'true',
      checked11_1: evaluation.fields[33].value === 'true',
      checked12_1: evaluation.fields[34].value === 'true',
      result: Number(evaluation.result),
    };

    return returnEvaluation;
  }
}

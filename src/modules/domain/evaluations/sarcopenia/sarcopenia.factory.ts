import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dayjs from 'dayjs';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Student } from '../../student/entities/student.entity';
import { Evaluation } from '../entities/evaluation.entity';
import { Field } from '../entities/field.entity';
import { CreateSarcopeniaDTO } from './dto/create-sarcopenia.dto';
import { GetSarcopeniaDto } from './dto/get-sarcopenia.dto';
import { ISarcopenia } from './interfaces/sarcopenia.interface';

@Injectable()
export class SarcopeniaFactory {
  @InjectRepository(Evaluation)
  private readonly evaluationRepository: Repository<Evaluation>;

  @InjectRepository(Field)
  private readonly fieldRepository: Repository<Field>;

  private parseFieldsToString(data: Partial<CreateSarcopeniaDTO>) {
    const values = Object.entries(data);
    const inputs = [];

    values.forEach(([key, value]) => {
      let type: string = typeof value;
      if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';
      if (type === 'string')
        type = dayjs(value as string).isValid() ? 'date' : 'string';

      inputs.push({
        name: key,
        value: String(value),
        dataType: type,
      });
    });

    return inputs;
  }

  private parseFieldsToCorrectType(data: Evaluation): GetSarcopeniaDto {
    const { id, name, createdAt, updatedAt, result, deletedAt, fields } = data;

    const parsedFields: Partial<ISarcopenia> = {};

    fields.forEach(({ name, value, dataType }) => {
      let formattedValue: string | number | Date | boolean;

      switch (dataType) {
        case 'date':
          formattedValue = new Date(value);
          break;
        case 'boolean':
          formattedValue = value === 'false' ? false : true;
          break;
        case 'string':
          formattedValue = String(value);
          break;
        case 'int':
          formattedValue = parseInt(value, 10);
        case 'float':
          formattedValue = parseFloat(value);
      }

      parsedFields[name] = formattedValue;
    });

    const {
      date,
      weight,
      measuredMuscleMass,
      estimatedMuscleMass,
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      calfCircumference,
      hasSarcopenia,
    } = parsedFields;

    const returnedValues: GetSarcopeniaDto = {
      id,
      name,
      date,
      weight,
      result,
      measuredMuscleMass,
      estimatedMuscleMass,
      walkingSpeed,
      handGripStrength,
      muscleMassIndex,
      calfCircumference,
      hasSarcopenia,
      createdAt,
      updatedAt,
      deletedAt,
    };

    return returnedValues;
  }

  async create(
    input: CreateSarcopeniaDTO,
    user: User,
    type: string,
    student: Student,
  ): Promise<GetSarcopeniaDto> {
    const { result, ...rest } = input;

    const arrayOfFields = this.parseFieldsToString(rest);

    let evaluation = this.evaluationRepository.create({
      name: type,
      result,
      createdBy: user,
      student,
    });

    evaluation = await this.evaluationRepository.save(evaluation);

    const fields: Field[] = await Promise.all(
      arrayOfFields.map(async (field) => {
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

    evaluation = await this.evaluationRepository.findOne({
      where: {
        id: id,
      },
      relations: ['fields'],
    });

    return this.parseFieldsToCorrectType(evaluation);
  }

  async update(
    id: string,
    type: string,
    input: CreateSarcopeniaDTO,
    evaluation: Evaluation,
  ): Promise<GetSarcopeniaDto> {
    const { result, ...rest } = input;

    const arrayOfFields = this.parseFieldsToString(rest);

    const { fields } = evaluation;

    await Promise.all(
      arrayOfFields.map((field, idx) => {
        const newField: Field = fields[idx];

        newField.name = field.name;
        newField.value = field.value;
        newField.dataType = field.dataType;

        return this.fieldRepository.update(newField.id, newField);
      }),
    );

    evaluation.updatedAt = new Date();
    evaluation.result = result;

    evaluation.save();

    return this.parseFieldsToCorrectType(evaluation);
  }
}

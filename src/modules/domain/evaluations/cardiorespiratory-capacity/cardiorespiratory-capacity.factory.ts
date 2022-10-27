import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Evaluation } from '../entities/evaluation.entity';
import { Field } from '../entities/field.entity';
import { CreateCardiorespiratoryCapacityDto } from './dto/create-cardiorespiratory-capacity.dto';
import { GetCardiorespiratoryCapacityDto } from './dto/get-cardiorespiratory-capacity.dto';
import { ICardiorespiratoryCapacity } from './interface/cardiorespiratory-capacity.interface';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

@Injectable()
export class CardiorespiratoryCapacityFactory {
  @InjectRepository(Evaluation)
  private readonly evaluationsRepository: Repository<Evaluation>;

  @InjectRepository(Field)
  private readonly fieldRepository: Repository<Field>;

  private parseFieldsToString(
    data: Partial<CreateCardiorespiratoryCapacityDto>,
  ) {
    const values = Object.entries(data);
    const inputs = [];

    values.forEach(([key, value]) => {
      let type: string = typeof value;
      if (type === 'number') type = Number.isInteger(value) ? 'int' : 'float';
      if (type === 'string') type = dayjs(value).isValid() ? 'date' : 'string';

      inputs.push({
        name: key,
        value: String(value),
        dataType: type,
      });
    });

    return inputs;
  }

  private parseFieldsToCorrectType(
    data: Evaluation,
  ): GetCardiorespiratoryCapacityDto {
    const { id, createdAt, updatedAt, result, deletedAt, fields } = data;

    const parsedFields: Partial<ICardiorespiratoryCapacity> = {};

    fields.forEach(({ name, value, dataType }) => {
      let formattedValue: string | number | Date | boolean;

      switch (dataType) {
        case 'date':
          formattedValue = new Date(value);
          break;
        case 'boolean':
          formattedValue = Boolean(value);
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

    const { date, time, vo2MlKG, weight, vo2Lmin, finalFC } = parsedFields;

    const returnedValues: GetCardiorespiratoryCapacityDto = {
      date,
      time,
      vo2MlKG,
      weight,
      vo2Lmin,
      finalFC,
      id,
      result,
      createdAt,
      updatedAt,
      deletedAt,
    };

    return returnedValues;
  }

  async create(
    input: CreateCardiorespiratoryCapacityDto,
    user: User,
    type: string,
  ): Promise<GetCardiorespiratoryCapacityDto> {
    const { result, ...rest } = input;

    const arrayOfFields = this.parseFieldsToString(rest);

    let evaluation = this.evaluationsRepository.create({
      name: type,
      result,
      createdBy: user,
    });

    evaluation = await this.evaluationsRepository.save(evaluation);

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

    evaluation = await this.evaluationsRepository.findOne({
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
    input: CreateCardiorespiratoryCapacityDto,
    evaluation: Evaluation,
  ): Promise<GetCardiorespiratoryCapacityDto> {
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

    evaluation.result = result;

    evaluation.save();

    return this.parseFieldsToCorrectType(evaluation);
  }
}

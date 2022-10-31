import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Evaluation } from '../entities/evaluation.entity';
import { Field } from '../entities/field.entity';
import { CreateSarcopeniaDTO } from './dto/create-sarcopenia';
import { GetSarcopeniaDto } from './dto/get-sarcopenia-dto';
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
      if (type === 'string') type = dayjs(value).isValid() ? 'date' : 'string';

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

    const returnedValues: GetSarcopeniaDto = {
      id,
      name,
      date,
      time,
      vo2MlKG,
      weight,
      vo2Lmin,
      finalFC,
      result,
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
  ): Promise<GetSarcopeniaDto> {
    const { result, ...rest } = input;

    const arrayOfFields = this.parseFieldsToString(rest);
  }
}

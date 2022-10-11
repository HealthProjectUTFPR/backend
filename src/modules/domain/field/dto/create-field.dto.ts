import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { DataType } from '../entities/field.entity';

export class CreateFieldDto {
  @JoiSchema(['CREATE'], Joi.string().required())
  name: string;

  @JoiSchema(['CREATE'], Joi.string().optional())
  value: string;

  @JoiSchema(
    ['CREATE'],
    Joi.string()
      .valid(...Object.values(DataType))
      .required(),
  )
  dataType: DataType;

  @JoiSchema(['CREATE'], Joi.string().optional())
  evaluationFieldId: string;

  @JoiSchema(['CREATE'], Joi.string().optional())
  testBatteriesFieldId: string;

  @JoiSchema(['CREATE'], Joi.forbidden())
  createdBy: User;
}

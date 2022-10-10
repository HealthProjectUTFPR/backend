import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { DataType } from '../entities/field.entity';

export class UpdateFieldDto {
  @JoiSchema(['UPDATE'], Joi.string().optional())
  name: string;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  value: string;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  type: DataType;

  @JoiSchema(['UPDATE'], Joi.forbidden())
  createdBy: User;
}
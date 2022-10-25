import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class UpdateUserDto {
  @JoiSchema(['EDIT'], Joi.string().optional())
  name: string;

  @JoiSchema(['EDIT'], Joi.string().email().optional())
  email: string;

  @JoiSchema(['EDIT'], Joi.string().min(8).optional())
  password: string;
}

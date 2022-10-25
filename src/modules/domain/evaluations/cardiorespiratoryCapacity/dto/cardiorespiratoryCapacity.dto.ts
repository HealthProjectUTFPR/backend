import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CardiorespiratoryCapacityDto {
  @JoiSchema(Joi.string().required())
  date: Date;

  @JoiSchema(Joi.number().required())
  weight: number;

  @JoiSchema(Joi.number().required())
  time: number;

  @JoiSchema(Joi.number().required())
  finalFC: number;

  @JoiSchema(Joi.number().required())
  vo2Lmin: number;

  @JoiSchema(Joi.number().required())
  vo2MlKG: number;

  @JoiSchema(Joi.string().required())
  result: string;
}

import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { GetCardiorespiratoryCapacityDto } from './get-cardiorespiratory-capacity.dto';

export class GetAllCardiorespiratoryCapacityDto {
  @JoiSchema(Joi.array().required())
  evaluations: GetCardiorespiratoryCapacityDto[];

  @JoiSchema(Joi.number().required())
  count: number;
}

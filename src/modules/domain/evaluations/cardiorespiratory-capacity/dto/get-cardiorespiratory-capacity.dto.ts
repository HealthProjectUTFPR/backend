import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { CreateCardiorespiratoryCapacityDto } from './create-cardiorespiratory-capacity.dto';

export class GetCardiorespiratoryCapacityDto extends CreateCardiorespiratoryCapacityDto {
  @JoiSchema(Joi.string().required())
  id: string;

  @JoiSchema(Joi.date().required())
  createdAt: Date;

  @JoiSchema(Joi.date().required())
  updatedAt: Date;

  @JoiSchema(Joi.date().allow(null))
  deletedAt: Date;
}

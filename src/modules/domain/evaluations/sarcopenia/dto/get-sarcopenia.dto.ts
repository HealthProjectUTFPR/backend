import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { CreateSarcopeniaDTO } from './create-sarcopenia.dto';

export class GetSarcopeniaDto extends CreateSarcopeniaDTO {
  @JoiSchema(Joi.string().required())
  id: string;

  @JoiSchema(Joi.string().required())
  name: string;

  @JoiSchema(Joi.date().required())
  createdAt: Date;

  @JoiSchema(Joi.date().required())
  updatedAt: Date;

  @JoiSchema(Joi.date().required())
  deletedAt: Date;
}

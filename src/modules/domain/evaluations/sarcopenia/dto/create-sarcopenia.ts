import Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateSarcopeniaDTO {
  @JoiSchema(Joi.string().required())
  date: Date;

  @JoiSchema(Joi.number().required())
  weight: number;

  @JoiSchema(Joi.number().required())
  measuredMuscleMass: number;

  @JoiSchema(Joi.number().required())
  estimatedMuscleMass: number;

  @JoiSchema(Joi.number().required())
  walkingSpeed: number;

  @JoiSchema(Joi.number().required())
  handGripStrength: number;

  @JoiSchema(Joi.number().required())
  muscleMassIndex: number;

  @JoiSchema(Joi.number().required())
  calfCircumference: number;

  @JoiSchema(Joi.string().required())
  result: string;

  @JoiSchema(Joi.number().required())
  hasSarcopenia: boolean;
}

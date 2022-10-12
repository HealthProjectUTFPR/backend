import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateStudentDto {
  @JoiSchema(['CREATE'], Joi.string().required())
  name: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  sex: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  breed: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  stature: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  contact: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  healthPlan: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  emergencyContact: string;

  @JoiSchema(['CREATE'], Joi.string().required())
  address: string;
}

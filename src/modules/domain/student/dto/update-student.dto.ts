// import { PartialType } from '@nestjs/mapped-types';
// import { UPDATEStudentDto } from './UPDATE-student.dto';

import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class UpdateStudentDto {
  @JoiSchema(['UPDATE'], Joi.string().optional())
  name: string;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  sex: string;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  breed: string;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  stature: string;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  contact: string;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  healthPlan: string;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  emergencyContact: string;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  address: string;
}

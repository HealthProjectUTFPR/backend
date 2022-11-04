import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateCardiorespiratoryCapacityDto {
  @ApiProperty()
  @JoiSchema(Joi.date().required())
  date: Date;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  weight: number;

  @JoiSchema(Joi.number())
  measuredMuscleMass?: number;

  @JoiSchema(Joi.number())
  estimatedMuscleMass?: number;

  @JoiSchema(Joi.number().required())
  walkingSpeed: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  handGripStrength: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  muscleMassIndex: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  calfCircumference: number;

  @ApiProperty()
  @JoiSchema(Joi.string().required())
  result: string;

  @JoiSchema(Joi.number().required())
  hasSarcopenia: boolean;
}

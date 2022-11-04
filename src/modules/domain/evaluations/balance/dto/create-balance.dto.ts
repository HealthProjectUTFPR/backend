import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateBalanceDto {
  @ApiProperty()
  @JoiSchema(Joi.date().required())
  date: Date;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo1: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo2: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo3: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo4: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo5: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo6: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo7: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo8: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo9: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo10: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo11: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo12: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo13: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  campo14: number;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  total: string;
}

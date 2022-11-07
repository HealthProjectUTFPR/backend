import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateMiniCognitionDto {
  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked1_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked1_2: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked1_3: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked1_4: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked1_5: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked2_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked2_2: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked2_3: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked2_4: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked2_5: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked3_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked3_2: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked3_3: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked4_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked4_2: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked4_3: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked4_4: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked4_5: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked5_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked5_2: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked5_3: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked5_4: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked5_5: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked6_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked6_2: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked6_3: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked7_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked7_2: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked8_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked9_2: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked9_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked9_3: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked10_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked11_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.boolean().required())
  checked12_1: Boolean;

  @ApiProperty()
  @JoiSchema(Joi.number().required())
  result: number;
}
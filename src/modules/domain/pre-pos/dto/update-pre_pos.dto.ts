import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class UpdatePrePosDto {
  @JoiSchema(['UPDATE'], Joi.date().optional())
  date: Date;

  @JoiSchema(['UPDATE'], Joi.date().optional())
  horarioPos: Date;

  @JoiSchema(['UPDATE'], Joi.date().optional())
  horarioPre: Date;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  pasPre: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  pasPro: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  padPre: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  padPro: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  glicemiaPre: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  glicemiaPro: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  horarioTreino: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  pseE: number;

  @JoiSchema(['UPDATE'], Joi.string().optional())
  observacao: string;
}
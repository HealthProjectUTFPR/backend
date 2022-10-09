import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreatePrePosDto{
  @JoiSchema(['CREATE'], Joi.date().required())
  date: Date;

  @JoiSchema(['CREATE'], Joi.date().optional())
  horarioPos: Date;

  @JoiSchema(['CREATE'], Joi.date().required())
  horarioPre: Date;

  @JoiSchema(['CREATE'], Joi.number().optional())
  pasPre: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  pasPro: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  padPre: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  padPro: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  glicemiaPre: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  glicemiaPro: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  horarioTreino: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  pseE: number;

  @JoiSchema(['CREATE'], Joi.string().optional())
  observacao: string;
}













import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreatePrePosDto{
  @JoiSchema(['CREATE'], Joi.date().required())
  date: Date;

  @JoiSchema(['CREATE'], Joi.date().optional())
  horarioPos: Date;

  @JoiSchema(['CREATE'], Joi.date().optional())
  horarioPre: Date;

  @JoiSchema(['CREATE'], Joi.number().optional())
  pasPre: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  pasPos: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  padPre: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  padPos: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  glicemiaPre: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  glicemiaPos: number;

  @JoiSchema(['CREATE'], Joi.number().optional())
  horarioTreino: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  pseEPre: number;

  @JoiSchema(['UPDATE'], Joi.number().optional())
  pseEPos: number;

  @JoiSchema(['CREATE'], Joi.string().optional())
  observacao: string;
}













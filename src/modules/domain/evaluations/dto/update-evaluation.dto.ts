import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

export class UpdateEvaluationDto {
  @JoiSchema(['CREATE'], Joi.string().required())
  type: string;

  @JoiSchema(['CREATE'], Joi.object().required())
  data: object;

  @JoiSchema(['CREATE'], Joi.forbidden())
  createdBy: User;
}

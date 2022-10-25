import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

export class UpdateEvaluationDto {
  @JoiSchema(['UPDATE'], Joi.string().required())
  type: string;

  @JoiSchema(['UPDATE'], Joi.object().required())
  data: object;

  @JoiSchema(['UPDATE'], Joi.forbidden())
  createdBy: User;
}

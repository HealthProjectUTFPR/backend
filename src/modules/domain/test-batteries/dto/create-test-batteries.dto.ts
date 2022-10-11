import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

export class CreateTestBatteriesDto {
  @JoiSchema(['CREATE'], Joi.string().required())
  name: string;

  @JoiSchema(['CREATE'], Joi.string().optional())
  evaluationsId: string;

  @JoiSchema(['CREATE'], Joi.forbidden())
  createdBy: User;
}
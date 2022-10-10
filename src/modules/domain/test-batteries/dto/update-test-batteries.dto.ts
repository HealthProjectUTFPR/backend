import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

export class UpdateTestBatteriesDto {
    @JoiSchema(['UPDATE'], Joi.string().optional())
    name: string;
    
    @JoiSchema(['UPDATE'], Joi.forbidden())
    createdBy: User;
}
import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

export class UpdateEvaluationDto {
    @JoiSchema(['UPDATE'], Joi.string().optional())
    name: string;
    
    @JoiSchema(['UPDATE'], Joi.string().optional())
    result: string;
    
    @JoiSchema(['UPDATE'], Joi.forbidden())
    createdBy: User;
}
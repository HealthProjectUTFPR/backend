import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';

export class CreateEvaluationDto {
    @JoiSchema(['CREATE'], Joi.string().required())
    name: string;
    
    @JoiSchema(['CREATE'], Joi.string().optional())
    result: string;
    
    @JoiSchema(['CREATE'], Joi.forbidden())
    createdBy: User;
}
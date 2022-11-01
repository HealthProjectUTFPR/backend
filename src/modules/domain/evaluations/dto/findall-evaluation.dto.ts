import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class FindAllEvaluationDto {
    @JoiSchema(['FIND'], Joi.string().required())
    type: string;
    
    @JoiSchema(['FIND'], Joi.string().required())
    where: string;
}
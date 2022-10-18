import * as Joi from 'joi';
import { JoiSchema } from 'nestjs-joi';

export class CreateDepressaoDto {
    @JoiSchema(['CREATE'], Joi.string().required())
    avlName: string;

    @JoiSchema(['CREATE'], Joi.string().optional())
    avlScore: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo1: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo2: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo3: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo4: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo5: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo6: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo7: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo8: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo9: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo10: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo11: string;

    @JoiSchema(['CREATE'], Joi.string().required())
    campo12: string;

    @JoiSchema(['CREATE'], Joi.string().optional())
    campo13: string;

    @JoiSchema(['CREATE'], Joi.string().optional())
    campo14: string;

    @JoiSchema(['CREATE'], Joi.string().optional())
    campo15: string;
}

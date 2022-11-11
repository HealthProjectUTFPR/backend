import Joi from 'joi';

export const functionalBatterySchema = Joi.object({
    date: Joi.date().required(),
    sitGetUpResult: Joi.number().required(),
    sitGetUpPercent: Joi.number().required(),
    sitGetUpClassification: Joi.string().required(),
    elbowFlexionResult: Joi.number().required(),
    elbowFlexionPercent: Joi.number().required(),
    elbowFlexionClassification: Joi.string().required(),
    stationaryMarchResult: Joi.number().required(),
    stationaryMarchPercent: Joi.number().required(),
    stationaryMarchClassification: Joi.string().required(),
    sitFeetResult: Joi.string().required(),
    sitFeetPercent: Joi.number().required(),
    sitFeetClassification: Joi.string().required(),
    TUGResult: Joi.number().required(),
    TUGPercent: Joi.number().required(),
    TUGClassification: Joi.string().required(),
    getBackResult:Joi.number().required,
    getBackPercent:Joi.number().required(),
    getBackClassification: Joi.string().required(),
    result: Joi.string().required(),

}). options({
    abortEarly: false,
})
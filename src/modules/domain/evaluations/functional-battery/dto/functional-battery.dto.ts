import Joi from 'joi';

export const functionalBatterySchema = Joi.object({
    date: Joi.date().required(),
    sitGetUp: Joi.number().required(),
    elbowFlexion: Joi.number().required(),
    stationaryMarch: Joi.number().required(),
    SitFeet: Joi.number().required(),
    result: Joi.number().required,
    TUG: Joi.number().required(),
    getBack:Joi.number().required,
    classification: Joi.string().required(),

}). options({
    abortEarly: false,
})
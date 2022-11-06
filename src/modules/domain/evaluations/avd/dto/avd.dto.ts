import Joi from "joi";

export const AvdSchema = Joi.object({
    date: Joi.date().required(),
    bath: Joi.boolean().required(),
    dress: Joi.boolean().required(),
    bathroom: Joi.boolean().required(),
    transfer: Joi.boolean().required(),
    salute: Joi.boolean().required(),
    feeding: Joi.boolean().required(),
    result: Joi.string().required()
}).options({ abortEarly: false });
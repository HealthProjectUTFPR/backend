import Joi from 'joi';

export const SarcopeniaSchema = Joi.object({
  date: Joi.date().required(),
  weight: Joi.number().required(),
  measuredMuscleMass: Joi.number(),
  estimatedMuscleMass: Joi.number(),
  walkingSpeed: Joi.number().required(),
  handGripStrength: Joi.number().required(),
  muscleMassIndex: Joi.number().required(),
  calfCircumference: Joi.number().required(),
  result: Joi.string().required(),
  hasSarcopenia: Joi.number().required(),
}).options({ abortEarly: false });

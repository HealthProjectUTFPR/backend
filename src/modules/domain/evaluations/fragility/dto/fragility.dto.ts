import Joi from 'joi';

export const FragilitySchema = Joi.object({
  date: Joi.string().required(),
  activityDifficultLastWeekFrequency: Joi.number().required().strict(),
  KeepGoingDifficultLastWeekFrequency: Joi.number().required().strict(),
  walkingDays: Joi.number().required().strict(),
  walkingMinutesPerDay: Joi.number().required().strict(),
  moderateActivityDays: Joi.number().required().strict(),
  moderateActivityMinutesPerDay: Joi.number().required().strict(),
  vigorousActivityDays: Joi.number().required().strict(),
  vigorousActivityMinutesPerDay: Joi.number().required().strict(),
  weight: Joi.number().required().strict(),
  time: Joi.number().required().strict(),
  handgripStrength: Joi.number().required().strict(),
  imc: Joi.number().required().strict(),
  mets1: Joi.number().required().strict(),
  mets2: Joi.number().required().strict(),
  mets3: Joi.number().required().strict(),
  metsTotal: Joi.number().required().strict(),
  kcal: Joi.number().required().strict(),
  score: Joi.number().required().strict(),
  result: Joi.string().required(),
}).options({ abortEarly: false });

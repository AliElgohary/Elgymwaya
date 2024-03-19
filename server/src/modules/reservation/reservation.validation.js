import Joi from "joi";

const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/;

export const creatSchema = {
  body: Joi.object({
    date: Joi.date().required(),
    start_time: Joi.string().pattern(new RegExp(timeRegex)),
    end_time: Joi.string().pattern(new RegExp(timeRegex)),
  }),
};

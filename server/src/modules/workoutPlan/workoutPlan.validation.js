import Joi from "joi";

const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/;

export const creatSchema = {
    body: Joi.object({
        client_id: Joi.string().hex().min(24).max(24).required(),
        coach_id: Joi.string().hex().min(24).max(24).required(),
        start_time: Joi.string().pattern(new RegExp(timeRegex)),
        end_time: Joi.string().pattern(new RegExp(timeRegex)),
        status: Joi.string().min(3).max(10).required(),
        workouts: Joi.array().required(),
        progress: Joi.array().required(),
        status: Joi.string().min(3).max(100).required(),
        notes: Joi.string().min(3).max(200).required(),
    }),
  };

  export const updateSchema = {
    body: Joi.object({
        client_id: Joi.string().hex().min(24).max(24),
        coach_id: Joi.string().hex().min(24).max(24),
        start_time: Joi.string().pattern(new RegExp(timeRegex)),
        end_time: Joi.string().pattern(new RegExp(timeRegex)),
        status: Joi.string().min(3).max(10),
        workouts: Joi.array(),
        progress: Joi.array(),
        status: Joi.string().min(3).max(100),
        notes: Joi.string().min(3).max(200),
    }),
  };